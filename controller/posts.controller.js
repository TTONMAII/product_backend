const pool = require("../database/index")
const postsController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from product")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    
    create: async (req, res) => {
        try {
            const title = req.body
            const sql = await pool.query("INSERT INTO product SET ?", title)
            res.json({
                message: 'success',
                data: title
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    
}

module.exports = postsController