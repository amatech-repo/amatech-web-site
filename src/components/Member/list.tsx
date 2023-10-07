import { Key } from "react";
import { Member } from "./index";
import { MembersType, MembersListType } from "@/types/member";

type MemberListProps = {
  members: MembersListType | undefined;
};

export const MemberList = ({ members }: MemberListProps) => {
  console.log("members", members);
  // console.log("ImagePath", members.contents.ImagePath);

  return (
    <div className="flex space-x-12">
      {members?.contents.map((member: MembersType, index: number) => (
        <Member
          key={index}
          imageUrl={member.imageUrl ? member.imageUrl.url : ""}
          name={member.name}
          grade={member.age.join(", ")}
          role={member.role.join(", ")}
          github={member.github}
          twitter={""}
          instagram={""}
        />
      ))}
    </div>
  );
};
