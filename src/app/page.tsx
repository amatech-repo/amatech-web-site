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
    q: "活動内容を具体的に教えて下さい！",
    a: "活動内容をご覧ください！その他わからないこと、気になることがあればTwitterのDMへ気軽にお問い合わせください！",
    emoji: "🚀",
  },
  {
    q: "プログラミング経験は必須ですか？",
    a: "文系理系問わず、未経験者も大歓迎です！",
    emoji: "🐻‍❄️",
  },
  {
    q: "学年に制限はありますか？",
    a: "京都産業大学に所属する方ならどなたでも歓迎します！他大学の方やコミュニティの方で興味ある方は、Twitter DMまでご連絡ください！",
    emoji: "🐣",
  },
  {
    q: "掛け持ちは可能ですか？",
    a: "可能です！CACや他サークルに入っている方も在籍しています！",
    emoji: "😆",
  },
];

export default async function Home() {
  const admin = await getAdminList();
  const news = await getNewsList();
  const sponsors = await getSponsorList();

  return (
    <>
      <section className="">
        <Top />
      </section>
      <div className="mt-20 w-full rounded-t-[140px] bg-background">
        <div className="pb-32">
          <section className="mt-24 max-w-2xl mx-auto">
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
          <section className="mt-24 max-w-3xl mx-auto">
            <SectionTitle
              title={"News"}
              subtitle={"最新情報"}
              image={ImageSize.small}
            />
            <NewsList newsCards={news ? news : undefined}></NewsList>
          </section>
          <section className="mt-24 max-w-5xl mx-auto">
            <SectionTitle
              title={"Sponsors"}
              subtitle={"協賛・スポンサー企業"}
              image={ImageSize.small}
            />
            {/* @ts-ignore */}
            <SponsorLogoList sponsors={sponsors ? sponsors : undefined} />
          </section>
          <section className="mt-24 max-w-3xl mx-auto">
            <SectionTitle
              title={"Activities"}
              subtitle={"活動内容"}
              image={ImageSize.small}
            />

            <ActivityList />
          </section>
          <section className="mt-24 max-w-3xl mx-auto">
            <SectionTitle
              title={"FAQ"}
              subtitle={"よくある質問"}
              image={ImageSize.small}
              id="faq"
            />
            <FAQList faqs={faqs} />
          </section>
          <section className="mt-24 max-w-5xl mx-auto">
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
