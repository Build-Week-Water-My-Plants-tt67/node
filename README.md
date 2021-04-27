
### ENDPOINTS

### USERS

| User Action | METHOD | ROUTE                      | SEND TO DB                           |
| :---------: | :----: | ---------------------      | ------------------------------------ |
|    Login    |  POST  | /api/users/login           | {username, password}                 |
|   Create    |  POST  | /api/users/register        | {username, password, phone }         |
|    Read     |  GET   | /api/users/:user_id        | n/a                                  |
|    Read     |  GET   | /api/users/                | n/a                                  |
|    Edit     |  PUT   | /api/users/:user_id        | {username, password, phone }         |
|     Del     | DELETE | /api/users/:user_id        | n/a                                  |
|    Read     |  GET   | /api/users/:user_id/plants | n/a                                  |

### Plants

| User Action | METHOD | ROUTE                    | SEND TO DB                                          |
| :---------: | :----: | ---------------          | --------------------------------------------------- |
|    Read     |  GET   | /api/plants              | n/a                                                 |
|   Create    |  POST  | /api/plants/:user_id     | { nickname, species, h2oFrequency }                 |
|    Read     |  GET   | /api/plants/:plant_id    | n/a                                                 |
|    Edit     |  PUT   | /api/plants/:plant_id    | { nickname, species, h2oFrequency }                 |
|     Del     | DELETE | /api/plants/:plant_id    | n/a                                                 |