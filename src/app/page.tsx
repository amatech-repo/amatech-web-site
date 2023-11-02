"use client";

import { useEffect, useState } from "react";

import { getAdminList } from "@/utils/getAdmin";
import { getNewsList } from "@/utils/getNews";
import { getSponsorList } from "@/utils/getSponsor";
import { HoldingFormat } from "@/components/HoldingFormat";
import { MemberList } from "@/components/Member/list";

import { MembersType, MembersListType } from "@/types/member";
import { SponsorLogoList } from "@/components/Sponsors/SponsorLogoList";
import { NewsList } from "@/components/News/NewsList";
import { Top } from "@/components/Top";
import { ActivityList } from "@/components/Activities/list";
import { FAQList } from "@/components/FAQcomponents/FAQList";

const faqs = [
  {
    imagePath: "./images/FAQ1.svg",
    isRight: false,
  },
  {
    imagePath: "./images/FAQ2.svg",
    isRight: true,
  },
  {
    imagePath: "./images/FAQ3.svg",
    isRight: false,
  },
  {
    imagePath: "./images/FAQ4.svg",
    isRight: true,
  },
];

export default async function Home() {
  const admin = await getAdminList();
  const news = await getNewsList();
  const sponsors = await getSponsorList();

  // TODO: 型指定をする
  // console.log('member', member);
  console.log("########### news ########", news);
  console.log("######## sponsor ########", sponsors);
  // console.log("########### admin ########", admin);

  return (
    <main>
      <section className="mt-full">
        <Top />
      </section>
      <section className="mt-20">
        <HoldingFormat />
      </section>
      <section className="mt-20">
        <MemberList members={admin ? admin : undefined} />
      </section>
      <section>
        <NewsList newsCards={news ? news : undefined}></NewsList>
      </section>
      <section className="mt-20 mb-10">
        {/* @ts-ignore */}
        <SponsorLogoList sponsors={sponsors ? sponsors : undefined} />
      </section>
      <section className="mt-20 mb-10">
        <ActivityList />
      <section className="mt-10 mx-10">
        <FAQList faqs={faqs} />
      </section>
    </main>
  );
}
