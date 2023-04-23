import '../styles/main.css';
import { Carousel } from './shared/components/Carousel/Carousel';
import { CreateFooter } from './shared/components/footer/CreateFooter';
import { CreateHeader } from './shared/components/header/CreateHeader';

import note from '../assets/note.jpg'
import starValid from '../assets/starValid.png'
import star from '../assets/star.png'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <CreateHeader />
      <div className="overflow-scroll sm:overflow-visible">
      <Carousel />
      
      <div className="flex-1 mt-5 mb-3 rounded-sm">
        <div className="flex items-center justify-center mb-5 mt-4 ">
          <div className="w-11/12 h-[500px] sm:h-96 bg-white rounded-md ">
            <h1 className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                Eletrônicos
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>
              
              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>

              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>

              
            </div>
          </div>  
        </div>

        <div className="flex items-center justify-center mb-5 mt-4 ">
          <div className="w-11/12 h-[500px] sm:h-96 bg-white rounded-md ">
            <h1 className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                Eletrodomésticos
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>
              
              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>

              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>

              
            </div>
          </div>  
        </div>

        <div className="flex items-center justify-center mb-5 mt-4 ">
          <div className="w-11/12 h-[500px] sm:h-96 bg-white rounded-md ">
            <h1 className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                Móveis
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>
              
              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>

              <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
                <div className="flex items-center justify-center">
                  <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={note} alt="Note" />
                </div>
                <div className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
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
                    R$ 7.500,00
                  </span>
                </div>
              </div>

              
            </div>
          </div>  
        </div> 

      </div>    
      <CreateFooter />
    </div>
    </div>
  )
}

export default App



