import loop from "../../../../public/img/loop.png";
import Image from "next/image";

export const Block = () => {
    return (
        <div className="bg-header w-full h-[240px] p-[1px]">
            <div className="flex relative flex-col justify-end p-6 bg-[#0E1622] h-full text-[24px] text-white w-full">
                <div>
                    <h2>Social Sentiment Analysis</h2>
                    <p className="text-[16px]">Monitor social media for market sentiment. Spot trends early</p>
                </div>
                <div className="absolute top-0 bg-[#d2e6ff] h-[2px] w-[80px]"></div>
                <Image className="absolute right-0 sml:bottom-[20px]" src={loop} alt=""/>
            </div>
        </div>
    )
}