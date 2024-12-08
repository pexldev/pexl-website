import { NextResponse } from "next/server";
import { RateLimiterMemory } from "rate-limiter-flexible";
import clientPromise from "@/app/lib/mongodb";
import validator from "validator";  // This is the fix!

// Rate limiter setup - like a bouncer at a club
const rateLimiter = new RateLimiterMemory({
  points: 5, // Number of requests
  duration: 60, // Per minute
});

// Email sanitization - think of it as a security screening
function sanitizeEmail(email: string): string {
  return validator.normalizeEmail(email) || "";
}

export async function POST(request: Request) {
  try {
    // Rate limiting check
    try {
      await rateLimiter.consume(request.headers.get("x-real-ip") || "anonymous");
    } catch {
      return NextResponse.json(
        { error: "RATE LIMIT EXCEEDED // PLEASE WAIT" },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    // Email validation
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json(
        { error: "INVALID PROTOCOL SEQUENCE // CHECK EMAIL FORMAT" },
        { status: 400 }
      );
    }

    // Sanitize email
    const sanitizedEmail = sanitizeEmail(email);

    const client = await clientPromise;
    const db = client.db("pexl");

    // Check for duplicate emails
    const existingUser = await db.collection("subscribers").findOne({ 
      email: sanitizedEmail 
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "EMAIL ALREADY IN PROTOCOL DATABASE" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    await db.collection("subscribers").insertOne({
      email: sanitizedEmail,
      timestamp: new Date(),
      status: "pending",
      ipAddress: request.headers.get("x-real-ip") || "anonymous",
      userAgent: request.headers.get("user-agent") || "unknown"
    });

    return NextResponse.json({ 
      message: "INITIALIZATION SEQUENCE COMPLETE" 
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "PROTOCOL INITIALIZATION FAILED" },
      { status: 500 }
    );
  }
}