import type { Product } from "~/types"

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

async function getProduct(productId: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const json = await res.json() as Product

  return json
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Product <span className="text-[hsl(280,100%,70%)]">{data.title}</span>
        </h2>
        <div>
          {data.description}
        </div>
      </div>
    </main>
  );
}