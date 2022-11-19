import { Sequelize } from 'sequelize';
const database = 'decathlon_db';
const username = 'postgres';
const host = 'localhost';
const port = 5432;
const password = 'password';

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);
export default sequelize;
