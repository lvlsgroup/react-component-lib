FROM node:10-alpine
COPY package.json ./
COPY _build_prod /_build_prod
RUN npm install --no-optional --only=production
CMD ["npm", "run", "prod"]
