import express from 'express';

const app = express();

//config ejs

app.set('view engine','ejs');
app.set('views','views');//as views folder (default as sets same but for prac tice)

app.get("/",(req,res) => {
    res.render("index",{
        title: "My EJS Website",
        message: "Hello from EJS",
        people : ['bhanu','praveen','vishnu']
    })
})



app.listen(8000, () => {
    console.log("Listening on port 8000")
})
 