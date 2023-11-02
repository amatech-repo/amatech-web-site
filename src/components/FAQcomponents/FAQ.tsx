import Image from "next/image";

type Props = {
  imagePath: string;
  isRight: boolean;
};

export const FAQ = ({ imagePath, isRight }: Props) => {
  return (
    <>
      {isRight ? (
        <Image
          src={imagePath}
          alt=""
          width={680}
          height={217}
          className="ml-auto"
        />
      ) : (
        <Image
          src={imagePath}
          alt=""
          width={680}
          height={217}
          className="mr-auto"
        />
      )}
    </>
  );
};
