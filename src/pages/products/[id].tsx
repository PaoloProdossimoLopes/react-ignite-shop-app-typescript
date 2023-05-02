import { ImageContainer, ProductContainer, ProductDetail } from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetail>
        <h1>Camise x</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore rem eaque explicabo cumque id quia, doloremque maxime animi eum dolorem temporibus consequuntur commodi a sit qui accusamus labore laudantium nihil.</p>

        <button>
          comprar agora
        </button>
      </ProductDetail>
    </ProductContainer>
  )
}