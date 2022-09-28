import Head from "next/head"
import Footer from "../utils/footer"
import Hero from "../utils/hero"
import Navbar from "../utils/navbar"

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Health</title>
                <meta name="description" content="Health Solutions by AI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}