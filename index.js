const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Recipe.create(
//   {
//     title: "Chocolate Mousse",
//     level: "Easy Peasy",
//     ingredients: [
//       "200G dark chocolate",
//       "10G butter",
//       "8 eggs",
//       "salt to taste"
//     ],
//     cuisine: "French",
//     dishType: "Dessert",
//     image:
//       "https://www.regal.fr/sites/art-de-vivre/files/styles/large/public/Import/R82-mousse-chocolat-bocuse_dr.jpg?itok=RWyMDi2i",
//     duration: 20,
//     creator: "Paul Bocuse"
//   },
//   function(err, Recipe) {
//     if (err) {
//       console.log("An error happened:", err);
//     } else {
//       console.log("The recipe is created", Recipe.title);
//     }
//   }
// );

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(dbResult => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Recipe.insertMany(data, data.forEach(element => console.log(element.title)));

Recipe.findByIdAndUpdate("5dc2ed8569960e370014996e", { duration: 100 })
  .then("value changed with success")
  .catch("not changed");

Recipe.findByIdAndRemove("5dc2ed8569960e370014996d")
  .then("list updated")
  .catch("list not ok");
