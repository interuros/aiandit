## Setup and project installation

After you clone this project you need to copy the `.env.example` file into `.env` file:

```shell
cp .env.example .env
```

We are using docker to run this app as well as our database.
You can change the variables except for `DB_HOST` since we use docker and
the host needs to be the database container name.

Run docker compose:

```shell
docker-compose up -d
```

Now the app should be up and running.
Migrations are applied automatically by `Sequelize sync`, but we still need to apply
seeders for `Support agents`.

Inside the app container run the following command:

```shell
npx sequelize-cli db:seed:all --env=docker
```

This will add 10 new Support agents.

That's all the setup that you need to run the project.

## Postman

To test this app with Postman, you will first need to import
the collection and the environment from the `postman` folder inside 
the root folder of the project.

After that you will see 2 requests inside the `issues` folder in Postman.

### Creating an issue
To create an issue fill the body parameter with the desired text and trigger the request.
You will get a new `Issue` object as response and set the `issue_id`
env variable that you'll be using in the `resolve` request. That issue will be automatically assigned
to a free Support agent, if there are any.

`You can check that it is working using an SQL GUI like DBeaver`

### Resolving an issue
To resolve an issue trigger the request using the issue id from the env or
by using another one from the database. You will get an Issue object as response with
the status set to `RESOLVED`. The Support agent that was assigned to this issue
will automatically be assigned an unassigned issue, if any exist.