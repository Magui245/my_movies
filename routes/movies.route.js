module.exports = app => {
    const movies = require("../controllers/movies.controller.js");
    const router = require("express").Router();
    
    // Create a new movie
    router.post("/", movies.create);
    
    // Retrieve all movies
    router.get("/", movies.findAll);
    
    // Retrieve a single movie by id
    router.get("/:id", movies.findOne);
    
    // Update a movie by id
    router.put("/:id", movies.update);
    
    // Delete a movie by id
    router.delete("/:id", movies.delete);
    
    // Delete all movies
    router.delete("/", movies.deleteAll);
    
    app.use("/api/movies", router);
};
