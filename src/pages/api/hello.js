// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDB } from '../config/db'

await connectDB();
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
