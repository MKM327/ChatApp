FROM node:16 as development
COPY . /app
WORKDIR /app
RUN npm install /app
EXPOSE 3000
CMD ["npm", "run", "dev"]