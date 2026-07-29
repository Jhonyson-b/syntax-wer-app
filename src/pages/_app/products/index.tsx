import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '../../../components/ProductList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container pt-40 md:pt-60 pb-10 md:px-10 mb-10 text-black">
      <h1 className="text-2xl md:text-3xl text-center mb-3">
        Lista de produtos
      </h1>

      <h2 className="text-[14px] md:text-[16px] text-center mb-10">
        Conforto excepcional para suas aventuras diárias.
      </h2>
      <ProductList products={products} />
    </div>
  )
}
