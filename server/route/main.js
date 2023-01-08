import express from "express";
import main from "../../pdf/main.js";

const router = express.Router();


router.get('/', function(req, res) {
    res.render('main', {title: 'Hello from Node js'})
});


router.post('/pdf', function(req, res) {
    console.log(Date.now())
    main();
    res.send(req.body)
})

export default router;