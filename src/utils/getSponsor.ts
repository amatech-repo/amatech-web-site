import { SponsorListType } from "@/types/sponsor";
import { client } from "@/utils/client";

// スポンサー一覧を取得
export const getSponsorList = async () => {
  const sponsorData = await client.getList<SponsorListType>({
    endpoint: "sponsor",
  });

  return sponsorData;
};
