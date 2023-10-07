import { client } from "@/utils/client";
import { MicroCMSQueries } from "microcms-js-sdk";

// ニュース一覧を取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const newsData = await client.getList<any>({
    endpoint: "news",
    queries,
  });
  return newsData;
};
