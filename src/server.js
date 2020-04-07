import express from 'express'
import fs from 'fs'
import Web from './Web' 
import React from 'react'
import {renderToStaticMarkup } from 'react-dom/server'
var app = express();

 app.get('/',(req,res)=>{
    const html = fs.readFileSync('./build/index.html');
    // res.send(html.toString());
    console.log(renderToStaticMarkup(<Web />));

    const content = renderToString(<Web />);
    console.log("content");
    res.send(html.toString().replace('<div id="root"></div>',`<div id="root">${content}</div>`));
 })
 app.use('/',express.static('build'))
 app.listen(3001,function(){
     console.log('已启动端口3001')
 })