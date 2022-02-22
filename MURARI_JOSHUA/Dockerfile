FROM node:v16.3.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# ENV PORT = 3050
ADD server.js ./
CMD [ "node", "server.js"]
EXPOSE 3050
