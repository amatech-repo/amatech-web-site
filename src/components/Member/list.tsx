"use client";
import { useState, useEffect, useRef } from "react";
import { Member } from "./index";
import { MembersType, MembersListType } from "@/types/member";

type MemberListProps = {
  members: MembersListType | undefined;
};

function autoScroll(
  container: HTMLDivElement | null,
  speed: number,
  initialAmount: number = 0,
) {
  if (!container) return;

  let amount = initialAmount + speed;

  // 現在のスクロール位置を更新
  container.style.transform = `translateX(${amount}px)`;

  // スクロール位置が要素の幅を超えたら0に戻す

  if (speed > 0 && amount >= 0) {
    amount = -container.getBoundingClientRect().width / 2;
  } else if (
    speed < 0 &&
    amount <= -(container.getBoundingClientRect().width / 2)
  ) {
    amount = 0;
  }

  // スクロールの開始
  requestAnimationFrame(() => autoScroll(container, speed, amount));
}

export const MemberList = ({ members }: MemberListProps) => {
  const [displayMembers, setDisplayMembers] = useState<MembersType[]>(
    members?.contents || [],
  );

  const listRef1 = useRef<HTMLDivElement>(null);
  const listRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    autoScroll(listRef2.current, -0.5);

    const list1 = listRef1.current;

    if (!list1) return;

    autoScroll(
      listRef1.current,
      0.5,
      listRef1.current.getBoundingClientRect().width / 2,
    );
  }, []);

  // 同様に2分割するロジックはそのまま
  const halfLength = Math.ceil(displayMembers.length / 2);
  const firstHalf = displayMembers.slice(0, halfLength);
  const secondHalf = displayMembers.slice(halfLength);

  return (
    <div className="w-full space-y-6 overflow-hidden py-2">
      <div className="flex w-max" ref={listRef1}>
        {[
          ...firstHalf,
          ...firstHalf,
          ...firstHalf,
          ...firstHalf,
          ...firstHalf,
          ...firstHalf,
        ].map((member, index) => (
          <div key={index} className="mr-6 min-w-max">
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
      <div className="flex w-max" ref={listRef2}>
        {[
          ...secondHalf,
          ...secondHalf,
          ...secondHalf,
          ...secondHalf,
          ...secondHalf,
          ...secondHalf,
        ].map((member, index) => (
          <div key={Number(index) + halfLength} className="mr-6 min-w-max">
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
