import Link from "next/link";
import { Navigation } from "../Navigation";
import { HamburgerMenu } from "../Navigation/HamburgerMenu";

export const Header = () => {
  return (
    <header className="sticky bg-white py-5 px-6 w-10/12 rounded-2xl shadow-md mx-auto sm:fixed sm:top-4 sm:left-1/2 sm:-translate-x-1/2  z-50 bg-opacity-90 backdrop-blur-sm top-2">
      <div className="lg:hidden">
        <HamburgerMenu /> {/* スマホサイズで表示 */}
      </div>
      <div className="hidden lg:block">
        <Navigation /> {/* それ以外のサイズで表示 */}
      </div>
    </header>
  );
};
