import type { NextApiRequest, NextApiResponse } from "next";
import { getActivities } from "../../lib/getYtActivities";
import { Activities } from "../../type/youtube";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { items }: { items: Activities[] } = await getActivities();

    // cache result for 1 hour
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    res.status(200).json(items);
  } catch (e) {
    console.log(e);
  }
}
