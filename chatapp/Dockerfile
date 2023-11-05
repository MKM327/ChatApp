FROM node:16 as development
COPY /chatapp /app
COPY /chatapp/package.json /app
WORKDIR /app
RUN npm install /app
EXPOSE 3000
CMD ["npm", "run", "dev"]