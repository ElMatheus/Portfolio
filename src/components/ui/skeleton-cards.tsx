import { Card } from '@/components/ui/card';

function CardSkeleton() {
  return (
    <Card className="overflow-hidden bg-gradient-card border-card-border animate-pulse">
      {/* Project Image Skeleton */}
      <div className="relative overflow-hidden">
        <div className="w-full h-44 sm:h-48 bg-muted/50" />

        {/* Quick Actions Skeleton - Hidden on mobile */}
        <div className="absolute top-4 right-4 hidden sm:flex gap-2">
          <div className="w-9 h-9 bg-muted/70 backdrop-blur-sm rounded-full" />
          <div className="w-9 h-9 bg-muted/70 backdrop-blur-sm rounded-full" />
        </div>
      </div>

      {/* Project Info Skeleton */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Title and Category */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div className="h-6 sm:h-7 bg-muted/50 w-2/3 rounded" />
          <div className="h-6 w-20 bg-primary/20 rounded-full" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-muted/50 w-full rounded" />
          <div className="h-4 bg-muted/50 w-full rounded" />
          <div className="h-4 bg-muted/50 w-3/4 rounded" />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-16 bg-muted/50 rounded-md" />
          <div className="h-6 w-20 bg-muted/50 rounded-md" />
          <div className="h-6 w-14 bg-muted/50 rounded-md" />
          <div className="h-6 w-18 bg-muted/50 rounded-md" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
          <div className="h-9 flex-1 bg-muted/50 rounded-md" />
          <div className="h-9 flex-1 bg-muted/50 rounded-md" />
        </div>
      </div>
    </Card>
  );
}

export function Skeletons({ number }: { number: number }) {
  return (
    <>
      {Array.from({ length: number }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </>
  );
}