import Link from "next/link";
import { Navigation } from "../Navigation";
import { HamburgerMenu } from "../HamburgerMenu";

export const Header = () => {
  return (
    <header className="bg-white py-5 px-9 w-full h-16 rounded-3xl drop-shadow-md">
      <div className="md:hidden">
        <HamburgerMenu /> {/* スマホサイズで表示 */}
      </div>
      <div className="hidden md:block">
        <Navigation /> {/* それ以外のサイズで表示 */}
      </div>
    </header>
  );
};
