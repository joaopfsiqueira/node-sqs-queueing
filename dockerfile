FROM node:20.2

# define o diretório de trabalho para qualquer comando RUN, CMD, COPY
# os arquivos que colocamos no contêiner do Docker executando o servidor estarão em:
WORKDIR /src

# Copia package.json, package-lock.json, tsconfig.json, .env para a raiz de WORKDIR
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
# nesse caso, eu não subi o nodemon.json, pq nele eu configuro para ouvir só TS. Como no container eu vou subir .dist que só tem js, o nodemon que vai estar dentro do container é diferente.

#npm ci basicamente é melhor que o npm install, o ci é utilizado para instalar sempre a mesma versão de tudo que temos na nossa máquina local. Porém, precisamos criar um .dockerignore, uma vez que depois de dar o npm ci e instalar todas as dependencies e criar a node modules, fazemos um copy, então colocamos no .dockerignore para não pegar coisas que podem sobrescrever o resultado do npm ci.
RUN npm install
COPY dist .

# Vai rodar o comando npm start, assim que nosso container criar a api já vai passar a rodar. Lembrando que ta usando o script start pq o script start executa o server.js que fica dentro de dist. Que basicamente é o código ts compilado em js
CMD npm start