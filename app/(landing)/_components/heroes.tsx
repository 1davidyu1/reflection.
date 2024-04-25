import Image from "next/image"

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image    
                        src="/reflection.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="reflection 1"
                    />
                    <Image    
                        src="/reflection-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="reflection 1"
                    />
                </div>
                <div className="relative w-[400px] h-[400px] hidden md:block">
                    <Image 
                        src="/reflection.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="reflection 2"
                    />
                    <Image 
                        src="/reflection-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="reflection 2"
                    />
                </div>
            </div>
        </div>
    )
}