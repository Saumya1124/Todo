import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://Saumya_24:Saumya_123@cluster0.6o5hkxs.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todoCollection = db.collection('Todo');
  const result = await todoCollection.find().toArray();

  res.status(200).json({ data: result })
}