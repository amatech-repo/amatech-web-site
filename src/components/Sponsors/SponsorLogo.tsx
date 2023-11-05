import Image from "next/image";

type Props = {
  ImagePath?: string;
};

export const SponsorLogo = ({ ImagePath }: Props) => {
  return (
    <div className="grid h-40 w-40 place-content-center rounded-[32px] bg-white p-6 shadow-xl sm:h-52 sm:w-52 sm:p-8">
      {ImagePath && <Image src={ImagePath} alt="" width={160} height={160} />}
    </div>
  );
};
