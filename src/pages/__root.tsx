import * as React from 'react'
import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootComponent,
    // Define o titulo padrao exibido na aba do navegador.
    head: () => ({
        meta: [
            { title: "Início - SyntaxWer" }
        ]

    })
})

function RootComponent() {
    return (
        <React.Fragment>
            <HeadContent />
            <Outlet />
        </React.Fragment>
    )
}
