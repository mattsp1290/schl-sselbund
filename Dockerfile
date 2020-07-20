FROM node:10

# Create app directory
WORKDIR /usr/src/app
RUN npm install -g swagger
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./start.sh /usr/src/app/start.sh
RUN chmod +x /usr/src/app/start.sh
COPY . .

EXPOSE 10010
CMD [ "swagger", "project", "start", "schl-sselbund" ]