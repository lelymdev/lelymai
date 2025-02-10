import { Block } from "@/features/key-features/ui/block"
import { BlockReal } from "@/features/key-features/ui/block-real"
import { BlockLines } from "@/features/key-features/ui/block-lines"
import { BlockNews } from "@/features/key-features/ui/block-news"

export const KeyFeatures = () => {
    return (
        <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] w-full px-4 sm:px-6 lg:px-8">
            <div className="flex w-full font-medium flex-col text-center text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] gap-2 sm:gap-4">
                Key Features Lelym AI
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-400">
                    Powerful tools for predicting prices, trading volumes, and identifying market trends based on big data.
                </p>
            </div>
            <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col lg:flex-row gap-4">
                    <Block />
                    <BlockReal />
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <BlockLines />
                    <BlockNews />
                </div>
            </div>
        </div>
    )
}

