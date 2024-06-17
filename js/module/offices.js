import { connection } from './conexion.js';

// Consulta 8: Detalles de oficinas en un país específico
export const getOfficesByCountry = async (country) => {
  const [rows] = await connection.query('SELECT * FROM offices WHERE country = ?', [country]);
  return rows;
};