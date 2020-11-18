# VitrineNewsletter-SERVER
# REST-API

### How to use:

Configure the connection with MongoDB in the file .ENV parameter "MONGO_DB_CONNECTION", example:
_"MONGO_DB_CONNECTION = mongodb: // localhost: 27017 / app-showcase-newsletter"_

To run the server:
- `npm run dev`
- `yarn dev`

### Routes:

- GET:    /newsletter      - Return all data from database.
          /newsletter/{id} - Return a specific newsletter from database using ID as parameter.

- POST:   /newsletter      - Create a new newsletter. | body{ establishmentName: String, establishmentCategory: String, title: String, message: String }

- DELETE: /newsletter/{id} - Delete a specific newsletter from database using ID as parameter.

- PUT:    /newsletter/{id} - Update a specific newsletter from database using ID as parameter and
                             Query for body{ establishmentName: String, establishmentCategory: String, title: String, message: String }
