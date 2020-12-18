## This is backend server for reading temperature from MLX90613 sensor


#### Prerequisite
- Nodejs 12 or later
- Mysql 5.7 or later
### Install

Install dependency

`npm install`

### Config env

Config in `.env` file

`PORT`: port where application run  

`DATABASE_URL`: Mysql address (if you run local, it's `localhost`)

`DATABASE_PORT` : Database port (default is `3306`)

`DATABASE_NAME`: Database where you save temp (schema will auto generate)

DATABASE_USERNAME: Mysql username

DATABASE_PASSWORD: Mysql password

### Run app

`npm start` will start app



