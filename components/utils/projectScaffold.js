import React from "react";
import Navbar from "./navbar";

function ListItem(props) {
    return (
        <li>
            <a href={"#" + props.link} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="ml-3">{props.children}</span>
            </a>
        </li>
    )
}

function ListOfContent(props) {
    return (
        <aside class="w-72" aria-label="Sidebar">
            <div class="overflow-y-auto w-72 py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" style={{ height: "calc( 100vh - 4.25rem )" }}>
                <ul class="space-y-2">
                    {props.contents?.map((content, index) => {
                        return (
                            <ListItem key={index} link={content.link}>
                                {content.title}
                            </ListItem>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}

export default function ProjectScaffold(props) {
    /**
     * @param {string} props.title - Title of the page
     * @param {string} props.description - Description of the page
     * @param {{title: string, id: string}[]} props.sections - Array of sections
     * @param {React.ReactNode} props.children - Children of the page
     */
    return (
        <>
            <Navbar />
            <div className="flex w-screen">
                <ListOfContent contents={props.contents} />
                <div className="flex-grow overflow-y-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin" style={{ height: "calc( 100vh - 4.5rem )" }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}