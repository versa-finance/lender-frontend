#!/bin/bash
cd /home/ec2-user/lender_frontend/src
yarn start
pm2 start yarn --name "myapp" -- start
pm2 startup
pm2 save
pm2 restart all