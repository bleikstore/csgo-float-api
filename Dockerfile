FROM node:18.15

# Create app directory
WORKDIR /usr/src/csgofloat

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
VOLUME /config

# Copy config file into the volume
COPY config.js /config/

CMD [ "/bin/bash", "docker_start.sh" ]