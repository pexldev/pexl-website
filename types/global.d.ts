import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// This is necessary to make TypeScript treat this file as a module
export {};
