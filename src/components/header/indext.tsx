import MobileSideBar from "../side-bar/mobile";

const Header = () => {
  return (
    <div className="h-16 border-b border-l border-l-white border-collapse border-primary-100 flex items-center justify-between lg:justify-end px-5">
      <MobileSideBar />
      <img src="/logo/GeoAgroMap.svg" alt="Logo GeoAgroMap" className="w-40" />
    </div>
  );
};

export default Header;
