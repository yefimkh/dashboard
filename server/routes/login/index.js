const express = require('express');
const router = express.Router();
//const conn = require('../../database/conn/MySQLConnect');
const  transactions = require('../../database/trans/transactions'); 

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('login', {
            title: 'Welcome to login',
            msg: 'what is your username'
        });
    });

    router.post('/', (req, res, next) => {
        var username = req.body.username;
        var password = req.body.password;
        if (username && password) {
            transactions.authorization(username, password, res, function ( err, results){
                if(err){
                    return res.status(501).json({
                        message: 'Not able to query the database'
                    });
                }else if(results.length > 0) {
                        req.session.loggedin = true;
                        req.session.username = username;
                        res.redirect('/dashboard');
                    } else {
                        res.send('Incorrect Username and/or Password!');
                    }			
                 res.end();
                
            });
            /*
            conn.connect();
            conn.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/dashboard');
                } else {
                    res.send('Incorrect Username and/or Password!');
                }			
                res.end();
            });
            conn.end();
            */
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    });

    return router;
};