import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col gap-3 justify-center items-center px-3">
            <Image src='/logo.png' width={500} height={500} alt="df" className="w-8 h-auto" />
            <h1 className="text-4xl font-semibold text-center">Greetings from <span className="font-extrabold">Issar Fiber</span></h1>
            <p className="text-lg text-center">This website is under development</p>
            <p>Please email us for your queries</p>
            <Link href="mailto:issarfiber@gmail.com" className="font-medium underline underline-offset-2 text-green-500 hover:text-green-700">issarfiber@gmail.com</Link>
        </div>
    )
}