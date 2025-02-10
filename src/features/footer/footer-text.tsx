import union from '../../../public/img/union.png'
import Image from 'next/image'

export const FooterText = () => {
    return (
        <div className="flex flex-col gap-5 w-full mt-24 mb-[120px] justify-center items-center">
            <div className="flex gap-2">
                <Image src={union} alt="/"/>
                Lelym AI © 2025
            </div>
            <div className="flex gap-5">
                <a href="https://x.com/lelym_ai">
                    <svg className="w-[30px] h-[30px]" viewBox="0 0 19 19" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.5083 1.50726H17.1789L11.3443 8.17586L18.2083 17.2503H12.8339L8.6244 11.7467L3.80783 17.2503H1.13555L7.37626 10.1175L0.791626 1.50726H6.3025L10.1075 6.53778L14.5083 1.50726ZM13.571 15.6518H15.0508L5.4984 3.02183H3.91037L13.571 15.6518Z"
                            fill="#EBF1FF"
                        />
                    </svg>
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
    )
}