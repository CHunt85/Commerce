const mongoose = require("mongoose");
const Item = mongoose.model("Item");

module.exports = {
    index: (req, res) => {
        Item.find({}, (err, data) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(data)
                res.json(data);
            }
        })
    },
    create: (req, res) => {
        let item = new Item(req.body)
        item.save(function (err) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(item);
            }
        })
    },
    show: (req, res) => {
        Item.findOne({
            _id: req.params.id
        }, (err, item) => {
            if (err) {
                console.log(err);
            } else {
                res.json(item);
            }
        });
    },
    delete: (req, res) => {
        Item.deleteOne({
            _id: req.params.id
        }, (err) => {
            res.json();
        })
    },
    update: (req, res) => {
        console.log("test")
        Item.findOne({
            _id: req.params.id
        }, (err, item) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                item.name = req.body.name
                item.qty = req.body.qty
                item.price = req.body.price
                item.save(function (err) {
                    if (err) {
                        console.log(err);
                        res.json(err);
                    } else {
                        res.json(item);
                    }
                })
            }
        });
    },
}