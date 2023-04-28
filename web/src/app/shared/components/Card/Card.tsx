import note from '../../../../assets/note.jpg'
import jbl from '../../../../assets/jbl.jpg'
import iphone from '../../../../assets/iphone.jpg'
import starValid from '../../../../assets/starValid.png'
import star from '../../../../assets/star.png'

export const Card = () => {
    return (
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
    )
}