import { createFileRoute, Link } from '@tanstack/react-router'
import { ProductList } from '../../../components/ProductList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: "Produtos - SyntaxWer" }
    ]

  })
})

function RouteComponent() {
  return (
    <section className="container pt-40 md:pt-60 pb-10 md:px-10 mb-10 text-black">
      <h1 className="text-2xl md:text-3xl text-center mb-3">
        Lista de produtos
      </h1>

      <h2 className="text-[14px] md:text-[16px] text-center mb-10">
        Conforto excepcional para suas aventuras diárias.
      </h2>

      {
        products.length === 0 ? (
          <>
            <p className="text-center">Nenhum produto foi encontrado para esta categoria.</p>
            <Link to="/products" className="text-accent hover:text-accent-hover hover:underline">Voltar para produtos</Link>
          </>
        ) : (
          <ProductList products={products} />
        )
      }
    </section>
  )
}
