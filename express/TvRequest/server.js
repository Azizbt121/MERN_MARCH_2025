// server.js
import express from 'express';
import tvShows from './db.model.js'; 

const app = express();
const port = 7500;

app.use(express.json());


app.get('/api/tvShows', async(req, res) => {
  try {
    res.json(tvShows);
  } catch (e) {
    res.status(404).send("There is no TV show");
  }
});



app.get('/api/tvShows/:year', async(req, res) => {
  try {
    const year = req.params.year; 
    const show = tvShows.find(show => show.yearCreated == year); 
    res.json(show);
  } catch (e) {
    res.status(500).send('Something went wrong');
  }
});


app.delete('/api/tvShows/:name', async(req,res)=>{
    try{
        const name=req.params.name;
        const show=tvShows.filter(show=>show.tvShow!=name)
        res.json(show)
    }catch(e){
        res.status(500).send('Something went wrong');
    }
})


app.patch('/api/tvShows/:name',async(req,res)=>{
    try{
        const name=req.params.name;
        const show=tvShows.findIndex(show=>show.tvShow==name);
        const NewData=req.body;
        tvShows[show] = { ...tvShows[show], ...NewData };
        res.json(tvShows);
    }catch(e){
        res.status(500).send('Something went wrong');
    }
})


app.post('/api/tvShows',async(req,res)=>{
    try{
         const NewShow = req.body;
        tvShows.push(NewShow);
        res.json(tvShows);
    }catch(e){
        res.status(500).send('Something went wrong');
    }
})








































app.listen(port,()=>{
    console.log('congrats you launched the server')
})