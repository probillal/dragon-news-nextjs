import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center p-4">
      <div></div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <Image src={userAvatar} alt="User Avatar" width={40} height={40} />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
