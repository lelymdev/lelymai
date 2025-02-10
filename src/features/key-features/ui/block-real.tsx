import graph from '../../../../public/img/graph.png'
import Image from "next/image";

export const BlockReal = () => {
    return (
        <div className="bg-header w-full h-[240px] p-[1px]">
            <div className="flex relative flex-col justify-end p-6 bg-[#0E1622] h-full text-[24px] text-white w-full">
                <div>
                    <h2>Real-Time On-Chain Analytics</h2>
                    <p className="text-[16px]">Track blockchain activity in real time. Gain actionable insights instantly</p>
                </div>
                <div className="absolute top-0 bg-[#d2e6ff] h-[2px] w-[80px]"></div>
                <Image className="absolute right-0 bottom-[-20px]" src={graph} alt=""/>
            </div>
        </div>
    )
}