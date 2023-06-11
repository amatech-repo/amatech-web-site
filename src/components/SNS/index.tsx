import Image from "next/image";

type Props = {
  sns: string;
  snsID?: string;
};

export const SNS = (props: Props) => {
  const { sns, snsID } = props;

  return (
    <>
      {snsID ? (
        <a href={"https://" + sns + ".com/" + snsID}>
          <Image
            src={"/icons/" + sns + ".svg"}
            width={16}
            height={16}
            alt={""}
          />
        </a>
      ) : (
        <></>
      )}
    </>
  );
};
