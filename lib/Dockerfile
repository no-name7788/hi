FROM quay.io/maherzubair/sigma-md
RUN git clone https://github.com/ali-khan77/same-md /root/ali-khan77/same-md
WORKDIR /root/ali-khan77/same-md/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
