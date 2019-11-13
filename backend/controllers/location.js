module.exports = {
    store(req,res) {
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database("./database/database.db")
        const sql = `INSERT INTO locations(lat,lng,dateEvent,level) VALUES (?,?,?,?)`
        const lc = req.body

        console.log(lc)
        db.run(sql,[lc.lat,lc.lng,lc.dateEvent,lc.level],function(err){
            if (err) {
                return res.status(400)
            }
            
            return res.json({id: this.lastID})
        })

        db.close()
    }
}