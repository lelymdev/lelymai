import {Timeline} from "@/features/roadmap/ui/timeline";

interface TimelineItem {
    title: string
    description: string
}

const leftTimeline: TimelineItem[] = [
    {
        title: "AI-Powered Social Media Insights",
        description:
            "Our AI platform revolutionizes social media analytics by providing deep insights into user engagement, sentiment analysis, and trend forecasting. Leveraging machine learning, it identifies patterns, detects anomalies, and offers actionable recommendations. Businesses can optimize content strategies, enhance audience targeting, and maximize engagement through real-time data analysis, ensuring a competitive edge in the ever-evolving digital landscape.",
    },
    {
        title: "Advanced News Aggregation with AI",
        description:
            "Using AI-driven algorithms, our platform curates and personalizes news aggregation like never before. It filters through vast amounts of content, prioritizing relevance based on user preferences and real-time global events. By analyzing sentiment and credibility, it ensures accurate, unbiased information delivery, helping users stay informed with the latest industry trends and breaking news.",
    },
    {
        title: "Intelligent Automation in Business Workflows",
        description:
            "Our AI-powered automation tools streamline business operations by reducing manual tasks and enhancing productivity. From automated report generation to predictive analytics, the platform optimizes decision-making and operational efficiency. Businesses benefit from real-time insights, reduced errors, and seamless integration with existing software ecosystems, empowering teams to focus on strategic initiatives rather than routine tasks.",
    },
];

const rightTimeline: TimelineItem[] = [
    {
        title: "AI-Driven Predictive Analytics",
        description:
            "Our platform harnesses predictive analytics to forecast trends, customer behaviors, and market fluctuations with unparalleled accuracy. Utilizing big data and machine learning models, it identifies opportunities and risks, empowering businesses with data-backed decision-making. From financial projections to demand forecasting, AI-driven insights enhance operational efficiency and drive sustainable growth.",
    },
    {
        title: "Personalized AI-Powered Recommendations",
        description:
            "Leveraging deep learning algorithms, our AI platform delivers personalized recommendations across various domains, including e-commerce, entertainment, and content consumption. It continuously learns from user behavior, adapting suggestions to individual preferences. Businesses can enhance customer engagement, increase conversions, and improve retention rates by providing highly relevant and context-aware recommendations.",
    },
    {
        title: "Ethical AI and Responsible Deployment",
        description:
            "Our AI platform is designed with ethical considerations in mind, ensuring transparency, fairness, and accountability in decision-making. It adheres to strict data privacy regulations and mitigates biases in AI models. By prioritizing responsible AI deployment, we enable businesses to build trust with their users and harness AI’s potential while maintaining ethical integrity.",
    },
];



export default function RoadmapSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto">
                <div className="flex flex-col text-center gap-4 mb-12">
                    <h2 className="mds:text-[40px] sm:text-[32px] text-[24px] font-bold text-white">Roadmap</h2>
                    <p className="mds:text-[18px] sm:text-[16px] text-[14px] text-slate-400">
                        Check out the Lelym AI roadmap, which includes powerful tools for price forecasting
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    <div className="md:col-start-1 md:row-start-1">
                        <Timeline items={leftTimeline} align="left" />
                    </div>

                    <div className="md:col-start-2 md:row-start-2">
                        <Timeline items={rightTimeline} align="right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

