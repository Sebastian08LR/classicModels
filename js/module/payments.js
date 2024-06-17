import { connection } from '../../helpers/conexion.js';

// Consulta 4: Listar todos los pagos realizados por un cliente específico
export const getPaymentsByCustomer = async (customerNumber) => {
  const [rows] = await connection.query('SELECT * FROM payments WHERE customerNumber = ?', [customerNumber]);
  return rows;
};