import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Jaldi Waha se Hato</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>Nalla aur berozgar huu</h1>");
})

app.get("/more", (req,res) => {
    res.send("<h1>Bhai ek job mil jaye yaar</h1>")
})


app.listen(3000, () => {
    console.log(`Server running on port ${port}`)
})