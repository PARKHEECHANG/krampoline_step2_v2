# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY kakao-app/ ./
RUN npm ci
RUN npm run build
RUN npm install -g serve
ENV REACT_APP_KAKAO_KEY=6936be4bbc1271771861da0239ec6db5
EXPOSE 3000
CMD ["serve", "build"]
