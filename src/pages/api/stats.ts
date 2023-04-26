// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { defaultStats } from "./statsData/default";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(defaultStats);
  } else if (req.method === "POST") {
    const data = req.body;
    res.status(201).json(data);
  }
}
