import { Skeleton } from "@/components/ui/skeleton";

/**
 * Route-level Suspense fallback — a structural skeleton in the editorial
 * rhythm, so navigations show a branded placeholder instead of a blank frame.
 */
export default function Loading() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-16 space-y-6">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-12 w-2/3" />
      <div className="space-y-3 pt-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 pt-6">
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
    </div>
  );
}
