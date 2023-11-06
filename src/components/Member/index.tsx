import Image from "next/image";
import { SNS } from "../SNS";

interface Props {
  imageUrl: string;
  name: string;
  grade: string;
  role: string;
  github: string;
  twitter: string;
  instagram: string;
}

export const Member = (props: Props) => {
  const { imageUrl, name, grade, role, github, twitter, instagram } = props;

  return (
    <div className="font-YuGothic flex py-10 w-80 flex-row items-center rounded-3xl bg-white pl-8 pr-4 shadow-md hover:scale-105 transition-all">
      <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg">
        <Image src={imageUrl} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <p className="text-lg font-bold">{name}</p>
        <div className="mt-1 flex items-center space-x-2">
          {role && (
            <span className="rounded-full border border-blue-200 bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-500">
              {role}
            </span>
          )}
          <p className="text-sm text-gray">{grade}</p>
        </div>
        {twitter || instagram || github ? (
          <div className="mt-2 flex h-8 w-fit flex-row items-center justify-center space-x-2 rounded-full bg-white px-2 drop-shadow-lg">
            <SNS sns="twitter" snsID={twitter}></SNS>
            <SNS sns="instagram" snsID={instagram}></SNS>
            <SNS sns="github" snsID={github}></SNS>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
