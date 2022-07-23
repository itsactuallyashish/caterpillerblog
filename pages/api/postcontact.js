// import { flushSync } from "react-dom";
import * as fs from 'node:fs';

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      // console.log(req.body);
      // res.status(200).json(["hello this is api"]);
      fs.appendFile("contactdata/1.txt",JSON.stringify(req.body),(err)=>{if(err) throw err;else console.log("appended successfully");});
    } else {
      // Handle any other HTTP method
      res.status(200).json(["this is a get request"]);
    }
  }