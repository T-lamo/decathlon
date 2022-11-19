import postgres from 'postgres';
import { Sequelize } from 'sequelize';

// const database= import.meta.env.VITE_PGDATABASE;
// const  username= import.meta.env.VITE_PGUSER;
// const host= import.meta.env.VITE_PGHOST;
// const port = Number(import.meta.env.VITE_PGPORT || 5432);
// const password = import.meta.env.VITE_PGPASSWORD;

const database = 'rasa_demo_db';
const username = 'postgres';
const host = 'localhost';
const port = 5432;
const password = 'password';
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname'); // Example for postgres

const sql = postgres(`postgres://${username}:${password}@${host}:${port}/${database}`);
export default sql;
