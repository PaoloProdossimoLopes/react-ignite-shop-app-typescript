import { styled } from "@/styles"
import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import camiseta from '../assets/camisetas/png-transparent-blank-t-shirts-white-t-shirt-template-template-t-shirt-apparel-tee-clothing-cotton.png'

const Button = styled('button', {
  backgroundColor: 'red'
})
 
export default function Home() { 
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
   <HomeContainer ref={sliderRef} className="keen-slider">
    
    <Product className="keen-slider__slide">
      <Image src={camiseta} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={camiseta} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={camiseta} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>

    <Product className="keen-slider__slide">
      <Image src={camiseta} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
   </HomeContainer>
   
  )
}
