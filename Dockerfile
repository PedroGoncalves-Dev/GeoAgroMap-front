FROM node:20-alpine

WORKDIR /app

RUN corepack enable

# Copiar arquivos de dependências para cache
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./

# Instalar dependências
RUN yarn install

# Copiar código fonte
COPY . .

EXPOSE 5173

# Rodar em modo desenvolvimento com host configurado
CMD ["yarn", "dev", "--host", "0.0.0.0"]