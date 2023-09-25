cd ~/blog
yarn build:prod

rm -rf ~/../var/www/blog/html
mv ~/blog/build ~/../var/www/blog/html