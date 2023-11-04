import { getAdminList } from "@/utils/getAdmin";
import { getNewsList } from "@/utils/getNews";
import { getSponsorList } from "@/utils/getSponsor";
import { HoldingFormat } from "@/components/HoldingFormat";
import { MemberList } from "@/components/Member/list";
import { SponsorLogoList } from "@/components/Sponsors/SponsorLogoList";
import { NewsList } from "@/components/News/NewsList";
import { Top } from "@/components/Top";
import { ActivityList } from "@/components/Activities/list";
import { ImageSize, SectionTitle } from "@/components/SectionTitle";
import { FAQList } from "@/components/FAQcomponents/FAQList";
import { SNSCardList } from "@/components/SNSCard/list";

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
    <>
      <section className="max-w-5xl">
        <Top />
      </section>
      <div className="bg-background w-full mt-20 rounded-t-[140px]">
        <div className="max-w-3xl mx-auto pb-32">
          <section className="mt-24">
            <SectionTitle
              title={"Holding Format"}
              subtitle={"開催形式"}
              image={ImageSize.small}
            />
            <HoldingFormat />
          </section>
          <section className="mt-24">
            <SectionTitle
              title={"Admin"}
              subtitle={"運営メンバー"}
              image={ImageSize.small}
            />
            <MemberList members={admin ? admin : undefined} />
          </section>
          <section className="mt-24">
            <SectionTitle
              title={"News"}
              subtitle={"最新情報"}
              image={ImageSize.small}
            />
            <NewsList newsCards={news ? news : undefined}></NewsList>
          </section>
          <section className="mt-24">
            <SectionTitle
              title={"Sponsors"}
              subtitle={"協賛・スポンサー企業"}
              image={ImageSize.small}
            />
            {/* @ts-ignore */}
            <SponsorLogoList sponsors={sponsors ? sponsors : undefined} />
          </section>
          <section className="mt-24">
            <SectionTitle
              title={"Activities"}
              subtitle={"活動内容"}
              image={ImageSize.small}
            />

            <ActivityList />
          </section>
          <section className="mt-24">
            <SectionTitle
              title={"FAQ"}
              subtitle={"よくある質問"}
              image={ImageSize.small}
            />
            <FAQList faqs={faqs} />
          </section>
          <section className="mt-24">
            <SectionTitle
              title={"SNS"}
              subtitle={"公式SNS"}
              image={ImageSize.small}
            />
            <SNSCardList />
          </section>
        </div>
      </div>
    </>
  );
}
