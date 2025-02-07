import Movie from '../models/Movie.js';

export default {
    getAll(filter = {}) {
        let query = Movie.find({});

        if (filter.search) {
            query = query.find({title: filter.search});
        }
        if(filter.genre) {
            query = query.find({genre: filter.genre});
        }
        if(filter.year) {
            query = query.find({year: Number(filter.year)});
        }
        
        return query;
    },
    getOne(movieId){
        const result = Movie.findById(movieId).populate('casts');
        return result;
    },
    create(movieData, creatorId) {
        const newMovie = Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year),
            creator: creatorId,
        });

        return newMovie;
    },
    async attachCast(movieId ,castId){
        const movie = await Movie.findById(movieId);
        movie.casts.push(castId);
        await movie.save();

        return movie;
    },
    delete(movieId) {
        return Movie.findByIdAndDelete(movieId);
    },
    update(movieId, movieData){
        return Movie.findByIdAndUpdate(movieId, movieData, {runValidators: true});
    }
}