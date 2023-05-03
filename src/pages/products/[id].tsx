import { stripe } from '@/lib/stripe'
import { ImageContainer, ProductContainer, ProductDetail } from '@/styles/pages/product'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceID: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleByProduct() {
    try {
       setIsCreatingCheckoutSession(true)
       const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceID
       })

       const { checkoutUrl } = response.data
       window.location.href = checkoutUrl
    } catch (err) {
      // TODO: connectar com uma ferramenta de observabilidade (datadog/ sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao cehckout')
    }
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={360} height={400} alt='' />
      </ImageContainer>

      <ProductDetail>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleByProduct} disabled={isCreatingCheckoutSession}>
          comprar agora
        </button>
      </ProductDetail>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: [
      { params: { id: 'prod_NocmSsvbxrB8sT' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productID = params!.id
  const product = await stripe.products.retrieve(productID, {
    expand: ['default_price']
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceID: price.id
      }
    },
    revalidate: (60 * 60 * 1) //1h
  }
}