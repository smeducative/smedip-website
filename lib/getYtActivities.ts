import { Activities } from "../type/youtube";

const key = process.env.YT_API_KEY as string;
const channelId = process.env.YT_CHANNEL_ID as string;

const apiEndpoint = `https://www.googleapis.com/youtube/v3`;

export const getActivities = async ({ channelId }: { channelId: string }) => {
  const data =
    await fetch(`${apiEndpoint}/activities?channelId=${channelId}&key=${key}
    &part=snippet,contentDetails&maxResults=4`);

  const response = await data.json();

  return response;
};
