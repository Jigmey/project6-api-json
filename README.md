The API-JSON was created using JavaScript.
Project6 will display seeded data from Final Fantasy IV api when going to /ff14 route.

API:
https://xivapi.com/lore?string=legendary&columns=Text,Data

To do:
Fork and clone repo into your local dir

Local deployment:
Terminal: npm start
This will start a local server where you can check if the data populates
After server is running, go to http://localhost:9000/ff14 this will display the data from data.json

Heroku deployment:
Create a new cluster in mongodb
git init
In project dir login to heroku(make sure heroku is brew installed)
Create heroku app
Remote to heroku
Set config and push to heroku branch(get config url and password from mongodb)
Go to heroku site and check if config key is updated
Once updated open heroku app and route to /ff14
This will generate the same data which populated in the local deployment# project6-api-json
