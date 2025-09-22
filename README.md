# 🌱 GeoAgroMap

Plataforma de visualização e análise de dados geográficos agrícolas do Brasil

![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.2-green.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-cyan.svg)

## 📋 Sobre o Projeto

O **GeoAgroMap** é uma aplicação web moderna desenvolvida para visualizar e analisar dados de produção agrícola brasileira. A plataforma oferece uma interface intuitiva para explorar informações oficiais do IBGE sobre lavouras temporárias, permanentes e consolidadas em diferentes regiões do país.

Através de mapas interativos e gráficos dinâmicos, os usuários podem analisar tendências de produção, comparar regiões e acompanhar a evolução do setor agrícola ao longo dos anos, facilitando a tomada de decisões baseadas em dados oficiais e confiáveis.

## ✨ Principais Funcionalidades

- 📊 **Dashboard Interativo**: Visualização de dados através de gráficos de barras responsivos
- 🗺️ **Mapas Geográficos**: Visualização de dados em mapas interativos com informações regionais usando GeoJSON
- 🔍 **Sistema de Filtros**: Consulta de dados por produto, região, ano e variável
- 📈 **Análise Temporal**: Comparação de dados entre diferentes anos
- 📱 **Design Responsivo**: Interface adaptável para desktop e mobile
- 🌐 **Integração IBGE**: Dados oficiais de produção agrícola do Instituto Brasileiro de Geografia e Estatística

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19** - Framework JavaScript moderno
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápido e otimizado
- **TailwindCSS v4** - Framework CSS utilitário
- **React Router** - Navegação entre páginas

### Componentes e UI

- **Radix UI** - Componentes acessíveis e customizáveis
- **Shadcn UI** - Sistema de design moderno
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Gerenciamento de variações de classes CSS

### Formulários e Validação

- **React Hook Form** - Biblioteca para formulários performáticos
- **Zod** - Schema de validação TypeScript-first
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### Gerenciamento de Estado e API

- **TanStack Query** - Gerenciamento de estado assíncrono e cache
- **Axios** - Cliente HTTP para requisições
- **React Query DevTools** - Ferramentas de desenvolvimento

### Visualização de Dados

- **Leaflet** - Biblioteca para mapas interativos
- **React Leaflet** - Integração do Leaflet com React
- **Recharts** - Biblioteca de gráficos para React
- **GeoJSON** - Formato para dados geográficos

### Desenvolvimento

- **ESLint** - Linter para qualidade de código
- **TypeScript ESLint** - Regras específicas para TypeScript
- **Vite Plugin React** - Plugin oficial do React para Vite

## 🏗️ Arquitetura

### Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── alerts/         # Componentes de alertas
│   ├── chart/          # Componente de gráficos
│   ├── filters/        # Componentes de filtros
│   ├── header/         # Cabeçalho da aplicação
│   ├── loading/        # Componentes de loading
│   ├── map/            # Componente de mapas
│   ├── side-bar/       # Barra lateral
│   └── ui/             # Componentes base do design system
├── pages/              # Páginas da aplicação
│   ├── about/          # Página sobre
│   └── dashboard/      # Dashboard principal
├── routes/             # Configuração de rotas
├── schema/             # Schemas de validação
├── shared/             # Recursos compartilhados
│   ├── api/            # Configuração de APIs
│   ├── mutation/       # Mutations do TanStack Query
│   ├── queries/        # Queries do TanStack Query
│   ├── services/       # Serviços e utilitários
│   └── types/          # Definições de tipos TypeScript
└── lib/                # Utilitários e configurações
```

### Principais Abordagens

- **Componentização Modular**: Componentes reutilizáveis e bem organizados
- **Tipagem Robusta**: TypeScript em toda a aplicação
- **Design System**: Baseado em Radix UI e Shadcn UI
- **Gerenciamento de Estado**: TanStack Query para dados assíncronos
- **Arquitetura Limpa**: Separação clara de responsabilidades
- **Responsive Design**: Interface adaptável para diferentes telas

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **Yarn** (recomendado) ou **npm**

### 1. Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/GeoAgroMap-front.git

# Acesse o diretório do projeto
cd GeoAgroMap-front
```

### 2. Instalação das Dependências

```bash
# Usando Yarn (recomendado)
yarn install

# Ou usando npm
npm install
```

### 3. Executando em Desenvolvimento

