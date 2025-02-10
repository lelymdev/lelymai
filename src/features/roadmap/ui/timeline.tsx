import { TimelinePoint } from "@/features/roadmap/ui/timeline-point"

export function Timeline({
                             items,
                             align,
                         }: {
    items: {
        title: string
        description: string
    }[]
    align: "left" | "right"
}) {
    return (
        <div className="relative">
            <div className="absolute left-[10px] top-0 bottom-0 w-0.5 bg-blue-400/30" />
            <div className={`space-y-8 ${align === "right" ? "" : ""}`}>
                {items.map((item, index) => (
                    <TimelinePoint
                        key={index}
                        {...item}
                        position={index === 0 ? "top" : index === items.length - 1 ? "bottom" : "middle"}
                    />
                ))}
            </div>
        </div>
    )
}

