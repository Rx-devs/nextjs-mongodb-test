/* import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(movies);
}; */

import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const query = req.query.movie_id;
  const client = await clientPromise
  const db = client.db("sample_mflix");
  const data2 = await db.collection("movies").findOne({_id: new ObjectId(query)});
  console.log(data2)
  res.json(data2);
}

// http://localhost:3000/api/moviedetails?movie_id=573a1390f29313caabcd4135