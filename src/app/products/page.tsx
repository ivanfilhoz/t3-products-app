import Link from "next/link";
import type { Product } from "~/types";

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const json = await res.json() as Product[]

  return json
}

export default async function ProductPage({ }) {
  const products = await getProducts()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          This is the <span className="text-[hsl(280,100%,70%)]">Products</span> Page
        </h2>
        <div className="flex flex-col gap-4">
          {!products ? 'Loading...' : (
            products.map(product => (
              <Link
                key={product.id}
                className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href={`/products/${product.id}`}
              >
                <h3 className="text-2xl font-bold">{product.title}</h3>
              </Link>
            ))
          )}
          
        </div>
      </div>
    </main>
  );
}