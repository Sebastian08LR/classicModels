import { connection } from './conexion.js';

// Consulta 5: Obtener todos los pedidos con estado 'Shipped'
export const getAllShippedOrders = async () => {
  const [rows] = await connection.query('SELECT * FROM orders WHERE status = ?', ['Shipped']);
  return rows;
};