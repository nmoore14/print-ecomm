### Requirements
* Docker and Go
* [golang-migrate/migrate](https://github.com/golang-migrate/migrate) 

### Usage
Clone the repository with:
```bash
git clone gitlab.com/idoko/bucketeer
```

Copy the `env.example` file to a `.env` file.
```bash
$ cp .env.example .env
```
Update the postgres variables declared in the new `.env` to match your preference. 
There's a handy guide on the [Postgres' DockerHub](https://hub.docker.com/_/postgres).

Build and start the services with:
```bash
$ docker-compose up --build
```
The database migration files are in `db/migrations` so feel free to simply source them directly. Alternatively, you can apply them using `migrate` by running:
```bash
$ export POSTGRESQL_URL="postgres://$PG_USER:$PG_PASS@localhost:5432/$PG_DB?sslmode=disable"
$ migrate -database ${POSTGRESQL_URL} -path db/migrations up
```
_**NOTE:** Remember to replace the `$PG*` variables with their actual values_
### Development
After making your changes, you can rebuild the `server` service by running the commands below
```bash
$ docker-compose stop server
$ docker-compose build server
$ docker-compose up --no-start server
$ docker-compose start server
```
