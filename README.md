# URL Shortner API

- This application help to shorten a given url.
- While shrinking, it shortens a uri's path, query string, hash etc., but leaving the host and port untouched.
- This application is build with [MongoDB](https://www.mongodb.com/), [ExpressJS](https://expressjs.com/), [Angular](https://angular.io/), [NodeJS](https://nodejs.org/en/) Stack.

### Dependencies

- Express JS
- Mongoose
- Shortid

### Deployment

- The apis are deployed in [Heroku](https://heroku.com/).
- Click this [URL](https://uri-shortner-api.herokuapp.com/api/v1/uri) to get list of shortened URLs

### API

- This api uses Resource Controller.

| Method | End Point                                         | Query String                      | Body    | Description                                                    |
| ------ | ------------------------------------------------- | --------------------------------- | ------- | -------------------------------------------------------------- |
| GET    | https://uri-shortner-api.herokuapp.com/api/v1/uri | select, sort, filter, limit, page | NA      | This API returns list of all urls available in MongoDB         |
| POST   | https://uri-shortner-api.herokuapp.com/api/v1/uri | NA                                | fullUri | This API submits the URL where url gets shortened and returned |

## Running in Local

### Pre-requisites

- Node JS (14+)
- MongoDB
- VS Code

### Steps

1. Make sure that node js is installed.
2. Make sure mongod service is running on some port (prefarably 27017).
3. Clone repo from this [GitHub Link](https://github.com/GiriPai/url-shortner-api).
4. Run `npm install` to instal dependencies.
5. Create a file named **_.env.local_** under config folder and paste the below code.

```
NODE_ENV=development
MONGO_URI=mongodb://localhost:<your mongo instance port>/uri-shortner
```

6.  Run the application with command `npm run dev` to run the server in local.
