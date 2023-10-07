"use client";

import { useEffect, useState } from "react";

import { getAdminList } from "@/utils/getAdmin";
import { getNewsList } from "@/utils/getNews";
import { getSponsorList } from "@/utils/getSponsor";
import { HoldingFormat } from "@/components/HoldingFormat";
import { MemberList } from "@/components/Member/list";

import { MembersType, MembersListType } from "@/types/member";

export default async function Home() {
  const admin = await getAdminList();
  const news = await getNewsList();
  const sponsor = await getSponsorList();

  // TODO: 型指定をする
  // console.log('member', member);
  // console.log('########### news ########', news);
  // console.log('######## sponsor ########', sponsor);
  // console.log("########### admin ########", admin);

  return (
    <main>
      <section className="mt-10">
        <HoldingFormat />
      </section>
      <section className="mt-10">
        <MemberList members={admin ? admin : undefined} />
      </section>
    </main>
  );
}
