# Ultra-Dev Portfolio - Blueprint

## 1. Visão Geral
Portfólio de luxo ultra-moderno para Engenheiro de Software Principal. Foco em estética minimalista (Dark Mode), performance (Next.js 15) e animações fluidas (Framer Motion).

## 2. Status do Projeto
* **Core:** Next.js 15 App Router, TypeScript, Tailwind CSS.
* **UI System:** Fontes refinadas, paleta monocromática (#000000, #0a0a0a).
* **Componentes Implementados:**
    * `Hero.tsx`: Introdução com animações de entrada e tipografia de impacto.
    * `Navbar.tsx`: Navegação (estrutura básica).

## 3. Plano Atual: Seção de Projetos (Feature-Projects)
* **Objetivo:** Criar uma galeria de projetos com interação de alto nível.
* **Design:** Grid responsivo com cartões que reagem ao hover (efeito de "lift" e brilho sutil).
* **Tech:** Framer Motion para "staggered animations" (animação em cascata) ao rolar a página.
* **Arquitetura:**
    * `src/components/ui/ProjectCard.tsx`: Componente isolado reutilizável.
    * `src/components/sections/Projects.tsx`: Seção container.