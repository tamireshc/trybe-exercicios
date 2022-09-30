FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "src/server.js"] 