const express = require("express");

var IMPCSV = require('../models/ImpMedia');
const csv = require("csvtojson");
const router = express.Router();
const app = express()
const path = require('path')
var multer = require('multer');
const bodyParser = require('body-parser')


//import csv file
// router.post("/", async (req, res) => {
//     try {
//         const csvData = await csvtojson().fromString(req.files.file.data.toString());
//         console.log("csvData", csvData);
//         await IMPCSV.insertMany(csvData);
//         console.log("Data inserted successfully");
//         res.json({ success: true });
//       } catch (err) {
//         console.log("ERRORCSV", err);
//         res.status(500).json({ success: false, message: "Error inserting data" });
//       }
//     });
// var storage =multer.diskStorage({
//     destination:(req,file,cb) => {
// cb(null,'uploads/')
//     },
//     filename:(req,file,cb) => {
//         cb(null,file.originalname)
//     }
// })
// var upload = multer({ storage: storage });

// router.post('/', upload.single('file'), async (req, res) => {
//     try {
//         console.log("reqqqfileee",req.file); // add this line to check the req.file object

//       // Parse the CSV file
//       const jsonObj = await csv().fromFile(req.file.path);
//       console.log("jsonObjjjj",jsonObj); // add this line to check the jsonObj array

//       // Transform the CSV data into an array of objects
//       const army = jsonObj.map((item) => {
//         return { 
//           Name: item.Name,
//           Link: item.Link,
//           MediaType: item.MediaType,
//         };
//       });
  
//       // Save the data to MongoDB
//       await IMPCSV.insertMany(army);
  
//       // Send a success message to the client
//       res.status(200).send({
//         message: "Successfully Uploaded!"
//       });
//     } catch (err) {
//       // Send an error message to the client
//       res.status(500).send({
//         message: "Upload Failed",
//         error: err
//       });
//     }
//   });





// router.get('/', (req, res) => {
//     IMPCSV.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.json({ items: items });
//         }
//     });
// });

// router.post('/', upload.single('file'), (req, res, next) => {
//     csv()
//     .fromFile(req.file.path)
//     .then((jsonObj)=>{
//         var army = [];
//         for(var i = 0;i<jsonObj.length;i++){
//             var obj={};
//             obj.Name=jsonObj[i]['Name'];
//             obj.Link=jsonObj[i]['Link'];
//             obj.MediaType=jsonObj[i]['MediaType'];
//             army.push(obj);
//         }
//         IMPCSV.insertMany(army).then(function(){
//             res.status(200).send({
//                 message: "Successfully Uploaded!"
//             });
//         }).catch(function(error){
//             res.status(500).send({
//                 message: "failure",
//                 error
//             });
//         });
//     }).catch((error) => {
//         res.status(500).send({
//             message: "failure",
//             error
//         });
//     })
// });

var storage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
    cb(null,'./public/uploads');  
    },  
    filename:(req,file,cb)=>{  
    cb(null,file.originalname);  
    }  
    });  
    var upload = multer({storage:storage});  
    
    //route for Home page
    app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    });
    // Upload excel file and import to mongodb
    app.post('/', upload.single("file"), (req, res) =>{
    importExcelData2MongoDB(__dirname + '/uploads/' + req.file.filename);
    console.log(res);
    });
    // Import Excel File to MongoDB database
    function importExcelData2MongoDB(filePath){
    // -> Read Excel File to Json Data
    const excelData = excelToJson({
    sourceFile: filePath,
    sheets:[{
    // Excel Sheet Name
    // name: 'Customers',
    // Header Row -> be skipped and will not be present at our result object.
    header:{
    rows: 1
    },
    // Mapping columns to keys
    columnToKey: {
    A: 'Nom',
    B: 'Link',
    C: 'MediaType'
    
    }
    }]
    });
    // -> Log Excel Data to Console
    console.log(excelData);
    /**
    { 
    Customers:
    [ 
    { _id: 1, name: 'Jack Smith', address: 'Massachusetts', age: 23 },
    { _id: 2, name: 'Adam Johnson', address: 'New York', age: 27 },
    { _id: 3, name: 'Katherin Carter', address: 'Washington DC', age: 26 },
    { _id: 4, name: 'Jack London', address: 'Nevada', age: 33 },
    { _id: 5, name: 'Jason Bourne', address: 'California', age: 36 } 
    ] 
    }
    */  
    // Insert Json-Object to MongoDB
    IMPCSV.insertMany(jsonObj,(err,data)=>{  
    if(err){  
    console.log(err);  
    }else{  
    res.redirect('/');  
    }  
    }); 
    fs.unlinkSync(filePath);
    }

  module.exports = router