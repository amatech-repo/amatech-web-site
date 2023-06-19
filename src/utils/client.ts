import {
  createClient,
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("Missing env MICROCMS_SERVICE_DOMAIN");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("Missing env MICROCMS_API_KEY");
}

// api取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});
