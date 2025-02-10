import { KeyFeatures } from "@/features/key-features/container/key-features"
import CommunitySection from "@/features/community/container/community-section"
import RoadmapSection from "@/features/roadmap/container/roadmap-section"
import { Hero } from "@/features/hero/container/hero"
import { OnChainMetrics } from "@/features/onchain-metrics/container/ochain-metrics"
import { Accordion } from "@/features/accordion/container/accordion"

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full lg:px-[128px] mds:px-[64px] sml:px-[32px] px-[5px]">
            <section className="w-full" id="home">
                <Hero />
            </section>
            <section className="w-full" id="platform">
                <OnChainMetrics />
            </section>
            <section className="w-full" id="features">
                <KeyFeatures />
            </section>
            <section className="w-full" id="roadmap">
                <RoadmapSection />
            </section>
            <Accordion />
            <section className="w-full" id="community">
                <CommunitySection />
            </section>
            <div className="flex items-center justify-center sml:text-[32px] text-[20px] w-full">
                Contract Soon ...
            </div>
        </div>
    )
}

