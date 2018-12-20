const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruits', {useNewUrlParser: true});

const fruitSchema =  new mongoose.Schema ({
    name: {
        //Makes the name field required to add to database
        type: String,
        required: [true, "Please add a name to your entry"]
    },
    //this creates validation which a rating has to be between 1-10
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit =  mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Peach",
    rating: 10,
    review: "This is a review"
})
// fruit.save();
// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 8,
//     review: "Good fruit!"
// })

// const orange = new Fruit({
//     name: "Orange",
//     rating: 7,
//     review: "Good enough"
// })

// const strawberry =  new Fruit ({
//     name: "Strawberry",
//     rating: 9,
//     review: "The best berry"
// })

// const blueberry =  new Fruit ({
//     name: "Blueberry",
//     rating: 8.5,
//     review: "Pretty darn good"
// })
//Inserts all these fruits every time the program is ran
// Fruit.insertMany([orange,strawberry,blueberry], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('success!')
//     }
// })
// fruit.save();

const personSchema =  new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Matt",
    age: 31
})
//Add person in everytime program in ran
// person.save();
// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(fruits)
//       callback(fruits);
//     });
//   }

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
})

// Fruit.updateOne({_id:"5c1a9bf634b87315e8d8c153"}, {name:"Super Blueberry"}, function(err){
//     if(err){
//         console.log(err);
//     }else {
//         console.log("Succesfully updated document!");
//     }
// })

// Fruit.deleteOne({name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesfully deleted item");
//     }
// });

Person.deleteMany({name: 'Matt'}, function(err){
    if(err){
        console.log(err);
    }else {
        console.log("Succesfully deleted Person data");
    }
});