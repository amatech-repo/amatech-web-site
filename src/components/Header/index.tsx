import Link from "next/link";
import { Navigation } from "../Navigation";
import { HamburgerMenu } from "../Navigation/HamburgerMenu";

export const Header = () => {
  return (
    <header className="bg-white py-5 px-6 w-[min(90%,1200px)] rounded-2xl shadow-md mx-auto z-10 sticky mt-3 top-3 z-50">
      <div className="lg:hidden">
        <HamburgerMenu /> {/* スマホサイズで表示 */}
      </div>
      <div className="hidden lg:block">
        <Navigation /> {/* それ以外のサイズで表示 */}
      </div>
    </header>
  );
};
