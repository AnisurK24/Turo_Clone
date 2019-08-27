## Database Schema

***

### `users`

| column name       | data type | details                   |
|-------------------|-----------|---------------------------|
| `id`              | integer   | not null, primary key     |
| `email`           | string    | not null, indexed, unique |
| `first_name`      | string    | not null                  |
| `last_name`       | string    | not null                  |
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |

* index on `email, unique: true`
* index on `session_token, unique: true`

***

### `cars`

| column name    | data type | details                        |
|----------------|-----------|--------------------------------|
| `id`           | integer   | not null, primary key          |
| `owner_id`     | integer   | not null, indexed, foreign key |
| `rate`         | integer   | not null                       |
| `make`         | string    | not null                       |
| `model`        | string    | not null                       |
| `year`         | integer   | not null                       |
| `color`        | string    | not null                       |
| `transmission` | string    | not null                       | 
| `seats`        | integer   | not null                       |
| `description`  | text      | not null                       |
| `plate`        | string    | not null                       |
| `address`      | string    | not null                       |
| `city`         | string    | not null                       |
| `state`        | string    | not null                       |
| `zip`          | integer   | not null                       |
| `created_at`   | datetime  | not null                       |
| `updated_at`   | datetime  | not null                       |

* `owner_id` references `users`
* index on `owner_id, unique: true`
* `transmission inclusion: TRANSMISSION_TYPE`
    * `TRANSMISSION_TYPE = %w(AUTOMATIC, MANUAL, N/A)`


***

### `rentals`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| `id`          | integer   | not null, primary key          |
| `renter_id`   | integer   | not null, indexed, foreign key |
| `car_id`      | integer   | not null, indexed, foreign key |
| `start_date`  | datetime  | not null                       |
| `end_date`    | datetime  | not null                       |
| `status`      | string    | not null                       |
| `created_at`  | datetime  | not null                       |
| `updated_at`  | datetime  | not null                       |


* `renter_id` references `users`
* index on `[renter_id, car_id], unique: true`
* `car_id` references `cars` 
* `status inclusion: STATUS_STATES`
    * `STATUS_STATES = %w(APPROVED, DENIED, PENDING)`

***

### `reviews`

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| `id`          | integer   | not null, primary key          |
| `author_id`   | integer   | not null, indexed, foreign key |
| `car_id`      | integer   | not null, indexed, foreign key |
| `rating`      | integer   | not null                       |
| `title`       | string    | not null                       |
| `body`        | text      | not null                       |
| `created_at`  | datetime  | not null                       |
| `updated_at`  | datetime  | not null                       |

* `author_id` references `users`
* `car_id` references `cars`
* index on `[author_id, car_id] unique: true`

***