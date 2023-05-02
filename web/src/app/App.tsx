import '../styles/main.css';
import { useRef } from 'react';

import { Carousel } from './shared/components/Carousel/Carousel';
import { CreateFooter } from './shared/components/footer/CreateFooter';
import { CreateHeader } from './shared/components/header/CreateHeader';
import { Card } from './shared/components/Card/Card';

import { API_URL } from "./config";

const eletronics = [
  {
    product: "Notebook ASUS 16gb",
    value: "R$ 4.257,22",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: false,
      five: false,
    },
    assessmentAmount: "201 avaliações",
    src: `${API_URL}/src/assets/note.jpg`,
  },
  {
    product: "JBL",
    value: "R$ 1.322,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "224 avaliações",
    src: `${API_URL}/src/assets/jbl.jpg`,
  },
  {
    product: "Iphone 14 Pro",
    value: "R$ 2.658,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
    },
    assessmentAmount: "137 avaliações",
    src: `${API_URL}/src/assets/iphone.jpg`,
  },
  {
    product: "Notebook ASUS 16gb",
    value: "R$ 4.257,22",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: false,
      five: false,
    },
    assessmentAmount: "201 avaliações",
    src: `${API_URL}/src/assets/note.jpg`,
  },
  {
    product: "JBL",
    value: "R$ 1.322,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "224 avaliações",
    src: `${API_URL}/src/assets/jbl.jpg`,
  },
  {
    product: "Iphone 14 Pro",
    value: "R$ 2.658,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
    },
    assessmentAmount: "137 avaliações",
    src: `${API_URL}/src/assets/iphone.jpg`,
  }
]

const homeAppliances = [
  {
    product: "Microondas 420 Litros",
    value: "R$ 920,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "153 avaliações",
    src: `${API_URL}/src/assets/micro.jpg`,
  },
  {
    product: "Geladeira Panasonic",
    value: "R$ 3.491,13",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "404 avaliações",
    src: `${API_URL}/src/assets/geladeira.jpg`,
  },
  {
    product: "Cooktop Gás",
    value: "R$ 412,98",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: false,
      five: false,
    },
    assessmentAmount: "47 avaliações",
    src: `${API_URL}/src/assets/cook.jpg`,
  },
  {
    product: "Microondas 420 Litros",
    value: "R$ 920,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "153 avaliações",
    src: `${API_URL}/src/assets/micro.jpg`,
  },
  {
    product: "Geladeira Panasonic",
    value: "R$ 3.491,13",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "404 avaliações",
    src: `${API_URL}/src/assets/geladeira.jpg`,
  },
  {
    product: "Cooktop Gás",
    value: "R$ 412,98",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: false,
      five: false,
    },
    assessmentAmount: "47 avaliações",
    src: `${API_URL}/src/assets/cook.jpg`,
  }
]

const movel = [
  {
    product: "Cama box casal",
    value: "R$ 1.905,25",
    assessment: {
      one: true,
      two: true,
      three: false,
      four: false,
      five: false,
    },
    assessmentAmount: "101 avaliações",
    src: `${API_URL}/src/assets/box.jpg`,
  },
  {
    product: "Cadeira Gammer XT",
    value: "R$ 1.146,55",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
    },
    assessmentAmount: "457 avaliações",
    src: `${API_URL}/src/assets/gammer.jpg`,
  },
  {
    product: "Estação Home Office",
    value: "R$ 835,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "92 avaliações",
    src: `${API_URL}/src/assets/mesa.jpg`,
  },
  {
    product: "Cama box casal",
    value: "R$ 1.905,25",
    assessment: {
      one: true,
      two: true,
      three: false,
      four: false,
      five: false,
    },
    assessmentAmount: "101 avaliações",
    src: `${API_URL}/src/assets/box.jpg`,
  },
  {
    product: "Cadeira Gammer XT",
    value: "R$ 1.146,55",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
    },
    assessmentAmount: "457 avaliações",
    src: `${API_URL}/src/assets/gammer.jpg`,
  },
  {
    product: "Estação Home Office",
    value: "R$ 835,00",
    assessment: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: false,
    },
    assessmentAmount: "92 avaliações",
    src: `${API_URL}/src/assets/mesa.jpg`,
  }
]

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

        <div className="flex-1 mt-5 mb-3 rounded-sm " ref={eletronicos} >
          <div className="flex items-center justify-center mb-5 mt-4 ">
            <div className="w-11/12 h-[740px] sm:h-[700px] bg-white rounded-md ">
              <h1 className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                  Eletrônicos
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
              {eletronics.map(eletronic => {
                return (
                  <Card 
                    key={eletronic.product} 
                    product={eletronic.product} 
                    value={eletronic.value}
                    assessment={eletronic.assessment}
                    assessmentAmount={eletronic.assessmentAmount}
                    src={eletronic.src} 
                  /> 
                )
              })}
              </div>      
            </div>  
          </div>  
        </div>  

        <div className="flex-1 mt-5 mb-3 rounded-sm">
          <div className="flex items-center justify-center mb-5 mt-4 ">
            <div className="w-11/12 h-[740px] sm:h-[700px] bg-white rounded-md ">
              <h1 ref={eletrodomesticos} className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                  Eletrodomésticos
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
              {homeAppliances.map(homeAppliance => {
                return (
                  <Card 
                    key={homeAppliance.product} 
                    product={homeAppliance.product} 
                    value={homeAppliance.value}
                    assessment={homeAppliance.assessment}
                    assessmentAmount={homeAppliance.assessmentAmount}
                    src={homeAppliance.src} 
                  /> 
                )
              })}
              </div>      
            </div>  
          </div>  
        </div>  

        <div className="flex-1 mt-5 mb-3 rounded-sm">
          <div className="flex items-center justify-center mb-5 mt-4 ">
            <div className="w-11/12 h-[740px] sm:h-[700px] bg-white rounded-md ">
              <h1 ref={moveis} className="ml-2 font-bold text-lg mb-3 py-2 px-2">
                  Móveis
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 justify-items-center">
              {movel.map(movel => {
                return (
                  <Card 
                    key={movel.product} 
                    product={movel.product} 
                    value={movel.value}
                    assessment={movel.assessment}
                    assessmentAmount={movel.assessmentAmount}
                    src={movel.src} 
                  /> 
                )
              })}
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




