// src/app/data/blogData.ts

export interface BlogPost {
    id: string;
    date: string;
    title: string;
    description: string;
    category: "Technology" | "Health" | "Feature";
    author: {
      name: string;
      avatar: string;
      role: string;
      timeAgo: string;
    };
    image?: string;
    content: {
      type: "paragraph" | "heading" | "list" | "image" | "quote";
      content: string;
      items?: string[];  // For list type
      imageUrl?: string; // For image type
      alt?: string;      // For image type
    }[];
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      date: "2024-12-08",
      title: "Our Website is now live",
      description: "Stay tuned here for more updates",
      category: "Technology",
      author: {
        name: "Prateek",
        avatar: "/images/default-avatar.png",
        role: "Founder",
        timeAgo: "2h ago"
      },
      image: "/images/Our-Website-is-live.png",
      content: [
        {
          "type": "paragraph",
          "content": "We're excited to share that our website, pexl.xyz, is now live! This is just the beginning of our journey to revolutionize how you approach health and wellness. Stay tuned as we bring you a new way to connect with your health, one that's powered by personalized AI and designed with your well-being in mind."
        },
        {
          "type": "heading",
          "content": "What to Expect from Pexl"
        },
        {
          "type": "paragraph",
          "content": "Pexl isn’t just another health app. It’s a trusted AI companion that truly understands you. Our mission is to celebrate your progress, support you through challenges, and adapt to your unique needs, making health and wellness a journey you’ll enjoy."
        },
        {
          "type": "list",
          "content": "Coming Soon:",
          "items": [
            "Intelligent Conversations: An AI companion that listens, understands, and provides personalized guidance",
            "Smart Progress Tracking: Visual insights and adaptive recommendations tailored to your journey",
            "Holistic Health Approach: A balanced focus on physical, mental, and emotional well-being",
            "Community-Driven Development: Your feedback and suggestions shape how Pexl grows"
          ]
        },
        {
          "type": "paragraph",
          "content": "This is just the start, and we can’t wait to show you more. Stay tuned for updates, new features, and opportunities to be part of this exciting journey with Pexl!"
        }
      ]
    },
    
    // You can add more blog posts here easily!
  ];