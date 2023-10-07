import { MembersListType } from "@/types/member";
import { client } from "@/utils/client";

// 運営メンバー 一覧を取得
export const getAdminList = async () => {
  const adminData = await client.get<MembersListType>({
    endpoint: "admin",
  });

  return adminData;
};
