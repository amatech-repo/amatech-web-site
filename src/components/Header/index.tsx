import Link from "next/link";
import { Navigation } from "../Navigation";
import { HamburgerMenu } from "../HamburgerMenu";

export const Header = () => {
  return (
    <header className="bg-white py-5 px-9 w-10/12	ß h-16 rounded-3xl drop-shadow-md mx-auto">
      <div className="lg:hidden">
        <HamburgerMenu /> {/* スマホサイズで表示 */}
      </div>
      <div className="hidden lg:block">
        <Navigation /> {/* それ以外のサイズで表示 */}
      </div>
    </header>
  );
};
