import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// Define a rota base "/_app" e diz qual componente vai montar essa estrutura.
export const Route = createFileRoute('/_app')({
    component: AppLayout
})

// Este layout é o "molde" das telas que ficam dentro de /_app.
function AppLayout() {
    return (
        <div>
            <Header />
            {/* Aqui entra o conteúdo da rota filha (miolo da página) */}
            <Outlet />
            <Footer />
        </div>
    )
}
