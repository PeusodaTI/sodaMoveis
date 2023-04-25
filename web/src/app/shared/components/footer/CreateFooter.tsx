import gitHub from '../../../../assets/github.png';
import linkedin from '../../../../assets/linkedinnnn.png';
import insta from '../../../../assets/insta.png';
import cpR from '../../../../assets/cpRRR.png';

export const CreateFooter = () => {
    return (
        <div className="w-auto h-auto">
            <div className="flex justify-center items-center space-x-16 mt-10 ">
                <a href="https://github.com/peusodati" target="_blank">
                    <img src={gitHub} alt="" className="w-6 h-6 "></img>
                </a>
                <a href="https://www.linkedin.com/in/peusodati" target="_blank">
                    <img src={linkedin} alt="" className="w-6 h-6 "></img>
                </a>
                <a href="https://instagram.com/peusoda?igshid=ZDdkNTZiNTM=" target="_blank">
                    <img src={insta} alt="" className="w-6 h-6 "></img>
                </a>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-3 2xl:mb-3">
                <img src={cpR} alt="" className="w-3 h-3"></img>
                <span className="ml-1 text-black text-mm font-bold font-serif" translate='no'>2023 PHDevelopment</span>      
            </div>
        </div>
    )
}