// Sponsors.tsx
import { SponsorListType } from "@/types/sponsor";
import { SponsorLogo } from "./SponsorLogo";

type SponsorListProps = {
  sponsors: SponsorListType | undefined;
};

export const SponsorLogoList = ({ sponsors }: SponsorListProps) => {
  // sponsors.contentsがundefinedの場合は空の配列を返す
  const contents = sponsors?.contents ?? [];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-[42px] sm:flex-row">
      {contents.map((sponsor, index) => (
        <SponsorLogo key={index} ImagePath={sponsor.url?.url ?? undefined} />
      ))}
    </div>
  );
};
