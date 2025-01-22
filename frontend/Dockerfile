FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Vite specific configurations
ENV VITE_HOST=0.0.0.0
ENV HOST=0.0.0.0
ENV PORT=5173

EXPOSE 5173

# Update the start command to explicitly set host and port
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]