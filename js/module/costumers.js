import { connection } from '../../helpers/conexion.js';

// Consulta 3: Detalles de un cliente específico
export const getCustomerDetails = async (customerNumber) => {
  const [rows] = await connection.query('SELECT * FROM customers WHERE customerNumber = ?', [customerNumber]);
  return rows;
};

// Consulta 9: Listar todos los clientes en una ciudad específica
export const getCustomersByCity = async (city) => {
  const [rows] = await connection.query('SELECT * FROM customers WHERE city = ?', [city]);
  return rows;
};