//const Articles = require('../models/article')
const articles = [
    {
        id: 0,
        name: "moteur 250w",
        price: "300",
        imgUrl: "moteur250w.jpeg"
    },
    {
        id: 1,
        name: "moteur 500w",
        price: "400",
        imgUrl: "moteur500w.jpeg"
    }
]

exports.getAll = (req, res, next) => {   
    res.status(200).json(articles)
    //Articles.findAll()
    //.then((articles) => res.status(200).json(articles))
    //.catch((error) => res.status(400).json({error: error}))
};

exports.getOne = (req, res, next) => {
    const id = req.params.id
    res.status(200).json(articles[id])
    //Articles.findOne()
    //.then((articles) => res.status(200).json(articles))
    //.catch((error) => res.status(400).json({error: error}))
};