import Head from "next/head";
import Navbar from "../utils/navbar";
import Card from "../utils/projectCard";

export default function ShowCasePage() {
    return (
        <>
            <Head>
                <title>Choose one</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="flex justify-center items-center flex-wrap">
                {config.map((item) => (<Card href={item.href} imgSrc={item.imgSrc}></Card>))}
            </div>
        </>
    )
}

const config = [
    {
        href: "/project/oralCancer",
        imgSrc: "/assets/oral.webp",
    },
]