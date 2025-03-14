FROM node:16 AS build

WORKDIR /fonseca_noah_ui_garden_build_checks

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

RUN ls -l /fonseca_noah_ui_garden_build_checks/build

FROM nginx:alpine

COPY --from=build /fonseca_noah_ui_garden_build_checks/build /usr/share/nginx/html

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]
