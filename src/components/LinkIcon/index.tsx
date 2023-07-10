import Link from "next/link";
import Image from "next/image";

interface Props {
  url: string;
  img: string;
  alt: string;
}

export default function LinkIcon({ url, img, alt }: Props) {
  return (
    <Link
      href={url}
      className="hover:scale-110 active:scale-100 transition"
      target="_blank"
    >
      <Image alt={alt} src={img} width={30} height={30} />
    </Link>
  );
}
