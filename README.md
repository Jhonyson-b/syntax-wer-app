<div align="center">

# SyntaxWer App

Aplicacao front-end de e-commerce construida com React, Vite e TypeScript.

Projeto focado em experiencia moderna de vitrine de produtos, autenticacao, carrinho e calculo de entrega por CEP.

</div>

## Projeto Online

- Vercel: https://syntax-wer-app.vercel.app/

---

## Visao Geral

O SyntaxWer App simula o fluxo principal de uma loja virtual:

- Navegacao entre paginas de home, produtos, detalhe do produto, login e cadastro.
- Exibicao de lista de produtos a partir de dados mockados.
- Pagina de detalhe com preco, desconto e opcao de adicionar ao carrinho.
- Carrinho lateral com ajuste de quantidade e remocao de itens.
- Calculo de entrega por CEP usando ViaCEP e regra de frete por regiao.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- TanStack Router
- React Hook Form
- Zod
- ESLint

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+ (recomendado)

## Como Rodar Localmente

1. Clone o repositorio.
2. Entre na pasta do projeto.
3. Instale as dependencias.
4. Rode o servidor de desenvolvimento.

```bash
npm install
npm run dev
```

## Scripts Disponiveis

| Script | Descricao |
| --- | --- |
| npm run dev | Inicia ambiente local com hot reload |
| npm run build | Gera build de producao (TypeScript + Vite) |
| npm run preview | Publica e testa localmente o build gerado |
| npm run lint | Executa analise estatica com ESLint |

## Estrutura do Projeto

```text
src/
	components/     # Componentes reutilizaveis (Header, Footer, Cart, Forms)
	contexts/       # Estado global (ex.: carrinho)
	interfaces/     # Tipagens de dominio
	mocks/          # Dados mockados de produtos
	pages/          # Rotas por arquivo com TanStack Router
	styles/         # Estilos globais e tokens do Tailwind v4
	utils/          # Funcoes utilitarias
```

## Rotas Principais

```mermaid
flowchart TD
	A[/_app/] --> B[/_app/products/]
	B --> C[/_app/products/:productId]
	A --> D[/_app/about]
	A --> E[/_app/our-stores]
	F[/_auth/sign-in] --> G[/_auth/sign-up]
```

## Funcionalidades em Destaque

- Layout com Header e Footer compartilhados nas rotas de app.
- Drawer de menu mobile para navegacao em telas menores.
- Drawer de carrinho com total de itens, remocao e controle de quantidade.
- Formulario de CEP com validacao usando Zod e React Hook Form.
- Consulta ao ViaCEP com normalizacao de entrada e tratamento de erro.

## Formulario de CEP

Fluxo implementado:

1. Usuario informa o CEP no formato 00000-000 ou 00000000.
2. O valor e validado com Zod.
3. O CEP e normalizado para apenas digitos.
4. A aplicacao consulta a API ViaCEP.
5. O frete e definido pela regiao retornada.

## Qualidade de Codigo

Antes de abrir PR, execute:

```bash
npm run lint
npm run build
```

## Melhorias Futuras

- Integrar catalogo e autenticacao com backend real.
- Persistir carrinho em armazenamento local.
- Adicionar suite de testes unitarios e de integracao.
- Implementar monitoramento de erros em producao.

