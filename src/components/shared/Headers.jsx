import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
const Headers = () => {
  return (
    <div className="text-center py-8 space-y-2">
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={200}
        className="mx-auto"
      />
      <h4>Journalism Without Fear or Favour</h4>
      <h3>{format(new Date(), "EEEE, MMM dd, yyyy")}</h3>
      <h2>My App Header</h2>
    </div>
  );
};

export default Headers;
