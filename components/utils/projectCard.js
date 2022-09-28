import { FaChevronRight } from "react-icons/fa";

export default function Card(props) {
    return (
        <div className="m-4 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="object-cover object-center w-full h-56" src={props.imgSrc} alt="avatar" />

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800">Oral Cancer Detector</h1>

                <p className="py-2 text-gray-700">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>

                <button className="flex w-full items-center mt-6 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 lg:w-auto">
                    <a href={props.href}><span className="mx-1">Visit</span></a>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}