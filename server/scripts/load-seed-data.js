const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const goals = [
  { title: 'Finish BootCamp 2', startDate: 20181120, endDate: 20181231, completed: false },
  { title: 'Learn Python', startDate: 20181101, endDate: 20190131, completed: false },
  { title: 'Learn C#', startDate: 20190101, endDate: 20190420, completed: false }
];

client.query(`
INSERT INTO profile (username, hash)
VALUES ($1, $2)
RETURNING id;
`,
['marcypdx', bcrypt.hashSync('abc123', 8)]
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
        INSERT INTO goal_table (title, start_date, end_date, profile_id, completed)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [goal.title, goal.startDate, goal.endDate, profile.id, goal.completed]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });