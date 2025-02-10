import {CommunityBlock} from "@/features/community/ui/community-block";
import alex from '../../../../public/img/alex.png'
import laura from '../../../../public/img/laura.png'
import tim from '../../../../public/img/tim.png'
import lorem from '../../../../public/img/lorem.png'

const testimonials = [
    {
        name: "Laura",
        avatar: laura,
        headline: "Revolutionized our business with AI-driven insights",
        description:
            "This platform completely transformed our approach to data analysis. The AI-powered insights helped us optimize marketing strategies, predict customer behavior, and improve engagement. The intuitive interface and seamless integration with our existing tools made implementation effortless. We’ve seen significant improvements in efficiency, accuracy, and decision-making. Highly recommend for businesses looking to leverage AI effectively.",
        rating: 5,
    },
    {
        name: "Alex",
        avatar: alex,
        headline: "Incredible automation features that save time",
        description:
            "We implemented this AI platform to automate our business workflows, and the results have been outstanding. The intelligent automation features reduced manual work, improved accuracy, and enhanced productivity. Our team can now focus on strategic tasks rather than repetitive processes. The efficiency gains have been remarkable, and we couldn’t be happier with the results.",
        rating: 5,
    },
    {
        name: "Sophia",
        avatar: lorem,
        headline: "Best AI-powered recommendation engine out there",
        description:
            "The AI-driven recommendation system exceeded our expectations. It continuously adapts to user preferences, delivering highly relevant content and product suggestions. Our customer engagement and conversion rates have skyrocketed since implementing this platform. The precision and accuracy of AI-driven personalization are game-changers for any business looking to enhance user experience.",
        rating: 5,
    },
    {
        name: "Tim",
        avatar: tim,
        headline: "Reliable, ethical, and future-proof AI solutions",
        description:
            "What impressed me the most about this platform is its commitment to ethical AI practices. The transparency, bias mitigation, and data privacy measures ensure responsible AI deployment. We trust this solution to power our business without compromising security or integrity. It’s a forward-thinking AI tool that is both powerful and responsible.",
        rating: 5,
    },
];


export default function CommunitySection() {
    return (
        <section className=" py-16 ">
            <div className="w-full mx-auto">
                <div className="flex flex-col gap-4 text-center mb-12">
                    <h2 className="mds:text-[40px] sm:text-[32px] text-[24px] font-medium text-white">Community</h2>
                    <p className="mds:text-[18px] sm:text-[16px] text-[14px] text-slate-400">Donec sed quam non lacus pharetra rhoncus</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <CommunityBlock key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

