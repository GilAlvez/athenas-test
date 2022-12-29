# Athenas Test - Fullstack App

## Tecnologias Utilizadas
- Typescript
- Next
- React
- Docker
- Mysql
- Prisma
- Bootstrap
- DevExpress

## Requisitos
- Node v16+
- Docker

## Instalação do projeto
- Para instalar os pacotes necessários 
```sh
npm install
```

- Apos instalar as dependencias utilizaremos o Docker para instalar o MySQL. (Necessário ter o Docker instalado)
```sh
docker-compose up -d
```

- Depois disso o banco deverá ser populado usando o Prisma
```sh
npx prisma generate
```
```sh
npx prisma db push
```

- Para inicializar o projeto
```sh
npm run dev
```