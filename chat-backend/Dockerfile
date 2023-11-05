FROM node:16 as development
COPY /chat-backend /app
COPY /chat-backend/package.json /app
WORKDIR /app
RUN npm install /app
EXPOSE 3000
CMD ["npm", "run", "start:dev"]