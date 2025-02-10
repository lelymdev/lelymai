"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqData = [
    { question: "What is Lelym AI?", answer: "Lelym AI is an AI-powered platform that collects and processes large volumes of diverse real-time data related to cryptocurrencies and digital assets. The system aims to improve the accuracy of price and trading volume predictions by utilizing multiple information sources (social media, news portals, on-chain data) combined with machine learning algorithms and statistical analysis." },
    { question: "How does Lelym AI analyze social media data?", answer: "Lelym AI monitors mentions of cryptocurrencies, tokens, and related topics on platforms such as Twitter and Reddit. It applies sentiment analysis to determine the tone of posts, detects emerging trends in real time, and filters out noise (such as bot activity and fake news) using machine learning models." },
    {
        question: "What news sources does Lelym AI aggregate?",
        answer: "The platform automatically gathers articles and press releases from top news sources, including CoinDesk, Cointelegraph, and Bloomberg. It evaluates the \"hype\" level around specific events (e.g., a token listing on a major exchange) and uses NLP technologies to assess the content and sentiment of publications.",
    },
    {
        question: "What on-chain metrics does Lelym AI track?",
        answer: "Lelym AI collects and analyzes blockchain network activity, including transaction counts, active addresses, and transfer volumes. It also evaluates mining/validation conditions (such as hash rate, staking activity, and validator distribution) and generates indicators that reflect the fundamental state of a blockchain.",
    },
    { question: "How does Lelym AI assess historical volatility?", answer: "The system stores and analyzes historical price and trading volume data across various exchanges. It evaluates volatility over different periods, correlates past market fluctuations with external events, and builds predictive models (such as ARIMA and LSTM) to forecast short- and long-term volatility." },
]

export const AccordionBlock = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full px-[1px] pt-10 rounded-[15px] flex flex-col gap-2">
            {faqData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-full"
                >
                    <div
                        onClick={() => toggleAccordion(index)}
                        className="flex bg-back flex-col relative py-[10px] px-[20px] text-white text-[18px] font-medium rounded-[15px] cursor-pointer"
                    >
                        {item.question}
                        <motion.div
                            className="absolute right-[20px]"
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown width={20} height={20} />
                        </motion.div>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col text-white text-[16px] font-normal gap-2 pt-[20px]">
                                        <p>{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

