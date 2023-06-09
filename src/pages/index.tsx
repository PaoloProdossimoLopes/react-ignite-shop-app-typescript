import { styled } from "@/styles"
import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "@/lib/stripe"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"

const Button = styled('button', {
  backgroundColor: 'red'
})
 
export default function Home({ products }: HomeProps) { 
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageURL} width={520} height={480} alt=""/>

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        )
      })}
    </HomeContainer>
    </>
  )
}

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: number;
  }[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  console.log(response.data)
  const products =  response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: (60 * 60 * 2) // 2 hours
  }
}