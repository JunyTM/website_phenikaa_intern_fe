FROM nginx:1.15.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=intern-frontend-builder:builder /projects/phenikaa_intern/phenikaa_intern_fe/dist /var/www
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]