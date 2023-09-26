import Image from "next/image";
import Link from "next/link";

type Props = {
  snsImagePath: string;
  snsLink: string;
  alt: string;
};

export const SNS = (props: Props) => {
  const { snsImagePath, snsLink, alt } = props;

  return (
    <>
      <Link href={snsLink} className="inline-block">
        <Image
          src={snsImagePath}
          width={197}
          height={205}
          alt={alt}
          className="hover:translate-y-1  duration-300"
        />
      </Link>
    </>
  );
};
