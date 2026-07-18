import Headers from "@/components/shared/Headers";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Headers />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
