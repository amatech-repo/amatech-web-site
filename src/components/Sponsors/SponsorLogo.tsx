import Image from "next/image";

type Props = {
  imagePath: string;
};

export const SponsorLogo = ({ imagePath }: Props) => {
  return (
    <div>
      <div className="w-[196.63px] h-[196.63px] bg-white rounded-[32px] shadow-2xl flex items-center justify-center">
        <Image
          src={imagePath}
          alt=""
          width={160.55}
          height={116}
          className="w-[160.55px] h-[116px] p-4"
        />
      </div>
    </div>
  );
};
