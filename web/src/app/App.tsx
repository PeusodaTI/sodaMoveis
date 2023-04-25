import { useRef } from 'react';

import '../styles/main.css';
import { Carousel } from './shared/components/Carousel/Carousel';
import { CreateFooter } from './shared/components/footer/CreateFooter';
import { CreateHeader } from './shared/components/header/CreateHeader';

import note from '../assets/note.jpg'
import jbl from '../assets/jbl.jpg'
import iphone from '../assets/iphone.jpg'
import gammer from '../assets/gammer.jpg'
import mesa from '../assets/mesa.jpg'
import box from '../assets/box.jpg'
import geladeira from '../assets/geladeira.jpg'
import cook from '../assets/cook.jpg'
import micro from '../assets/micro.jpg'
import starValid from '../assets/starValid.png'
import star from '../assets/star.png'

function App() {
  const home = useRef<HTMLDivElement>(null)
  const eletronicos = useRef<HTMLDivElement>(null)
  const eletrodomesticos = useRef<HTMLDivElement>(null)
  const moveis = useRef<HTMLDivElement>(null)
  const footer = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col h-screen">
      <CreateHeader home={home} eletronicos={eletronicos} eletrodomesticos={eletrodomesticos} moveis={moveis} footer={footer} key={"links"}/>
      <div className="overflow-scroll sm:overflow-visible">
        <div ref={home}></div>
        <Carousel />

        <div className="flex-1 mt-5 mb-3 rounded-sm">
          <div className="flex items-center justify-center mb-5 mt-4 ">
            <div className="w-11/12 h-[500px] sm:h-96 bg-white rounded-md ">
              <h1 ref={eletronicos} className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                  Eletrônicos
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                  </div>
                  <div  className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Notebook ASUS 16gb
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">201 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 4.257,00
                    </span>
                  </div>
                </div>
                
                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={jbl} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      JBL
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">201 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 1.322,00
                    </span>
                  </div>
                </div>

                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={iphone} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Iphone 14 Pro
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">137 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 2.658,00
                    </span>
                  </div>
                </div>

                
              </div>
            </div>  
          </div>

          <div ref={eletrodomesticos} className="flex items-center justify-center mb-5 mt-4 ">
            <div  className="w-11/12 h-[500px] sm:h-96 bg-white rounded-md ">
              <h1 className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                  Eletrodomésticos
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={micro} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Microondas 420 Litros
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">201 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 920,00
                    </span>
                  </div>
                </div>
                
                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={geladeira} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Geladeira Panasonic
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">404 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 3.491,13
                    </span>
                  </div>
                </div>

                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={cook} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Cooktop Gás
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">47 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 412,98
                    </span>
                  </div>
                </div>

                
              </div>
            </div>  
          </div>

          <div className="flex items-center justify-center mb-5 mt-4 ">
            <div className="w-11/12 h-[500px] sm:h-96 bg-white rounded-md ">
              <h1 ref={moveis} className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                  Móveis
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={box} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Cama box casal
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">101 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 1.905,25
                    </span>
                  </div>
                </div>
                
                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={gammer} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Cadeira Gammer XT
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">457 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 1.146,55
                    </span>
                  </div>
                </div>

                <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={mesa} alt="Note" />
                  </div>
                  <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                    <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                      Estação Home Office
                    </span>
                    <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                      <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-3 h-3 sm:w-3 md:h-3" src={starValid} />
                        <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={star} />
                      </div>
                      <div>
                        <span className="text-mm sm:text-dm">92 avaliações</span>
                      </div>
                    </div>
                    <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                      R$ 835,00
                    </span>
                  </div>
                </div>

                
              </div>
            </div>  
          </div> 

        </div>    
        <CreateFooter />
        <div ref={footer}></div>
      </div>
    </div>
  )
}

export default App



