import SideBarContent from "./content";

const DesktopSideBar = () => {
  return (
    <div className="w-[300px] lg:flex-col bg-primary-50 border-r border-collapse border-primary-100 py-10 hidden lg:flex ">
      <SideBarContent />
    </div>
  );
};

export default DesktopSideBar;
