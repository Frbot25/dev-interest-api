import { config } from 'dotenv';
import express, { json, urlencoded } from 'express';
import router from './app/router';

//sécurité:
import cors from 'cors';//protéger l'accès à notre API
import bodySanitizer from './app/middlewares/body-sanitizer';//éviter attaques XSS

const app = express();
app.use(json());
const port = process.env.PORT || 3000;
app.use(urlencoded({extended:false}));

//sécurité:
app.use(bodySanitizer);
//autoriser toutes les adresses web
app.use(cors());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