```bash
# Usando Yarn
yarn dev

# Ou usando npm
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🐳 Executando com Docker

O projeto inclui configuração Docker para facilitar o desenvolvimento e deploy. Você pode executar a aplicação usando Docker de duas formas:

### Pré-requisitos para Docker

- **Docker** (versão 20.x ou superior)
- **Docker Compose** (versão 3.8 ou superior)

### Opção 1: Docker Compose (Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/GeoAgroMap-front.git
cd GeoAgroMap-front

# 2. Execute com Docker Compose
docker-compose up
```

A aplicação estará disponível em `http://localhost:5173`

### Opção 2: Docker Build Manual

```bash
# 1. Construir a imagem Docker
docker build -t geoagromap-front .

# 2. Executar o container
docker run -p 5173:5173 -v "${PWD}:/app" -v /app/node_modules --name geoagromap-dev geoagromap-front
```

### Comandos Docker Úteis

```bash
# Parar os containers
docker-compose down

# Parar e remover volumes
docker-compose down -v

# Ver logs em tempo real
docker-compose logs -f frontend

# Reconstruir a imagem (após mudanças no Dockerfile)
docker-compose up --build

# Executar comandos dentro do container
docker-compose exec frontend sh

# Parar container individual
docker stop geoagromap-front

# Remover container
docker rm geoagromap-front

# Ver containers em execução
docker ps
```

### Características do Setup Docker

- **Hot Reload**: Mudanças no código são refletidas automaticamente
- **Volume Mapping**: Código local sincronizado com o container
- **Node Modules**: Isolados no container para evitar conflitos
- **Porta 5173**: Mapeada para acesso local
- **Ambiente de Desenvolvimento**: Configurado para desenvolvimento com Vite

### 4. Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
yarn dev

# Compilar e fazer o build de produção
yarn build

# Executar linting de código
yarn lint

# Visualizar o build de produção
yarn preview
```

## 🌐 Funcionalidades da Aplicação

### Dashboard Principal

- **Visualização de Gráficos**: Dados apresentados em gráficos de barras interativos
- **Visualização de Mapas**: Mapas do Brasil com dados coloridos por região
- **Alternância de Visualização**: Switch entre modo gráfico e modo mapa
- **Filtros Dinâmicos**: Seleção de produtos, regiões, anos e variáveis

### Sistema de Filtros

- **Produtos**: Diferentes tipos de culturas agrícolas
- **Regiões**: Estados e regiões do Brasil
- **Períodos**: Anos disponíveis para análise
- **Variáveis**: Diferentes métricas (produção, área plantada, etc.)
- **Metadados**: Informações adicionais sobre os dados

### Mapa Interativo

- **GeoJSON**: Visualização de dados geográficos precisos
- **Tooltips**: Informações detalhadas ao passar o mouse
- **Coloração por Intensidade**: Cores baseadas nos valores dos dados
- **Zoom e Navegação**: Controles de mapa completos

### Gráficos Dinâmicos

- **Gráficos de Barras**: Visualização clara dos dados por região
- **Responsividade**: Gráficos adaptáveis ao tamanho da tela
- **Tooltips Informativos**: Detalhes ao interagir com as barras
- **Scroll Horizontal**: Para grandes quantidades de dados

## 📱 Responsividade

A aplicação foi desenvolvida com design responsivo, oferecendo uma experiência otimizada em:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (até 767px)

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Cores**: Paleta de cores bem definida com variações para diferentes temas
- **Tipografia**: Hierarquia clara de textos
- **Espaçamentos**: Sistema de espaçamentos consistente
- **Componentes**: Biblioteca padronizada de componentes UI

## 🔧 Configurações Adicionais

### ESLint

O projeto utiliza ESLint com regras específicas para React e TypeScript:

```bash
# Executar linting
yarn lint
```

### Path Mapping

Configurado alias `@` para o diretório `src`:

```typescript
import Component from "@/components/Component";
```

## 📊 APIs Integradas

A aplicação integra com APIs do IBGE para obter:

- **Dados de Produção Agrícola**: Séries históricas de produção
- **Informações Geográficas**: Dados de estados e regiões
- **Metadados**: Informações sobre produtos e variáveis
- **Períodos Disponíveis**: Anos com dados disponíveis

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ usando React e tecnologias modernas para análise de dados agrícolas do Brasil.

---

📍 **GeoAgroMap** - Visualização de dados agrícolas brasileiros de forma moderna e interativa.
