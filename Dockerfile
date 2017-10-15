FROM node:8.7.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g serve
CMD serve -s build
# The default port for serve.
EXPOSE 5000

# Install node modules.
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

# Copy all local files into the image, wrt .dockerignore.
COPY . .

# Assuming that we have the npm scripts from create-react-app.
# Build for production.
RUN npm run build --production
