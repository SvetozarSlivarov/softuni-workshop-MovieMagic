import express from 'express';
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

import routes from './routes.js'
import showRatingHelper from './helpers/rating.js';
import { authMiddleware } from './middlewares/auth-middleware.js';

const app = express();
const port = 5000;

try{

    const defaultUri = 'mongodb://127.0.0.1:27017/magic-movies';
    await mongoose.connect(process.env.DATABASE_URI ?? defaultUri);

    console.log('DB Connected Successfuly!');
} catch (err){
    console.log('Cannnot connect to DB!');
    console.log(err.message);
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static',express.static('src/public'));
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());
app.use(authMiddleware);

app.use(routes);

app.listen(port, () => console.log('Server is listening on http://localhost:5000...'));
