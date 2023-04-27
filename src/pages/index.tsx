import { styled } from "@/styles"
import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"

import camiseta from '../assets/camisetas/png-transparent-blank-t-shirts-white-t-shirt-template-template-t-shirt-apparel-tee-clothing-cotton.png'

const Button = styled('button', {
  backgroundColor: 'red'
})
 
export default function Home() { 
  return (
   <HomeContainer>
    
    <Product>
      <Image src={camiseta} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product>
      <Image src={camiseta} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>
    <Product>
      <Image src={camiseta} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,90</span>
      </footer>
    </Product>


   </HomeContainer>
   
  )
}
