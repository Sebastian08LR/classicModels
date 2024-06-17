import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
  host: '172.16.101.146',
  user: 'camper',
  database: 'm2_juansebastianlatorreruiz',
  port: 3306,
  password: 'campus2023'
});