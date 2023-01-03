import Card from "../components/cards/ProductCard";
import Nav from "../components/nav/Nav";

type Product = any

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  return { props: { products: data } }
}

export default function Home({ products }: { products: Product }) {

  console.log(products);

  return (
    <div>
      <Nav></Nav>
      <div className=" px-5 pb-5 flex flex-wrap space-x-5 space-y-5 justify-center items-end">
        {products.map((product: Product) => {
          return (
            <Card key={product.id} id={product.id} title={product.title} description={product.description} image={product.image} price={product.price} rate={product.rating.rate} count={product.rating.count} />
          )
        })}
      </div>
    </div>
  )
}
