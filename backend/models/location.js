const createTable = function(){
    const sqllite3 = require('sqlite3').verbose();
    const db=new sqllite3.Database("./database/database.db")

    //LOCATIONS table ==============================================
    let sqlLocations = "CREATE TABLE IF NOT EXISTS locations ("
    sqlLocations+= "lat REAL NOT NULL,"
    sqlLocations+= "lng REAL NOT NULL,"
    sqlLocations+= "dateEvent REAL NOT NULL,"
    sqlLocations+= "event TEXT NOT NULL)"
    //==============================================================

    db.run(sqlLocations)
    db.close()
}
    
module.exports = createTable;
