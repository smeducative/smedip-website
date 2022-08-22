import type { NextApiRequest, NextApiResponse } from "next";
import { getActivities } from "../../lib/getYtActivities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const items = await getActivities();

    // cache result for 1 hour
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    res.status(200).json(items);
  } catch (e) {
    console.log(e);
  }
}
