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
    q: "参加費はかかりますか？",
    a: "参加費は無料です。",
    emoji: "💰",
  },
  {
    q: "参加資格はありますか？",
    a: "特にありません。どなたでもご参加いただけます。",
    emoji: "👥",
  },
  {
    q: "どんな人が参加していますか？",
    a: "学生から社会人まで幅広い方が参加しています。",
    emoji: "👩‍💻",
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
              id="holding-format"
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
              id="faq"
            />
            <FAQList faqs={faqs} />
          </section>
          <section className="mt-24">
            <SectionTitle
              title={"SNS"}
              subtitle={"公式SNS"}
              image={ImageSize.small}
              id="sns"
            />
            <SNSCardList />
          </section>
        </div>
      </div>
    </>
  );
}
