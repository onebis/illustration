FROM php:8.1-fpm
COPY php.ini /usr/local/etc/php/

RUN apt-get update
RUN apt-get install -y libpq-dev zlib1g-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev libmcrypt-dev nano libicu-dev libzip-dev libc-client2007e-dev libkrb5-dev libonig-dev
RUN docker-php-ext-configure imap --with-kerberos --with-imap-ssl
RUN docker-php-ext-install pdo_mysql gd iconv intl zip imap sockets


# composer install
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer global require laravel/installer

# tools install
RUN apt-get install -y wget xz-utils vim
