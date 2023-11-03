"use client";
import { useState, useEffect } from "react";
import { Member } from "./index";
import { MembersType, MembersListType } from "@/types/member";

type MemberListProps = {
  members: MembersListType | undefined;
};

export const MemberList = ({ members }: MemberListProps) => {
  const [displayMembers, setDisplayMembers] = useState<MembersType[]>(
    members?.contents || []
  );

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollWidth = e.target.scrollWidth;
      const scrollLeft = e.target.scrollLeft;
      const clientWidth = e.target.clientWidth;

      // スクロール位置が右端に達した場合
      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        // 既存のデータを再度追加
        setDisplayMembers([...displayMembers, ...(members?.contents || [])]);
      }
    };

    document
      .querySelector(".overflow-x-auto")
      ?.addEventListener("scroll", handleScroll);

    return () =>
      document
        .querySelector(".overflow-x-auto")
        ?.removeEventListener("scroll", handleScroll);
  }, [displayMembers]);

  // 同様に2分割するロジックはそのまま
  const halfLength = Math.ceil(displayMembers.length / 2);
  const firstHalf = displayMembers.slice(0, halfLength);
  const secondHalf = displayMembers.slice(halfLength);

  return (
    <div className="overflow-x-auto p-6">
      <div className="flex space-x-8">
        {firstHalf.map((member, index) => (
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
        {secondHalf.map((member, index) => (
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
