import { getAdminList } from "@/utils/getAdmin";
import { getNewsList } from "@/utils/getNews";
import { getSponsorList } from "@/utils/getSponsor";
import { HoldingFormat } from "@/components/HoldingFormat";
import { MemberList } from "@/components/Member/list";

import { MembersType, MembersListType } from "@/types/member";
import { SponsorLogoList } from "@/components/Sponsors/SponsorLogoList";
import { NewsList } from "@/components/News/NewsList";
import { Top } from "@/components/Top";
import { ImageSize, SectionTitle } from "@/components/SectionTitle";
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

  return (
    <main>
      <section className="mt-full">
        <Top />
      </section>
      <section className="mt-20">
        <SectionTitle
          title={"Holding Format"}
          subtitle={"開催形式"}
          image={ImageSize.small}
        />
        <HoldingFormat />
      </section>
      <section className="mt-20">
        <SectionTitle
          title={"Admin"}
          subtitle={"運営メンバー"}
          image={ImageSize.small}
        />
        <MemberList members={admin ? admin : undefined} />
      </section>
      <section>
        <NewsList newsCards={news ? news : undefined}></NewsList>
      </section>
      <section className="mt-20 mb-10">
        <SectionTitle
          title={"Sponsors"}
          subtitle={"協賛・スポンサー企業"}
          image={ImageSize.small}
        />
        {/* @ts-ignore */}
        <SponsorLogoList sponsors={sponsors ? sponsors : undefined} />
      </section>
      <section className="mt-10 mx-10">
        <FAQList faqs={faqs} />
      </section>
    </main>
  );
}
