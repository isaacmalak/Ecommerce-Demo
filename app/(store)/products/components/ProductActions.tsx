'use client';

export function ProductActions({ stock }: { stock: number }) {
    return (
        <div className="mt-6 border-t border-white/10 pt-6">
            {stock < 20 && (
                <div className="mb-4 flex w-fit items-center gap-2 rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-amber-500">
                    <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <p className="text-xs font-bold">Only {stock} left</p>
                </div>
            )}

            <div className="flex gap-3">
                <button className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-base font-bold text-black shadow-lg shadow-white/5 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
                    <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                    </svg>
                    Add to Cart
                </button>
                <button className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
