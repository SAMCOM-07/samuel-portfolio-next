import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShowMoreButton = ({ text }: { text: string }) => {
    return (
        <div>
            <Link
                href="/projects"
                className="mt-8 text-primary text-center hover:underline flex items-center justify-center gap-1 font-medium group bg-secondary py-1 px-3 rounded-lg w-fit mx-auto"
            >
                {text}
                <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                />
            </Link>
        </div>
    )
}

export default ShowMoreButton
