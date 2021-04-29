
### ENDPOINTS
base url: https://water-my-plants-tt67.herokuapp.com
### USERS

User Logins 

username: ryan password: ryanryan

username: tarah password: tarah

| User Action | METHOD | ROUTE                      | SEND TO DB                           | INFO                                     |
| :---------: | :----: | ---------------------      | ------------------------------------ | ---------------------------------------- |
|    Login    |  POST  | /api/users/login           | { username, password}                | Login                                    |    
|   Create    |  POST  | /api/users/register        | { username, password, phone }        | Creates new user                         |
|    Read     |  GET   | /api/users/:id             | n/a                                  | Gets specific user by id                 |
|    Read     |  GET   | /api/users/                | n/a                                  | Gets list of all users                   |
|    Edit     |  PUT   | /api/users/:id             | { username, password, phone }        | Edits a user (user by id)                |
|    Read     |  GET   | /api/users/:id/plants      | n/a                                  | Get a users list of plants (user by id)  |

### Plants

| User Action | METHOD | ROUTE                    | SEND TO DB                                          | INFO                        |
| :---------: | :----: | ---------------          | --------------------------------------------------- | --------------------------- |
|    Read     |  GET   | /api/plants              | n/a                                                 | Gets list of all plants     |
|   Create    |  POST  | /api/plants/:user_id     | { nickname, species, h2oFrequency, image }          | Creates new plant           |
|    Read     |  GET   | /api/plants/:plant_id    | n/a                                                 | Gets a specific plant by id |
|    Edit     |  PUT   | /api/plants/:plant_id    | { nickname, species, h2oFrequency, image }          | Edits a plant (plant by id) |
|     Del     | DELETE | /api/plants/:plant_id    | n/a                                                 | Deletes plant (plant by id) |
