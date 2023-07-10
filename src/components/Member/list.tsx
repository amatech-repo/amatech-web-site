import { Member } from "./index";

type Member = {
  imagePath: string;
  name: string;
  role?: string;
  grade: string;
  twitter?: string;
  instagram?: string;
  github?: string;
};

type Members = {
  members: Member[];
};

export const MemberList = ({ members }: Members) => {
  return (
    <div className="flex space-x-4">
      {members.map((member, index) => (
        <Member
          key={index}
          imagePath={member.imagePath}
          name={member.name}
          grade={member.grade}
          role={member.role}
          github={member.github}
          twitter={""}
          instagram={""}
        />
      ))}
    </div>
  );
};
