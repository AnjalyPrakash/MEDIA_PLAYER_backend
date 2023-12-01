
//import json-server library import-require
const jsonServer=require('json-server')

//create server using jsonserver library
const mediaPlayerServer=jsonServer.create()

//to connect db.json(json file) and index.js --to create path
const router=jsonServer.router('db.json')

//js and json are in deifferent form so they need a same form called middleware -- convert js to json
const middleware=jsonServer.defaults()

//middle ware and router has no connection with server(mediaplayerserver) -- use 
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//set port to avoid clash create a port to server
const port= 4000 || process.env.PORT

//for request listen-- to listen server for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server is ready to start at port no: 4000 `);
})