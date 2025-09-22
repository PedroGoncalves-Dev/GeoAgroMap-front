# 🐳 Guia Docker - GeoAgroMap

Este guia contém todas as instruções necessárias para executar a aplicação GeoAgroMap usando Docker.

## 📋 Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

## 🚀 Execução Rápida

### Produção

```bash
# Build e execução da aplicação em produção
docker-compose up --build -d

# Acessar a aplicação
# http://localhost:3000
```

### Desenvolvimento

```bash
# Build e execução em modo de desenvolvimento com hot reload
docker-compose -f docker-compose.dev.yml up --build

# Acessar a aplicação
# http://localhost:5173
```

## 📚 Comandos Detalhados

### 🏭 Ambiente de Produção

#### Build da imagem

```bash
docker build -t geoagromap:latest .
```

#### Executar container

```bash
docker run -d \
  --name geoagromap-app \
  -p 3000:80 \
  geoagromap:latest
```

#### Usar docker-compose (recomendado)

```bash
# Executar em background
docker-compose up -d

# Executar com logs
docker-compose up

# Rebuild se houver mudanças
docker-compose up --build

# Parar os serviços
docker-compose down
```

### 🛠️ Ambiente de Desenvolvimento

#### Build para desenvolvimento

```bash
docker build -f Dockerfile.dev -t geoagromap:dev .
```

#### Executar em modo desenvolvimento

```bash
# Com docker-compose (recomendado)
docker-compose -f docker-compose.dev.yml up

# Com docker run
docker run -d \
  --name geoagromap-dev \
  -p 5173:5173 \
  -v $(pwd)/src:/app/src \
  -v $(pwd)/public:/app/public \
  geoagromap:dev
```

## 🗂️ Estrutura dos Arquivos Docker

```
📁 projeto/
├── Dockerfile              # Build multi-stage para produção
├── Dockerfile.dev          # Build para desenvolvimento
├── docker-compose.yml      # Configuração de produção
├── docker-compose.dev.yml  # Configuração de desenvolvimento
├── nginx.conf              # Configuração do nginx
├── .dockerignore           # Arquivos ignorados no build
└── README.docker.md        # Este arquivo
```

## 🔧 Configurações

### Portas

- **Produção**: `3000:80` (aplicação roda na porta 3000 do host)
- **Desenvolvimento**: `5173:5173` (aplicação roda na porta 5173 do host)

### Volumes (Desenvolvimento)

Os seguintes diretórios são montados para hot reload:

- `./src` → `/app/src`
- `./public` → `/app/public`
- Arquivos de configuração importantes

### Nginx (Produção)

- Configurado para SPAs (Single Page Applications)
- Suporte ao React Router
- Compressão gzip habilitada
- Cache para assets estáticos
- Headers de segurança

## 🐛 Troubleshooting

### Problema: Aplicação não carrega

```bash
# Verificar logs
docker-compose logs geoagromap-frontend

# Verificar se o container está rodando
docker ps
```

### Problema: Hot reload não funciona no desenvolvimento

```bash
# Rebuild o container de desenvolvimento
docker-compose -f docker-compose.dev.yml up --build
```

### Problema: Porta já está em uso

```bash
# Alterar a porta no docker-compose.yml
ports:
  - "3001:80"  # Usar porta 3001 em vez de 3000
```

### Problema: Permissões no Linux/Mac

```bash
# Dar permissões apropriadas
sudo chown -R $USER:$USER .
```

## 🧪 Health Checks

### Verificar saúde da aplicação

```bash
# Produção
curl http://localhost:3000

# Desenvolvimento
curl http://localhost:5173
```

### Ver status dos health checks

```bash
docker-compose ps
```

## 🚀 Deploy

### Build para diferentes ambientes

```bash
# Build de produção otimizado
docker build --target production -t geoagromap:prod .

# Build com tag específica
docker build -t geoagromap:v1.0.0 .
```

### Salvar e carregar imagens

```bash
# Salvar imagem
docker save geoagromap:latest | gzip > geoagromap.tar.gz

# Carregar imagem
gunzip -c geoagromap.tar.gz | docker load
```

## 📊 Monitoramento

### Verificar uso de recursos

```bash
# Ver estatísticas dos containers
docker stats

# Ver logs em tempo real
docker-compose logs -f
```

### Limpar resources do Docker

```bash
# Remover containers parados
docker container prune

# Remover imagens não utilizadas
docker image prune

# Limpar tudo (cuidado!)
docker system prune -a
```

## 🔒 Segurança

### Escaneamento de vulnerabilidades

```bash
# Escanear imagem com docker scan (se disponível)
docker scan geoagromap:latest
```

### Boas práticas implementadas

- ✅ Imagem multi-stage para reduzir tamanho
- ✅ Usuario não-root no nginx
- ✅ .dockerignore para excluir arquivos sensíveis
- ✅ Headers de segurança no nginx
- ✅ Health checks configurados

## 📝 Notas Importantes

1. **Ambiente de Produção**: Usa nginx para servir arquivos estáticos otimizados
2. **Ambiente de Desenvolvimento**: Roda Vite com hot reload para desenvolvimento rápido
3. **Dados**: Esta aplicação não usa banco de dados, apenas consome APIs externas
4. **CORS**: Se houver problemas de CORS, configure adequadamente no nginx ou nas APIs

---

Para mais informações sobre a aplicação, consulte o [README.md](./README.md) principal.
