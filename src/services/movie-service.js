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
        const result = Movie.findById(movieId);
        return result;
    },
    create(movieData) {
        const newMovie = Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            year: Number(movieData.year)
        });

        return newMovie;
    }
}