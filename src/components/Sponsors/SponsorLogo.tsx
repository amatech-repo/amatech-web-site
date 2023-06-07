import Image from "next/image";

type Props = {
  imagePath: string;
};

export const SponsorLogo = ({ imagePath }: Props) => {
  return (
    <div>
      <div className="relative w-full pb-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 shadow-xl p-4 flex items-center justify-center">
        <div className="w-full h-full p-4 flex items-center justify-center">
          <Image src={imagePath} alt="" width={173} height={117} />
        </div>
      </div>
    </div>
  );
};
