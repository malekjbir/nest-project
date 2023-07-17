FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install @prisma/client

COPY . .

RUN npx prisma generate


EXPOSE 3000

CMD ["npm", "run", "start:dev"]