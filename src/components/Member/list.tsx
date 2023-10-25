import { Key } from "react";
import { Member } from "./index";
import { MembersType, MembersListType } from "@/types/member";

type MemberListProps = {
  members: MembersListType | undefined;
};

export const MemberList = ({ members }: MemberListProps) => {
  return (
    <div className="flex flex-col items-center space-y-12 sm:flex-row sm:space-y-0 sm:space-x-12">
      {members &&
        members?.contents.map((member: MembersType, index: number) => (
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
