## bookings website based on laravel 5.1.11

windows platform,
```
    1. download php 5.6.17 VC11 x86 Non Thread Safe
       (1) add php.exe folder to PATH environment
       (2) edit php.ini file, uncomment below lines,
       
           ;extension=php_mbstring.dll
           ;extension=php_mysql.dll
           ;extension=php_openssl.dll
           ;extension=php_pdo_mysql.dll
           ;extension=php_pdo_pgsql.dll
           ;extension=php_pdo_sqlite.dll
           ;extension=php_pgsql.dll
           
    2. git clone https://github.com/perrywang/booking.git <your folder>
    3. cd <your folder> at step #2
    4. php composer.phar install
    5. php artisan serve
    6. goto http://localhost:8000/
    7. if you see laravel welcome page the configuration succeed
```
