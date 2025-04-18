import Skeleton from "react-loading-skeleton";

export default function LoadingSection() {
  return (
    <div className="p-5">
      <h1 className="pb-5">
        <Skeleton className="h-[calc(var(--text-5xl)*2)] sm:h-[calc(var(--text-3xl)*2)]" />
      </h1>
      <p className="pb-4">
        <Skeleton />
      </p>
      <div>
        <Skeleton count={10} />
      </div>
    </div>
  );
}
