import BreakingNews from "@/components/shared/BreakingNews";
import Headers from "@/components/shared/Headers";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Headers />
      <BreakingNews />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
