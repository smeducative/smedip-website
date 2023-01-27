import { Activities } from "../type/youtube";

const key = process.env.YT_API_KEY;
const channelId = process.env.YT_CHANNEL_ID;

const apiEndpoint = `https://www.googleapis.com/youtube/v3`;

export const getActivities = async () => {
  const data =
    await fetch(`${apiEndpoint}/activities?channelId=${channelId}&key=${key}
    &part=snippet,contentDetails&maxResults=10`);

  const response = await data.json();

  console.log(data, response.errors);

  return response;
};
