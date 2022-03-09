
const {MongoClient} = require('mongodb');
const url= 'mongodb://localhost:27017';
const databaseName='userprofile'
const client = new MongoClient( url );

async function dbconnect() {
     result = await client.connect();
    db = result.db( databaseName );
      collection =  db.collection('userdetail');
     r = await collection.find().toArray();
   console.log(r);
}

dbconnect();