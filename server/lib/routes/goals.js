const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router 
  .get('/', (req, res) => {
    client.query(`
    SELECT id, title, start_date, end_date 
    FROM goal_table
    WHERE profile_id = $1;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })
  .post('/', (req, res) => {
    const body = req.body; 
    
    client.query(`
    INSERT INTO goal_table (title, start_date, end_date, profile_id)
    VALUES($1, $2, $3, $4)
    RETURNING *;
    `,
    [body.title, body.startDate, body.endDate, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;