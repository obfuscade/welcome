FROM node:20-alpine

WORKDIR /app/backend

COPY package.json yarn.lock ./

RUN yarn

RUN yarn add -g nodemon

COPY . .    

CMD ["yarn", "start"]