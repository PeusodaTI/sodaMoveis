import eletronics from '../../../../assets/eletronicsssss.jpg'

export const Carousel = () => {

  return (
    <div className="mt-20 rounded-sm ">
        <div className="flex items-center justify-center">
          <div className="w-11/12 h-42 sm:h-56 items-center justify-center bg-black">
            <img src={eletronics} className="w-full h-56"/>
          </div>
        </div>
    </div>
  );
};
