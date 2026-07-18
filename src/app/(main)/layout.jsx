import Headers from "@/components/shared/Headers";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Headers />
      {children}
    </>
  );
};

export default MainLayout;
