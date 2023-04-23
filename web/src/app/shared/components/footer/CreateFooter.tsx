import gitHub from '../../../../assets/github.png';
import linkedin from '../../../../assets/linkedinnnn.png';
import insta from '../../../../assets/insta.png';
import cpR from '../../../../assets/cpRRR.png';

export const CreateFooter = () => {
    return (
        <div className="w-auto h-auto">
            <div className="flex justify-center items-center space-x-16 mt-10 ">
                <img src={gitHub} alt="" className="w-6 h-6 "></img>
                <img src={linkedin} alt="" className="w-6 h-6 "></img>
                <img src={insta} alt="" className="w-6 h-6 "></img>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-3 2xl:mb-3">
                <img src={cpR} alt="" className="w-3 h-3"></img>
                <span className="ml-1 text-black text-mm font-bold font-serif" translate='no'>2023 PHDevelopment</span>      
            </div>
        </div>
    )
}