import { connection } from '../../helpers/conexion.js';

// Consulta 1: Obtener todos los productos en stock
export const getAllProductsInStock = async () => {
  const [rows] = await connection.query('SELECT productName, quantityInStock FROM products');
  return rows;
};

// Consulta 10: Productos con precio de compra mayor a 50
export const getProductsAbovePrice = async (price) => {
  const [rows] = await connection.query('SELECT * FROM products WHERE buyPrice > ?', [price]);
  return rows;
};

// Consulta 6: Cantidad total de productos en stock
export const getTotalProductsInStock = async () => {
  const [rows] = await connection.query('SELECT SUM(quantityInStock) AS total FROM products');
  return rows[0].total;
};