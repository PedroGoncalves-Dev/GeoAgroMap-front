import SideBarContent from "./content";

const DesktopSideBar = () => {
  return (
    <div className="fixed left-0 top-0 w-[300px] h-screen lg:flex-col bg-primary-50 border-r border-collapse border-primary-100 py-10 hidden lg:flex z-10">
      <SideBarContent />
    </div>
  );
};

export default DesktopSideBar;
