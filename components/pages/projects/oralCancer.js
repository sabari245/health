import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../utils/navbar";
import ProjectScaffold from "../../utils/projectScaffold";

function FileUploadSvg() {
    return (
        <>
            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </>
    )
}

export default function OralCancerPage() {

    const [imageUrl, setImageUrl] = useState(null);
    const dragdropRef = useRef(null);

    useEffect(() => {
        const dropzone = dragdropRef.current;
        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            e.stopPropagation();

            let file = e.dataTransfer.files[0];
            let reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            }
            reader.readAsDataURL(file);
        });
    }, [dragdropRef]);



    const fileUploadHandle = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
        }
        reader.readAsDataURL(file);
    }

    return (
        <>
            <Head>
                <title>Oral Cancer Detector</title>
                <meta name="description" content="Check oral cancer with the help of AI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectScaffold>
                <h1 className="ml-16 mt-8">Please Upload your files here</h1>
                <div className="flex justify-center items-center mx-16 mt-4">
                    <label ref={dragdropRef} htmlFor="dropzone-file" className={"flex flex-col justify-center items-center w-full h-64 rounded-lg cursor-pointer bg-gray-100" + (imageUrl ? " bg-transparent" : " border-2 border-gray-300 border-dashed hover:bg-gray-200")}>
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            {
                                imageUrl ? <img src={imageUrl} alt="Uploaded Image" className="h-60 rounded-lg" /> : <FileUploadSvg />
                            }
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={fileUploadHandle} />
                    </label>
                </div>
                {/* render some random divs for scrolling test*/}
                <div className="h-96"></div>
                <div className="h-96"></div>
            </ProjectScaffold>
        </>
    )
}