export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="w-full h-[60vh] bg-zinc-100 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite]" />
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 py-24 space-y-16">
        <div className="space-y-4 max-w-2xl">
          <div className="h-4 w-32 bg-zinc-100 rounded animate-pulse" />
          <div className="h-12 w-full bg-zinc-100 rounded animate-pulse" />
          <div className="h-20 w-full bg-zinc-100 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[500px] w-full bg-zinc-50 rounded-[2.5rem] animate-pulse relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
