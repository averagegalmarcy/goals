const client = require('../lib/db-client');

const goals = [
  { title: 'Finish BootCamp 2', startDate: '2018-11-20', endDate: '2018-12-31' },
  { title: 'Learn Python', startDate: '2018-11-1', endDate: '2019-01-31' },
  { title: 'Learn C#', startDate: '2019-01-01', endDate: '2019-04-20' }
];

client.query(`
INSERT INTO profile (username, password)
VALUES ($1, $2)
RETURNING id;
`,
['marcypdx', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      goals.map(goal => {
        return client.query(`
        INSERT INTO goal_table (title, start_date, end_date, profile_id)
        VALUES ($1, $2, $3, $4)
        `,
        [goal.title, goal.startDate, goal.endDate, profile.id]);
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