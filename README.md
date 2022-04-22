
# RUMA WEB

crm tool for mobile suppliers.

## System Requirement

- PHP 8.0+
- Laravel v8.0+
- MariaDB v10.7.3


## Setup local environment

You can clone the project using git clone command:

```bash
git clone https://github.com/omuha/ruma-web.git
```

after clone the project you can change directory to project directory and copy `.env` file
using copy command:

```bash
cp .env.example .env
```

Then you can install the PHP dependence using this command:

```bash
composer install
```

Then you can install the Javascript dependence using this command:

```bash
npm install
```

Then you can compile javascript and assets using this command:

```bash
npm run dev
```

Generate app key and places inside the `.env` file

```bash
php artisan key:generate
```

Run database migration

```bash
php artisan migrate:fresh 
```

Then you can seed the database using this command

```bash
php artisan db:seed
```

Then you can create root user using this command

```bash
php artisan make:system-admin
```

Start local server

```bash
php artisan serve
```

Now you can access the app via [http://localhost:8000](http://localhost:8000).

## Running Test
***Note:*** there is no test written at a moment as the gods for more descriptions [omakei](https://github.com/omakei)
```bash
php artisan test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [omakei](https://github.com/omakei)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
