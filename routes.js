const express = require('express')
const routes = express.Router()
// get
routes.get('/',(req, res)=>{
   req.getConnection((err, conn )=>{
       if(err) return res.send(err)

       conn.query('SELECT * FROM book', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
       })
   })
})

// post
routes.post('/',(req, res)=>{
    req.getConnection((err, conn )=>{
        if(err) return res.send(err)
        console.log (req.body)
        conn.query('INSERT INTO book set ?', [req.body], (err, rows)=>{
             if(err) return res.send(err)
 
             res.send('book added!')
        })
    })
 })

// delete
 routes.delete('/:id',(req, res)=>{
    req.getConnection((err, conn )=>{
        if(err) return res.send(err)
        console.log (req.body)
        conn.query('DELETE FROM book WHERE id = ?', [req.params.id], (err, rows)=>{
             if(err) return res.send(err)
 
             res.send('book excluded!')
        })
    })
 })

// ACTUALIZAR
 routes.put('/:id',(req, res)=>{
    req.getConnection((err, conn )=>{
        if(err) return res.send(err)
        console.log (req.body)
        conn.query('UPDATE book set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
             if(err) return res.send(err)
 
             res.send('book updated!')
        })
    })
 })

module.exports= routes   