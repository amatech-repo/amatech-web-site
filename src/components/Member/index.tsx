import Image from "next/image";

type Props = {
  imagePath: string;
  name: string;
  role: string;
  grade: string;
  twitter: string;
};

export const Member = ({ imagePath, name, role, grade, twitter }: Props) => {
  return (
    <div className="font-YuGothic w-80 h-40 rounded-32 bg-white flex flex-row pl-11 pr-14 drop-shadow-lg">
      <Image src={imagePath} alt="" width={94} height={94} className="pr-5 " />
      <div className="pt-8">
        <p className=" font-bold text-base">{name}</p>
        <div className="flex flex-row my-1.5">
          <p
            className="
            text-amatech-log
            text-xs
            w-12
            mr-2
            border
            rounded-full
            flex
            justify-center
            bg-background-object
            y-2"
          >
            {role}
          </p>
          <p className="text-gray text-sm ">{grade}</p>
        </div>
        {twitter ? (
          <a href={"https://twitter.com/" + twitter}>
            <Image src="/icons/twitter.svg" width={25} height={25} alt={""} />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
