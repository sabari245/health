
import { useRouter } from 'next/router';
import { FaChevronRight } from 'react-icons/fa';

function Hero() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/projects');
    }

    return (
        <header className="bg-white">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-2xl font-semibold text-gray-800 uppercase lg:text-3xl">Medicine with AI Simplified</h1>

                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                            <button onClick={handleClick} className="flex w-full items-center mt-6 px-6 py-2.5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 lg:w-auto">
                                <span className="mx-1">Visit Project</span>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-2xl" src="/assets/doctor.png" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Hero;