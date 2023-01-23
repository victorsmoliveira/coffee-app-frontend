FROM node:16

WORKDIR /coffee-app

COPY . .

RUN npm install

CMD ["npm", "start"]