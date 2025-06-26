"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <header className="flex p-3 bg-(--dark-gray-translucent) justify-between">
      <p className="text-xl font-semibold text-white">Flüsterpost</p>

      {pathname === "/" ? (
        <Link href="/saved" className="text-white">
          Saved
        </Link>
      ) : (
        <Link href="/" className="text-white">
          Home
        </Link>
      )}
    </header>
  );
};
