export function TimelinePoint({
                                  title,
                                  description,
                                  position,
                              }: {
    title: string
    description: string
} & { position: "top" | "middle" | "bottom" }) {
    return (
        <div className={`relative pl-8 ${position === "bottom" ? "pb-0" : "pb-24"}`}>
            <div
                className={`absolute left-0 w-5 h-5 border-4 border-[#1b2537] rounded-full bg-[#adc5ff] ${
                    position === "top" ? "top-0" : position === "middle" ? "top-1/2 -translate-y-1/2" : "bottom-0"
                }`}
            />
            <h3 className="text-white font-medium mb-2 text-lg">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
    )
}

