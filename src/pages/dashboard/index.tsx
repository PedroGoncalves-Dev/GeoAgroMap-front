import Filters from "@/components/filters";

const DashBoard = () => {
  return (
    <div className="border-1 border-primary-100 w-full h-full rounded-2xl p-5">
      <div className="flex justify-end">
        <Filters />
      </div>
    </div>
  );
};

export default DashBoard;
