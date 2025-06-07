import express from "express";
import {create_user, create_company} from "./db.js";

const app= express();
const port =8000;

app.use( express.json() );


app.get('/api/user', (req, res) => {
  try {
    res.json(create_user());  
  } catch (e) {
    res.status(404).send("There is no data");
  }
});

app.get('/api/company', (req, res) => {
  try {
    res.json(create_company());  
  } catch (e) {
    res.status(404).send("There is no data");
  }
});

app.get('/api/user/company', (req, res) => {
  try {
    res.json({
      user: create_user(),
      company: create_company()
    });  
  } catch (e) {
    res.status(404).send("There is no data");
  }
});


























app.listen(port, ()=>{
    console.log(`Server has been laucnhed at :${port} `)
})