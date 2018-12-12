const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router 
  .get('/', (req, res) => {
    console.log('banana\n\n', req.userId);
    client.query(`
    SELECT id, title, start_date, end_date, completed 
    FROM goal_table
    WHERE profile_id = $1;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })
  .get('/stats', (req, res) => {
    client.query(`
    SELECT
      profile_id,
      MIN(end_date - start_date) as mindiff,
      MAX(end_date - start_date) as maxdiff,
      CAST(AVG(end_date - start_date) as int) as average,
      count(goal_table.id) as "count"
    FROM goal_table
    GROUP by profile_id;
`,
  [req.userId]
  )
    .then(result => {
      res.json(result.rows)
    });
  })
  .post('/', (req, res) => {
    const body = req.body; 
    
    client.query(`
    INSERT INTO goal_table (title, start_date, end_date, profile_id)
    VALUES($1, $2, $3, $4)
    RETURNING *;ç
    `,
    [body.title, body.startDate, body.endDate, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  .put('/:id', (req, res) => {
    const completed = req.body.completed;

    client.query(`
    UPDATE goal_table
    SET completed = $1
    WHERE id = $2
    AND profile_id = $3
    RETURNING *;
  `,
    [completed, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;