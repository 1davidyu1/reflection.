"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Heading = () => {
    return (
        <div className="max-w-3xl space-x-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Understand your ideas, plans, and vision. 
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Write your ideas down and<br />
                reflect better, faster.
            </h3>
            <Button>    
                Reflect
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}