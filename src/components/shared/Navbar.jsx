import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center p-4">
      <div></div>
      <ul className="flex space-x-4">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <Image src={userAvatar} alt="User Avatar" width={40} height={40} />
        <button className="btn btn-primary">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
