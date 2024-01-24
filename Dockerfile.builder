FROM node:18-alpine as builder

# Create a work directory and copy over our dependency manifest files.
RUN mkdir -p /projects/phenikaa_intern/phenikaa_intern_fe
WORKDIR /projects/phenikaa_intern/phenikaa_intern_fe

COPY package.json .

RUN ls /projects/phenikaa_intern/phenikaa_intern_fe
RUN apk update && \
  apk add git
RUN yarn

COPY . /projects/phenikaa_intern/phenikaa_intern_fe
COPY .env.pro /projects/phenikaa_intern/phenikaa_intern_fe.env
RUN yarn build
