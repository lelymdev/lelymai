import tracking from '../../../../public/img/tracking.png'
import logo3d from '../../../../public/img/logo3d.png'
import Image from 'next/image'

export const OnChainMetrics = () => {
    return (
        <div className="flex flex-col items-center pb-[96px]  w-full">
            <div className="flex flex-col items-center gap-10 justify-center bg-slate-900/50 mds:text-[40px] sm:text-[28px] text-[20px] text-white backdrop-blur-2xl w-full mds:h-[536px] ">
                On-chain Metrics
                <Image src={tracking} alt="/"/>
            </div>
            <Image src={logo3d} alt="/"/>
        </div>
    )
}