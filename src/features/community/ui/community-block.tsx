import { Star } from "lucide-react"
import Image, {StaticImageData} from "next/image";

interface TestimonialCardProps {
    name: string
    avatar: StaticImageData
    headline: string
    description: string
    rating: number
}

export function CommunityBlock({ name, avatar, headline, description, rating }: TestimonialCardProps) {
    return (
        <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Image
                        src={avatar}
                        alt={`${name}'s avatar`}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-white">{name}</span>
                </div>
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${
                                i < rating ? "fill-emerald-500 text-emerald-500" : "fill-slate-800 text-slate-800"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <h3 className="text-white font-medium mb-2">{headline}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
    )
}

