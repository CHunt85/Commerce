const users = require("./../controllers/item");
const path = require('path');

module.exports = app =>{
    
    app.get("/item", users.index),
    app.get("/item/:id", users.show),
    app.post("/item/", users.create),
    app.put("/item/:id", users.update),
    app.delete("/item/:id", users.delete),
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}
    