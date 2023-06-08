FROM node:20.2
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY .dist .
CMD ["npm", "run", "dev"]