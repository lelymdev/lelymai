import news from "../../../../public/img/news.png";
import news2 from "../../../../public/img/news2.png";
import Image from "next/image";

export const BlockNews = () => {
    return (
        <div className="bg-header w-full h-[240px] p-[1px]">
            <div className="flex relative flex-col justify-end p-6 bg-[#0E1622] h-full text-[24px] text-white w-full">
                <div>
                    <h2>News Impact Evaluation</h2>
                    <p className="text-[16px]">Leverage past data to uncover patterns. Make predictions with assurance.</p>
                </div>
                <div className="absolute top-0 bg-[#d2e6ff] h-[2px] w-[80px]"></div>
                <Image className="absolute sml:right-[380px] right-[100px] top-0" src={news2} alt=""/>
                <Image className="absolute sml:right-[200px] right-[30px] top-[50px]" src={news} alt=""/>
            </div>
        </div>
    )
}