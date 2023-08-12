import Link from "next/link";
import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <header className="bg-white py-5 px-9 w-full h-16 rounded-3xl drop-shadow-md">
      <Navigation />
    </header>
  );
};
