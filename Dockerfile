FROM node:20.2

# define o diretório de trabalho para qualquer comando RUN, CMD, COPY
# os arquivos que colocamos no contêiner do Docker executando o servidor estarão em:
WORKDIR /app

# Copia package.json, package-lock.json, tsconfig.json, .env para a raiz de WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

#npm ci basicamente é melhor que o npm install, o ci é utilizado para instalar sempre a mesma versão de tudo que temos na nossa máquina local. Porém, precisamos criar um .dockerignore, uma vez que depois de dar o npm ci e instalar todas as dependencies e criar a node modules, fazemos um copy, então colocamos no .dockerignore para não pegar coisas que podem sobrescrever o resultado do npm ci.
RUN npm ci
COPY .dist .

# Vai rodar o comando npm run dev, assim que nosso container criar a api já vai passar a rodar, sem necessitar de um npm start!
CMD npm run dev