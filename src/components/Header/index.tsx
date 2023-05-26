import Link from "next/link";
import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <header className="bg-red-100 p-10">
      <h1 className="">Header</h1>
      <Navigation />
    </header>
  );
};
