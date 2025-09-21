import { Skeleton } from "@/components/ui/skeleton";

const SkeletonDashboard = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-full h-150" />
    </div>
  );
};

export default SkeletonDashboard;
