-- If you are using postgres, add your schema to this file
-- From the command line run psql -U dbuser -d dbname -a -f filename.sql
--  to create your database/ columns/ and some seed data
-- alternatively, open psql and copy and paste the code below
-- once you've made your schema

DROP DATABASE IF EXISTS messages;

CREATE DATABASE messages;

\c messages;

CREATE TABLE messages (
-- build your schema here
id SERIAL,
name TEXT, 
message TEXT
);

-- Seed your data with a collection of insert statements
-- INSERT INTO messages () VALUES ();
