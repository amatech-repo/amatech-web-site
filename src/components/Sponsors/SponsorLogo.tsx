import Image from "next/image";

type Props = {
  ImagePath?: string;
};

export const SponsorLogo = ({ ImagePath }: Props) => {
  return (
    <div className="flex h-[196px] w-[196px] items-center justify-center rounded-[32px] bg-white shadow-2xl">
      {ImagePath && <Image src={ImagePath} alt="" width={160} height={116} />}
    </div>
  );
};
