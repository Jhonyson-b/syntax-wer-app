import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./router-tree-gen"
import { CartProvider } from "./contexts/CartProvider";

// Cria a instância principal do roteador a partir da árvore gerada automaticamente pelo plugin.
// Isso permite que o TanStack Router monte as rotas com base nos arquivos da pasta configurada no Vite.
const router = createRouter({ routeTree })

// Faz o merge dos tipos do TanStack Router para que a instância `router` fique disponível com tipagem correta.
// Com isso, o projeto ganha inferência e validação de tipos nas APIs do roteador.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Enquanto a navegação por rotas ainda está sendo concluída, o App continua renderizando as seções principais da página.
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App