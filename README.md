# Overview

This is a simple Create, Read, Delete API, built on Express, and uses a simple in-memory object to mimic a database.

# Install

First, [install yarn](https://yarnpkg.com/lang/en/docs/install/).

```
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn
```

Then, install package dependencies

```
$ yarn
```

Lastly, download [Postman](https://www.getpostman.com/); you'll need this to interact with our API.


# Configuration

## API

Create a `.env` file at the root of the directory, with the following content.

```
API_PORT=8080
```

## Postman

Then, open up Postman and import the Postman Collection; this will install a set of pre-configured requests you can send to our API.

Lastly, create a new [Environment](https://www.getpostman.com/docs/postman/environments_and_globals/manage_environments); this will be used to hold values returned from the API, such as `postId`.


# Run

Use the `serve` NPM script.

```
$ yarn run serve
```

# Use

Using the Postman Collection, perform the following tasks

1. Create Post - check that the HTTP status code is `200` and that the post's ID is returned
1. Get Post By ID - check that the HTTP status code is `200` and the response body contains the post's body
1. Get All Posts - check that the HTTP status code is `200` and it returns with an array of posts
1. Delete Post By ID - check that the HTTP status code is `200`
1. Delete Non-Existent Post - check that the HTTP status code is `404` and the request body contains an error object
1. Calling Non-Existent Endpoint - check that the HTTP status code is `404` and the request body contains an HTML document, which renders to an error message
1. Calling a Buggy Endpoint - check that the HTTP status code is `500` and an internal server error was throw in the server
1. Calling with Wrong Method - check that the HTTP status code is `404` and the request body contains an HTML document, which renders to an error message

Note that, in the examples above, we encountered different types of errors:

* Delete Non-Existent Post responded with an error object from the database
* Other errors are created by Express
