import Link from "next/link";
import { Navigation } from "../Navigation";
import { HamburgerMenu } from "../Navigation/HamburgerMenu";

export const Header = () => {
  return (
    <header className="sticky top-2 z-50 mx-auto w-[95%] rounded-2xl bg-white bg-opacity-90 px-6 py-5 shadow-md backdrop-blur-sm sm:fixed sm:left-1/2 sm:top-4 sm:-translate-x-1/2 md:w-10/12">
      <div className="md:hidden">
        <HamburgerMenu /> {/* スマホサイズで表示 */}
      </div>
      <div className="hidden md:block">
        <Navigation /> {/* それ以外のサイズで表示 */}
      </div>
    </header>
  );
};
