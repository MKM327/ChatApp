FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 6666
CMD ["npm", "run", "start:dev"]