FROM node:16
WORKDIR /use/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3031

CMD ["node", "assignment.js"]