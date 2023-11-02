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
    <div className="font-YuGothic w-80 h-40 rounded-32 bg-white flex flex-row pl-11 pr-14 drop-shadow-lg">
      <Image src={imageUrl} alt="" width={95} height={95} className="pr-5 " />
      <div className="pt-8">
        <p className=" font-bold text-base">{name}</p>

        <div className="flex flex-row my-2">
          {role ? (
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
              y-2
              px-1"
            >
              {role}
            </p>
          ) : (
            <></>
          )}

          <p className="text-gray text-sm ">{grade}</p>
        </div>
        <div className="flex flex-row space-x-2 w-fit h-8 px-2 justify-center items-center rounded-full bg-white drop-shadow-lg">
          <SNS sns="twitter" snsID={twitter}></SNS>
          <SNS sns="instagram" snsID={instagram}></SNS>
          <SNS sns="github" snsID={github}></SNS>
        </div>
      </div>
    </div>
  );
};
