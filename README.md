# MongoHW

This application uses handlebars and MongoDB to save articles or "scrape" them in a fashion from the database. It's using mongoose firs to intialize a new MongoDB with the mongoose.Schema command and creating a dynamic mongoDB using this schema to save the articles into said DB. Handlebars is used to render the articles using the {{#each articles}} in the views pages respectively. With that being said if there aren't any saved articles then the articles will not load. the schema is using objects which are defined as strings and required into the database, other than the saved section, these are not required. Unless an article is saved then it would be true in the boolean default statement. 
