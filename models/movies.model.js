module.exports = mongoose => {
    const movieSchema = mongoose.Schema({
      id: Number, 
      title: String,
      synopsis: String,
      release: Number, 
    });
  
    movieSchema.method("toJSON", function () {
      const { __v, _id, ...objet } = this.toObject();
      objet.filmId = _id;
      return objet;
    });
  
    const Movie = mongoose.model("movie", movieSchema); 
    return Movie;
  };
  