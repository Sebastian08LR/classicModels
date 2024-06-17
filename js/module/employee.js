import { connection } from '../../helpers/conexion.js';


// Consulta 2: Lista de empleados que trabajan en una oficina específica
export const getEmployeesByOffice = async (officeCode) => {
  const [rows] = await connection.query('SELECT lastName, firstName, officeCode FROM employees WHERE officeCode = ?', [officeCode]);
  return rows;
};

// Consulta 7: Lista de todos los empleados con su jefe (si tienen)
export const getEmployeesWithManager = async () => {
  const [rows] = await connection.query('SELECT e.employeeNumber, e.firstName, e.lastName, e.reportsTo, CONCAT(m.firstName, " ", m.lastName) AS managerName FROM employees e LEFT JOIN employees m ON e.reportsTo = m.employeeNumber');
  return rows;
};