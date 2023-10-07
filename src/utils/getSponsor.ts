import { client } from "@/utils/client";
import { MicroCMSQueries } from "microcms-js-sdk";

// ニュース一覧を取得
export const getSponsorList = async () => {
  const sponsorData = await client.getList<any>({
    endpoint: "sponsor",
  });

  return sponsorData;
};
