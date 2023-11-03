import { Key } from "react";
import { Member } from "./index";
import { MembersType, MembersListType } from "@/types/member";

type MemberListProps = {
  members: MembersListType | undefined;
};

export const MemberList = ({ members }: MemberListProps) => {
  const contents = members?.contents ?? [];

  // メンバーリストを2つに分割
  const halfLength = Math.ceil(contents.length / 2);
  const firstHalf = contents.slice(0, halfLength);
  const secondHalf = contents.slice(halfLength);

  return (
    <div className="overflow-x-auto p-6">
      <div className="flex space-x-8">
        {firstHalf.map((member: MembersType, index: Key) => (
          <div key={index} className="min-w-max">
            <Member
              imageUrl={member.imageUrl ? member.imageUrl.url : ""}
              name={member.name}
              grade={member.age.join(", ")}
              role={member.role.join(", ")}
              github={member.github}
              twitter={member.twitter}
              instagram={member.instagram}
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-8 ml-40 mt-4">
        {" "}
        {/* ml-4は左のオフセットで、2行目のカードの中央が1行目のカード間にくるように調整します */}
        {secondHalf.map((member: MembersType, index: Key) => (
          <div key={Number(index) + halfLength} className="min-w-max">
            <Member
              imageUrl={member.imageUrl ? member.imageUrl.url : ""}
              name={member.name}
              grade={member.age.join(", ")}
              role={member.role.join(", ")}
              github={member.github}
              twitter={member.twitter}
              instagram={member.instagram}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
