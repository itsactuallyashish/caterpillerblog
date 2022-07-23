// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    // console.log(data);
  if(err){
    res.status(500).json({"error":"no such slug is present"});
}
console.log(req.query.slug);
res.status(200).json(JSON.parse(data));
  })
}
