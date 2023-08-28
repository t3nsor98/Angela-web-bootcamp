import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "Its time to work hard";

    if (day == 0 || day === 6) {
        type = 'a weekend';
        adv = `It's a ${type}, so don't forget to take some rest`;
    }


    res.render("index.ejs", {
        dayType: "a weekday",
        advice: "Its time to workhard"
    })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})