import express from "express"
const app = express()
const port= 3000
app.get("/", (req,res) =>{
res.send("İNDEX SAYFASI 4");
})
app.listen(port, ()=> {
    console.log("uygulamanın calıstığı port :", port);
});