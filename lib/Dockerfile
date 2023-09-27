FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/Ali-Ahmad77/hi /root/Ali-Ahmad77/hi
WORKDIR /root/Ali-Ahmad77/hi/
RUN npm install npm@latest
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
 
