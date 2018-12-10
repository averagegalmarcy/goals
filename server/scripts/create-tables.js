const client = require('../lib/db-client');

client.query(`
CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY,
  username VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS goal_table (
  id SERIAL PRIMARY KEY,
  title VARCHAR(256) NOT NULL,
  start_date DATE,
  end_date DATE,
  profile_id INT NOT NULL REFERENCES profile(id)
);
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });