"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  console.log("Current pathname:", pathname); // Debugging line
  const isActive = pathname === href;
  return (
    <Link href={href} className={isActive ? "border-b-2 border-red-500" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
