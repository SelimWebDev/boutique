//const Articles = require('../models/article')

exports.getAll = (req, res, next) => {
    const articles = [
        {
            id: 0,
            name: "moteur 250w",
            price: "300"
        },
        {
            id: 1,
            name: "moteur 500w",
            price: "400"
        }
    ]
    res.status(200).json(articles)
    //Articles.findAll()
    //.then((articles) => res.status(200).json(articles))
    //.catch((error) => res.status(400).json({error: error}))
};