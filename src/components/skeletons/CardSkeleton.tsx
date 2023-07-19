export function CardSkeleton() {
  return (
    <div className="dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4 space-y-2 animate-pulse">
      <div className="flex items-center justify-between">
        <span className="w-40 h-4 bg-zinc-400 rounded" />
        <span className="w-5 h-4 bg-zinc-400 rounded" />
      </div>
      <div className="flex items-center justify-start gap-2">
        <span className="w-16 h-4 rounded bg-zinc-400 " />
        <span className="w-16 h-4 rounded bg-zinc-400 " />
        <span className="w-16 h-4 rounded bg-zinc-400 " />
      </div>
      <div className="flex items-center justify-start gap-2">
        <div className="w-3 h-3 rounded-full bg-zinc-400"/>
        <span className="w-20 h-4 bg-zinc-400 rounded" />
      </div>
      <div className="text-xs flex items-center justify-start ga">
        <span className="w-28 h-4 bg-zinc-400 rounded" />
      </div>
    </div>
  )
}
