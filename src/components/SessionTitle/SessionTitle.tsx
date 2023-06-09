import Image from "next/image";

type Props = {
  title: string;
  label: string;
  imagePath: string;
};

export const SessionTitle = ({ title, label, imagePath }: Props) => {
  return (
    <>
      <div className={`bg-green-100 relative w-80 h-40 ${imagePath} bg-cover`}>
        {/* <Image src={imagePath} alt="a" width={300} height={300} /> */}
        <div className="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
          <p className="text-center text-title text-6xl text-white-shadow font-semibold">
            {title}
          </p>
        </div>
        <div className="absolute left-2/4 top-3/4 -translate-y-2/4 -translate-x-2/4">
          <p className="text-center text-sub-title text-lg">{label}</p>
        </div>
      </div>
    </>
  );
};
