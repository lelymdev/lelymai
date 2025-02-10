import table from '../../../../public/img/table.png'
import Image from 'next/image'

export const Hero = () => {
    return (
        <div className="flex relative w-full items-center flex-col sml:pb-[96px] pb-[30px] mt-[80px] mds:gap-[40px] gap-[20px]">
            <div className="flex text-center mds:leading-[57px] sm:leading-[38px] leading-[28px] flex-col text-white font-medium mds:text-[48px] sm:text-[32px] text-[24px] gap-4">
                Lelym AI — Breakthrough Analytics <br/> for the Crypto Market
                <p className="text-slate-400 mds:leading-[19px] leading-[15px] font-normal mds:text-[16px] text-[14px]">Powerful tools for predicting prices, trading volumes, and identifying market trends based on big data.</p>
            </div>
            <div className="flex text-[16px] bg-header p-[1px] font-medium h-[51px] w-[127px]">
                <div className="flex bg-back w-full backdrop-blur-2xl items-center justify-center">
                    Let's start
                </div>
            </div>
            <Image className="mds:flex hidden absolute md:w-[1251px] sml:w-[800px] w-[500px] md:h-[840px] h-[600px] md:top-[-80px] top-[20px]" src={table} alt=""/>
        </div>
    )
}