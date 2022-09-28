import React from "react";
import Navbar from "./navbar";

function ListOfContent(props) {
    return (
        <div className="w-56 bg-slate-300" style={{ height: "calc( 100vh - 4.5rem )" }}></div>
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
                <ListOfContent />
                <div className="flex-grow overflow-y-auto scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin" style={{ height: "calc( 100vh - 4.5rem )" }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}