import { useState } from 'react';

interface Props {
    home: React.RefObject<HTMLDivElement>
    eletronicos: React.RefObject<HTMLDivElement>,
    eletrodomesticos: React.RefObject<HTMLDivElement>,
    moveis: React.RefObject<HTMLDivElement>,
    footer: React.RefObject<HTMLDivElement>
}

export const CreateHeader: React.FC<Props> = ( {home, eletronicos, eletrodomesticos, moveis, footer} ) => {
    const [navbar, setNavbar] = useState(false);
    
    console.log(eletronicos)
    const scrollToElement = (element: HTMLDivElement | null) => {
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div className="w-auto h-auto pb-0">
            
            <nav className="w-full bg-violet-900 fixed z-50 ">
            <div className="justify-between px-4 mt-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-[16px] font-bold text-white" translate="no">SODAVIRTUAL</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className=" text-white rounded-md outline-none focus:border-white focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-6 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-white 
                                no-underline hover:underline underline-offset-8 
                                decoration-gray-900 decoration-4 text-dm"
                            >
                                <a className="cursor-pointer" onClick={() => scrollToElement(home.current)} translate="no">Home</a>
                            </li>
                            <li className="text-white hover:text-white 
                                no-underline hover:underline underline-offset-8 
                                decoration-gray-900 decoration-4 text-dm"
                            >
                                <a className="cursor-pointer" onClick={() => scrollToElement(eletronicos.current)} translate="no">Eletrônicos</a>
                            </li>
                            <li className="text-white hover:text-white 
                                no-underline hover:underline underline-offset-8 
                                decoration-gray-900 decoration-4 text-dm"
                            >
                                <a className="cursor-pointer" onClick={() => scrollToElement(eletrodomesticos.current)} translate="no">Eletrodomésticos</a>
                            </li>
                            <li className="text-white hover:text-white 
                                no-underline hover:underline underline-offset-8 
                                decoration-gray-900 decoration-4 text-dm"
                            >
                                <a className="cursor-pointer" onClick={() => scrollToElement(moveis.current)} translate="no">Móveis</a>
                            </li>
                            <li className="text-white hover:text-white 
                                no-underline hover:underline underline-offset-8 
                                decoration-gray-900 decoration-4 text-dm"
                            >
                                <a className="cursor-pointer" onClick={() => scrollToElement(footer.current)} translate="no">Fale Conosco</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    
    )
}