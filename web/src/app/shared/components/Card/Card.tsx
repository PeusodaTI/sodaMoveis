import starValid from '../../../../assets/starValid.png'
import star from '../../../../assets/star.png'

interface Props{
  product: string,
  value: string,
  assessment: {
    one: boolean,
    two: boolean,
    three: boolean,
    four: boolean,
    five: boolean,
  },
  assessmentAmount: string,
  src: string,
}

export const Card: React.FC<Props> = ( {product, value, assessment, assessmentAmount, src} ) => {
    return (
      
          <div className="mb-3 sm:5 w-11/12 h-52 sm:h-72 bg-gray-100 rounded-lg overflow hover:shadow-2xl">
              <div className="flex items-center justify-center">
                <img className="w-11/12 h-20 sm:w-11/12 sm:h-44 rounded-t pt-3 px-1 sm:px-0" src={src} alt={product} />
              </div>
              <div  className="px-2 py-0 sm:py-2 mt-0 sm:mt-2">
                <span className="font-bold text-sm sm:text-dm mb-2 sm:px-2 sm:py-2 px-0 py-0">
                  {product}
                </span>
                <div className="flex mt-1 mb-1 space-x-0 sm:space-x-3 flex-col sm:flex-row">
                  <div className="flex space-x-1 items-center sm:px-2 sm:py-2 px-0 py-0">
                    <img className="w-3 h-3 sm:w-3 md:h-3" src={assessment.one ? starValid : star} />
                    <img className="w-3 h-3 sm:w-3 md:h-3" src={assessment.two ? starValid : star} />
                    <img className="w-3 h-3 sm:w-3 md:h-3" src={assessment.three ? starValid : star} />
                    <img className="w-3 h-3 sm:w-3 md:h-3" src={assessment.four ? starValid : star} />
                    <img className="w-[11px] h-[11px] sm:w-[10px] sm:h-[10px]" src={assessment.five ? starValid : star} />
                  </div>
                  <div>
                    <span className="text-mm sm:text-dm">{assessmentAmount}</span>
                  </div>
                </div>
                <span className="text-gray-700 text-xl font-bold sm:px-2 sm:py-2 px-0 py-0">
                  {value}
                </span>
              </div>
          </div>
              
              
     
    )
}