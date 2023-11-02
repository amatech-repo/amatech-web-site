import { Key } from "react";
import { Member } from "./index";
import { MembersType, MembersListType } from "@/types/member";

type MemberListProps = {
  members: MembersListType | undefined;
};

export const MemberList = ({ members }: MemberListProps) => {
  // members.contentsがundefinedの場合は空の配列を返す
  const contents = members?.contents ?? [];
  return (
    <div className="flex flex-col items-center space-y-12 sm:flex-row sm:space-y-0 sm:space-x-12">
      {contents.map((member: MembersType, index: Key) => (
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
