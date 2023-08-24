import { MongoClient } from "mongodb";

async function handler(req,res){

    if(req.method === 'POST'){

      const data = req.body;
      const client = await MongoClient.connect('mongodb+srv://Saumya_24:Saumya_123@cluster0.6o5hkxs.mongodb.net/?retryWrites=true&w=majority');
      const db = client.db();

      const todoCollection = db.collection('Todo')
      const result = await todoCollection.insertOne(data);
      console.log(result)
      client.close();

      res.status(201).json({message:'Todo inserted!'});

    }


}

export default handler;