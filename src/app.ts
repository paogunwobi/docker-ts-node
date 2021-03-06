import express,{ Application,Request,Response,NextFunction } from 'express';
import "dotenv/config";
import bodyParser from 'body-parser';
import Routes from './routes';
import Connect from './connect';

const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req:Request,res : Response ) => {

    res.send('TS App is Running')
})

const PORT = process.env.PORT || 4000;
const db = 'mongodb://127.0.0.1:27017/docker-ts-node  ';

Connect({ db });
Routes({ app })

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`)
})