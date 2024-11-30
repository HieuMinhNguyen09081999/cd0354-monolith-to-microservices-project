FROM beevelop/ionic:latest AS ionic
## Create app directory
WORKDIR /usr/src/app
## Set environment variable to use legacy OpenSSL provider
ENV NODE_OPTIONS=--openssl-legacy-provider
## Install app dependencies
COPY package*.json ./
RUN npm install -f
## Bundle app source
COPY . .
RUN ionic build
### Run
FROM nginx:alpine
COPY --from=ionic /usr/src/app/www /usr/share/nginx/html
