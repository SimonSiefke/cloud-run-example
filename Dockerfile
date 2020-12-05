FROM mhart/alpine-node:15

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci --prod

COPY . ./

CMD [ "node", "index.js" ]
