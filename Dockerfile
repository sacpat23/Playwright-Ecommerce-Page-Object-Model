FROM mcr.microsoft.com/playwright:v1.55.0-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx playwright install --with-deps chromium

ENV CI=true
CMD ["npx", "playwright", "test"]
