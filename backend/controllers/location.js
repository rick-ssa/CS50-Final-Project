module.exports = {
    index(req,res){
        const{dateStart} = req.query
        const{dateEnd} = req.query
        const data = []
    
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database("./database/database.db")
        const sql = `SELECT lat, lng, dateEvent as date, event FROM locations WHERE dateEvent BETWEEN ? AND ?`

        db.all(sql,[dateStart,dateEnd],function(err,rows){
            if(err){
                res.status(400);
            }

            rows.forEach(row=>{
                data.push({lat: row.lat, lng: row.lng, dateEvent: row.date, event: row.event})
            })
            
            return res.json(data)

        })

        db.close();

    },

    store(req,res) {
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database("./database/database.db")
        const sql = `INSERT INTO locations(lat,lng,dateEvent,event) VALUES (?,?,?,?)`
        const lc = req.body

        db.run(sql,[lc.lat,lc.lng,lc.dateEvent,lc.event],function(err){
            if (err) {
                return res.status(400)
            }
            
            return res.json({id: this.lastID})
        })

        db.close()
    }
}