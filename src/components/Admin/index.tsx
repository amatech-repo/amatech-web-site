import Image from "next/image";

export const Admin = (admin: { name: string; role: string; grade: string }) => {
  return (
    <div className="w-321 h-164 rounded-4xl bg-white">
      <Image src="/icons/sample.svg" alt="" width={94} height={94} />
      <p className="font-YuGothic font-extralight text-base">{admin.name}</p>
      <p className="text-amatech-log">{admin.role}</p>
      <p className="text-grade">{admin.grade}</p>
      <Image src="/icons/twitter.svg" width={25} height={25} alt={""} />
    </div>
  );
};
