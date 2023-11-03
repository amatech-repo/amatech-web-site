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
    <div className="font-YuGothic w-80 h-40 bg-white flex flex-row items-center pl-6 pr-4 rounded-xl shadow-md">
      <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg">
        <Image src={imageUrl} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <p className="font-bold text-lg">{name}</p>
        <div className="flex items-center space-x-2">
          {role && (
            <span className="text-blue-600 bg-blue-100 text-xs py-0.5 px-2 rounded-full">
              {role}
            </span>
          )}

          <p className="text-gray text-sm ">{grade}</p>
        </div>
        {twitter || instagram || github ? (
          <div className="flex flex-row space-x-2 w-fit h-8 px-2 justify-center items-center rounded-full bg-white drop-shadow-lg">
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
