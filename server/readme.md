##BACKEND

Install typescript: npm i typescript -D

init project: npx tsc --init

=========================================================
#FASTIFY SETUP

Install fastify: npm i fastify

convert ts in js: npx tsc

solução pratica: npm i tsx -D

npm run dev

atualização automatica codigo: "dev": "tsx watch src/server.ts"
=========================================================
#PRISMA SETUP

npm i prisma -D
npm i @prisma/client

npx prisma init --datasource-provider SQLite

npx prisma migrate dev

migrate: create table pool

npx prisma studio
=========================================================
#DIAGRAMA ERD AUTOMATIZADO WITH PRISMA ERD GENERATOR

npx i prisma-erd-generator @mermaid-js/mermaid-cli -D

npx prisma generate
=========================================================
npm i @fastify/cors => SECURITY APP BACKEND


