import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {

  const client = await clientPromise
  const db = client.db("sample_mflix");
  const data2 = await db.collection("movies").find({}).limit(20).toArray();
  console.log(data2)
  res.json(data2);
}
