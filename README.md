1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   SELECT firstName, lastName FROM employees WHERE officeCode=1;
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerName, phone, addressLine1, city, state, postalCode, country, creditLimit FROM customers WHERE customerNumber=112;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
    SELECT customerNumber, checkNumber, paymentDate, amount FROM payments WHERE customerNumber=112;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   SELECT customerNumber, orderNumber, orderDate FROM orders WHERE status='Shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   SELECT SUM(quantityInStock) AS totalQuantityInStock FROM products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   SELECT employeeNumber, firstName, lastName, reportsTo FROM employees WHERE reportsTo<>'NULL';
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   SELECT officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory FROM offices WHERE country='USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   SELECT customerName, phone, city FROM customers WHERE city='Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    SELECT productCode, productName, buyPrice FROM products WHERE buyPrice>50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   SELECT    c.customerName,    o.orderNumber,    o.orderDate,    d.productCode,    p.productName,    d.quantityOrdered,    d.priceEach 
   FROM    customers c
   INNER JOIN  orders o ON c.customerNumber = o.customerNumber 
   INNER JOIN  orderdetails d ON o.orderNumber = d.orderNumber 
   INNER JOIN  products p ON d.productCode = p.productCode 
   WHERE    c.customerNumber = 112;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   SELECT    c.customerName,    o.orderNumber,    o.orderDate,    d.productCode,    p.productName,    d.quantityOrdered,    d.priceEach 
   FROM    customers c
   INNER JOIN    orders o ON c.customerNumber = o.customerNumber 
   INNER JOIN    orderdetails d ON o.orderNumber = d.orderNumber 
   INNER JOIN    products p ON d.productCode = p.productCode 
   WHERE    c.customerNumber = 112;
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   SELECT c.customerName, c.phone, e.employeeNumber, e.firstName, e.lastName  
   FROM customers c 
   INNER JOIN employees e  ON e.employeeNumber = c.salesRepEmployeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT p.productCode, d.quantityOrdered 
   FROM products p
   INNER JOIN orderdetails d ON d.productCode = p.productCode;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   SELECT e.employeeNumber, o.city, o.phone, o.addressLine1, o.state, o.country 
   FROM employees e 
   INNER JOIN offices o ON e.officeCode = o.officeCode;
   ```

6. **Obtener detalles de los pedidos, incluyendo la información del cliente y los productos ordenados:**

   ```sql
   SELECT c.customerName, o.orderDate, o.status, od.productCode, od.quantityOrdered, od.priceEach
   FROM customers c
   JOIN orders o ON c.customerNumber = o.customerNumber
   JOIN orderdetails od ON o.orderNumber = od.orderNumber;
   ```

7. **Listar todos los pagos realizados, junto con la información del cliente y su representante de ventas:**

   ```sql
   SELECT p.paymentDate, p.amount, c.customerName, e.firstName, e.lastName
   FROM payments p
   JOIN customers c ON p.customerNumber = c.customerNumber
   LEFT JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber;
   ```

8. **Obtener una lista de todos los productos, junto con sus líneas de productos y el total de cantidad ordenada:**

   ```sql
   SELECT p.productName, od.orderNumber, SUM(od.quantityOrdered) AS 'Total Ordenado'
   FROM products p
   JOIN orderdetails od ON p.productCode = od.productCode
   GROUP BY p.productName, od.orderNumber;
   ```

9. **Listar todos los pedidos con detalles del cliente y el nombre del representante de ventas:**

   ```sql
   SELECT o.orderNumber, o.orderDate, o.status, c.customerName, e.firstName, e.lastName
   FROM orders o
   JOIN customers c ON o.customerNumber = c.customerNumber
   LEFT JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber;
   ```

10. **Obtener el total de pagos realizados por cada cliente y el nombre del representante de ventas asignado:**

   ```sql
   SELECT c.customerName, e.firstName, e.lastName, SUM(p.amount) AS 'Total Pagos'
   FROM customers c
   LEFT JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber
   JOIN payments p ON c.customerNumber = p.customerNumber
   GROUP BY c.customerName, e.firstName, e.lastName;
   ```