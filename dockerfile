FROM node
RUN apt update && apt dist-upgrade -y && apt clean
COPY ./ 
RUN npm install --production --omit=dev && npm upgrade --production --omit=dev && npm audit --production --omit=dev --audit-level=high --fix && chown root:root node_modules -R
RUN npm run start 