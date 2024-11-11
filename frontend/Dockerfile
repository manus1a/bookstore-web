FROM node:20-alpine

WORKDIR /app

COPY package* .

RUN npm install
RUN npm install firebase
RUN npm install -g firebase-tools
RUN npm install dotenv --save


COPY . .
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=5173
ARG FIREBASE_API_KEY
ENV VITE_API_KEY=${AIzaSyCe52-J0LGDpmtZguuVRCNb_tmmkBkugBg}
ENV VITE_Auth_Domain=${book-store-fe8e7.web.app}
ENV VITE_PROJECT_ID=${book-store-fe8e7}
ENV VITE_STORAGE_BUCKET=${book-store-fe8e7.firebasestorage.app}

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]