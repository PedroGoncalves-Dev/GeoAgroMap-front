import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SideBarContent from "./content";

const MobileSideBar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="cursor-pointer hover:text-primary-100 transition-all duration-300 ease-in-out">
          <Menu size={30} className="text-primary-200" />
        </SheetTrigger>
        <SheetContent side="left" className="py-10">
          <SideBarContent />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
