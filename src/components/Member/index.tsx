import Image from "next/image";

type Props = {
  imagePath: string;
  name: string;
  role: string;
  grade: string;
};

export const Member = ({ imagePath, name, role, grade }: Props) => {
  return (
    <div className="w-321 h-164 rounded-4xl bg-white">
      <Image src={imagePath} alt="" width={94} height={94} />
      <p className="font-YuGothic font-extralight text-base">{name}</p>
      <p className="text-amatech-log">{role}</p>
      <p className="text-grade">{grade}</p>
      <Image src="/icons/twitter.svg" width={25} height={25} alt={""} />
    </div>
  );
};
