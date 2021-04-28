
### ENDPOINTS
base url: https://water-my-plants-tt67.herokuapp.com/
### USERS

User Logins -
username: ryan password: ryan
username: tarah password: tarah

| User Action | METHOD | ROUTE                      | SEND TO DB                           |
| :---------: | :----: | ---------------------      | ------------------------------------ |
|    Login    |  POST  | /api/users/login           | { username, password}                |
|   Create    |  POST  | /api/users/register        | { username, password, phone }        |
|    Read     |  GET   | /api/users/:id             | n/a                                  |
|    Read     |  GET   | /api/users/                | n/a                                  |
|    Edit     |  PUT   | /api/users/:id             | { username, password, phone }        |
|     Del     | DELETE | /api/users/:id             | n/a                                  |
|    Read     |  GET   | /api/users/:id/plants      | n/a                                  |

### Plants

| User Action | METHOD | ROUTE                    | SEND TO DB                                          |
| :---------: | :----: | ---------------          | --------------------------------------------------- |
|    Read     |  GET   | /api/plants              | n/a                                                 |
|   Create    |  POST  | /api/plants/:user_id     | { nickname, species, h2oFrequency, image }                 |
|    Read     |  GET   | /api/plants/:plant_id    | n/a                                                 |
|    Edit     |  PUT   | /api/plants/:plant_id    | { nickname, species, h2oFrequency, image }                 |
|     Del     | DELETE | /api/plants/:plant_id    | n/a                                                 |
