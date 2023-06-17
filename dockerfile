FROM node:20.2
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

#npm ci basicamente é melhor que o npm install, o ci é utilizado para instalar sempre a mesma versão de tudo que temos na nossa máquina local. Porém, precisamos criar um .dockerignore, uma vez que depois de dar o npm ci e instalar todas as dependencies e criar a node modules, fazemos um copy, então colocamos no .dockerignore para não pegar coisas que podem sobrescrever o resultado do npm ci.
RUN npm ci
COPY .dist .
CMD ["npm", "run", "dev"]