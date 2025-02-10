"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "../../../../public/img/logo.png"
import union from "../../../../public/img/union.png"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsMenuOpen(false)
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-back p-[2px] h-auto mds:h-[51px] flex justify-center items-center w-full max-w-[850px] mx-auto">
            <div className="flex flex-col mds:flex-row items-center w-full relative shadow-[inset_4px_4px_8px_0px_#EBF1FF0A] bg-[#111826] p-4 mds:p-0 mds:h-[47px]">
                <div className="flex items-center justify-between w-full mds:w-auto mds:pr-[10px]">
                    <div className="relative">
                        <Image className=" " src={logo || "/placeholder.svg"} alt="logo" />
                        <Image
                            className="absolute top-[10px] left-[24px] w-[24px] h-[16px]"
                            src={union || "/placeholder.svg"}
                            alt="logo"
                        />
                    </div>
                    <button className="mds:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                    </button>
                </div>

                <div
                    className={`${isMenuOpen ? "flex" : "hidden"} mds:flex flex-col mds:flex-row items-center w-full mds:w-auto mt-4 mds:mt-0 gap-4 mds:gap-[45px]`}
                >
                    <div className="hidden mds:block w-[2px] bg-[#768093] rounded-full h-[16px]"/>
                    <nav
                        className="flex flex-col mds:flex-row items-center gap-4 mds:gap-[45px] font-medium text-[16px] text-white">
                        <button onClick={() => scrollToSection("home")} className="hover:text-gray-300">
                            Home
                        </button>
                        <button onClick={() => scrollToSection("platform")} className="hover:text-gray-300">
                            Platform
                        </button>
                        <button onClick={() => scrollToSection("features")} className="hover:text-gray-300">
                            Features
                        </button>
                        <button onClick={() => scrollToSection("roadmap")} className="hover:text-gray-300">
                            Roadmap
                        </button>
                        <button onClick={() => scrollToSection("community")} className="hover:text-gray-300">
                            Community
                        </button>
                    </nav>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://x.com/lelym_ai"
                            className="flex bg-back gap-[6px] items-center justify-center w-[112px] h-[35px] hover:bg-gray-700"
                        >
                            <svg className="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5083 1.50726H17.1789L11.3443 8.17586L18.2083 17.2503H12.8339L8.6244 11.7467L3.80783 17.2503H1.13555L7.37626 10.1175L0.791626 1.50726H6.3025L10.1075 6.53778L14.5083 1.50726ZM13.571 15.6518H15.0508L5.4984 3.02183H3.91037L13.571 15.6518Z"
                                    fill="#EBF1FF"
                                />
                            </svg>
                            Twitter
                        </a>
                        <a href="https://t.me/LelymAI">
                            <svg
                                className="w-[30px] h-[30px]"
                                viewBox="0 0 634 534"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M597.5 8.33337C616.5 8.33337 630.833 25 623.167 56L530.167 494.333C523.667 525.5 504.833 533 478.833 518.5L257 354.667C256.14 354.049 255.439 353.236 254.955 352.294C254.472 351.352 254.22 350.309 254.22 349.25C254.22 348.191 254.472 347.148 254.955 346.206C255.439 345.264 256.14 344.451 257 343.833L513.167 112.5C524.833 102.167 510.667 97.1667 495.333 106.5L173.833 309.333C172.858 309.969 171.751 310.375 170.596 310.519C169.441 310.664 168.268 310.543 167.167 310.167L30.6667 267C0.333398 258.167 0.333396 237.333 37.5001 222.5L583.667 11.8334C587.998 9.75539 592.702 8.56535 597.5 8.33337Z"
                                    stroke="white"
                                    strokeWidth="16.6667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

