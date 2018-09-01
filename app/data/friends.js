var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = new express.Router();

var friends = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"baasdfajsdf",
    "photo":"ffffff.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        2,
        4,
        5,
        1,
        2,
        3,
        5,
        1,
        5
      ]
  }];

  module.exports = friends;