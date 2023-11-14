import Image from "next/image";

type Props = {
  ImagePath?: string;
};

export const SponsorLogo = ({ ImagePath }: Props) => {
  return (
    <div className="grid h-36 w-36 place-content-center rounded-3xl bg-white p-6 shadow-md md:h-52 md:w-52 md:rounded-32 md:p-8">
      {ImagePath && <Image src={ImagePath} alt="" width={160} height={160} />}
    </div>
  );
};
