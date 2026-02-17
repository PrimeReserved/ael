export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Skeleton */}
      <div className="w-full h-[60vh] bg-zinc-200 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite]" />
      </div>

      {/* Blog List Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <div className="h-8 w-48 bg-zinc-200 rounded animate-pulse" />
          <div className="h-10 w-24 bg-zinc-200 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-[450px] bg-white rounded-2xl border border-zinc-200 animate-pulse overflow-hidden">
              <div className="h-64 bg-zinc-100" />
              <div className="p-8 space-y-4">
                <div className="h-4 w-24 bg-zinc-100 rounded" />
                <div className="h-6 w-full bg-zinc-100 rounded" />
                <div className="h-4 w-full bg-zinc-50 rounded" />
                <div className="h-4 w-2/3 bg-zinc-50 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
