const express = require("express");
const dynamoroute = express.Router();
var AWS = require("aws-sdk");
const cors = require("cors");
dynamoroute.use(cors());
AWS.config.update({
    region: "us-west-1",
    endpoint: "http://dynamodb.us-west-1.amazonaws.com"
  });



  var dynamodb = new AWS.DynamoDB();

  var docClient = new AWS.DynamoDB.DocumentClient();


  dynamoroute.post("/createItem", (req, res) => {
      
    var table = "MusicFileInfo";

    var filename = "Perfect.mp3";
    var count = 1;
    
    var params = {
        TableName:table,
        Item:{
            "fileName": filename,
            "count": count        
        }
    };
    console.log("Adding a new item...");
    
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });

      
  });
  




module.exports = dynamoroute;