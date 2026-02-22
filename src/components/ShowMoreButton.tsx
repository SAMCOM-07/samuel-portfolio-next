import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ShowMoreButton = ({ text, href }: {
    text: string
    href: string
}) => {
    return (
        <div>
            <Link
                href={href}
                aria-label={text}
                className="mt-8 mb-4 text-primary text-center hover:underline flex items-center justify-center gap-1 font-medium group bg-secondary py-1 px-3 rounded-lg w-fit mx-auto focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
                {text}
                <ArrowRight
                size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                />
            </Link>
        </div>
    )
}

export default ShowMoreButton
