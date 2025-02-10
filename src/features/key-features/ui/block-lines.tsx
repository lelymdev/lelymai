import lines from "../../../../public/img/lines.png";
import Image from "next/image";

export const BlockLines = () => {
    return (
        <div className="bg-header w-full h-[240px] p-[1px]">
            <div className="flex relative flex-col justify-end p-6 bg-[#0E1622] h-full text-[24px] text-white w-full">
                <div>
                    <h2>Historical Data Insights</h2>
                    <p className="text-[16px]">Use historical data to identify trends. Predict with confidence</p>
                </div>
                <div className="absolute top-0 bg-[#d2e6ff] h-[2px] w-[80px]"></div>
                <Image className="absolute right-[50px] bottom-0" src={lines} alt=""/>
            </div>
        </div>
    )
}