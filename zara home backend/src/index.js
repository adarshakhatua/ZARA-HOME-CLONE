const express= require("express");
const app =express();
const passport =require("./configs/googleAuth.config")
const {signin,signup} = require("./controllers/auth.controller");
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var cors = require("cors");

const userController = require("./controllers/user.controller");
const Footwear_men_womenController = require("./controllers/footwear_men_women.controller");
const Footwear_kidsController = require("./controllers/footwear_kids.controller");
const BedroomController = require("./controllers/bedroom.controller");
const CartController = require("./controllers/cart.controller");
const ProductController = require("./controllers/poduct.controller");




app.use(cors());
app.use(express.json());
app.use("/users",userController);
app.use("/footwear_men_women",Footwear_men_womenController);
app.use("/footwear_kids",Footwear_kidsController);
app.use("/bedroom",BedroomController);
app.use("/cart",CartController);
app.use("/product",ProductController);



app.post("/signup",
body("country").not().isEmpty().withMessage("country can't be empty"),
body("name").not().isEmpty().withMessage("name can't be empty").isString().isLength({min:3,max:20}).withMessage("name length should be in between 3 to 20."),
body("email").not().isEmpty().withMessage("email can't be empty").isString().isEmail().withMessage("email should be in valid format"),
body("password").not().isEmpty().withMessage("password can't be empty").isStrongPassword().withMessage("password should be strong"),
body("t&c").isBoolean().equals("true").withMessage("please accept our terms & condition."),
signup);


app.post("/signin",
body("email").not().isEmpty().withMessage("email can't be empty").isString().isEmail().withMessage("email should be in valid format"),
body("password").not().isEmpty().withMessage("password can't be empty"),
signin);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' ,session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    const token =jwt.sign({user:req.user},'secret');
    console.log(req.user)
    return res.status(200).send({user:req.user,token:token})
  });



module.exports =app;