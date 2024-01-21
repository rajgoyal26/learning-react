FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 1234
CMD ["npm", "start"]