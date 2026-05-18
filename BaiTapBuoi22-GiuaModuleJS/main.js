const employees = [
  { id: 1, name: "Alice", age: 23, status: "working" },
  { id: 3, name: "Bob", age: 25, status: "working" },
  { id: 6, name: "John", age: 27, status: "working" },
  { id: 8, name: "David", age: 23, status: "quit_job" },
  { id: 10, name: "Eve", age: 20, status: "working" },
];

const products = [
  { id: 1, name: "Phone", price: 1200 },
  { id: 2, name: "Laptop", price: 3000 },
  { id: 3, name: "Tab", price: 2000 },
  { id: 4, name: "PC", price: 800 },
  { id: 5, name: "Monitor", price: 1500 },
];

const orders = [
  { id: 1, employeeId: 1, productId: 4, quantity: 1 },
  { id: 2, employeeId: 3, productId: 2, quantity: 4 },
  { id: 3, employeeId: 1, productId: 5, quantity: 3 },
  { id: 4, employeeId: 6, productId: 1, quantity: 2 },
  { id: 5, employeeId: 3, productId: 5, quantity: 3 },
  { id: 6, employeeId: 8, productId: 1, quantity: 1 },
  { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

// Bai 1
const getListEmployeesWorking = (employees) => {
  if (!employees || employees.length === 0) return null;
  return employees.filter((employee) => employee.status === "working");
};
console.log(getListEmployeesWorking(employees));

// Bai 2
const getOldestEmployee = (employees) => {
  if (!employees || employees.length === 0) return null;
  let oldestEmployee = employees[0];
  for (const employee of employees) {
    if (oldestEmployee.age < employee.age) oldestEmployee = employee;
  }
  return oldestEmployee;
};
console.log(getOldestEmployee(employees));

// Bai 3
const getCheapestProduct = (products) => {
  if (!products || products.length === 0) return null;
  let cheapestProduct = products[0];
  for (const product of products) {
    if (cheapestProduct.price > product.price) cheapestProduct = product;
  }
  return cheapestProduct;
};
console.log(getCheapestProduct(products));

// Bai 4
const findBestSellerProduct = (products, orders) => {
  if (!products || products.length === 0 || !orders || orders.length === 0)
    return null;

  const ordersMap = {};
  let maxValueQuantity = 0;
  let bestSellerProductId = 0;
  for (const order of orders) {
    if (!ordersMap[order.productId]) ordersMap[order.productId] = 0;

    ordersMap[order.productId] += order.quantity;
    if (maxValueQuantity < ordersMap[order.productId]) {
      maxValueQuantity = ordersMap[order.productId];
      bestSellerProductId = order.productId;
    }
  }
  return products.find((product) => product.id === bestSellerProductId);
};
console.log(findBestSellerProduct(products, orders));
// Bai 5
const findBestRevenueProduct = (products, orders) => {
  if (!products || products.length === 0 || !orders || orders.length === 0)
    return null;
  const productsMap = {};
  for (const product of products) {
    productsMap[product.id] = product.price;
  }
  const revenueMap = {};
  let maxRevenue = 0;
  let bestRevenueProductId = 0;
  for (const order of orders) {
    if (!revenueMap[order.productId]) revenueMap[order.productId] = 0;
    revenueMap[order.productId] +=
      order.quantity * productsMap[order.productId];
    if (maxRevenue < revenueMap[order.productId]) {
      maxRevenue = revenueMap[order.productId];
      bestRevenueProductId = order.productId;
    }
  }
  return products.find((product) => product.id === bestRevenueProductId);
};
console.log(findBestRevenueProduct(products, orders));

// Bai 6
const findBestSellerEmployee = (employees, orders) => {
  if (!employees || employees.length === 0 || !orders || orders.length === 0)
    return null;
  const ordersMap = {};
  let maxValueQuantity = 0;
  let bestSellerEmployeeId = 0;
  for (const order of orders) {
    if (!ordersMap[order.employeeId]) ordersMap[order.employeeId] = 0;
    ordersMap[order.employeeId] += order.quantity;
    if (maxValueQuantity < ordersMap[order.employeeId]) {
      maxValueQuantity = ordersMap[order.employeeId];
      bestSellerEmployeeId = order.employeeId;
    }
  }
  return employees.find((employee) => employee.id === bestSellerEmployeeId);
};
console.log(findBestSellerEmployee(employees, orders));

// Bai 7
const findBestRevenueEmployees = (products, employees, orders) => {
  if (
    !products ||
    products.length === 0 ||
    !employees ||
    employees.length === 0 ||
    !orders ||
    orders.length === 0
  )
    return null;
  const productsMap = {};
  for (const product of products) {
    productsMap[product.id] = product.price;
  }
  const ordersEmployeesMap = {};
  for (const order of orders) {
    if (!ordersEmployeesMap[order.employeeId])
      ordersEmployeesMap[order.employeeId] = {};
    if (!ordersEmployeesMap[order.employeeId][order.productId])
      ordersEmployeesMap[order.employeeId][order.productId] = 0;
    ordersEmployeesMap[order.employeeId][order.productId] += order.quantity;
  }
  let maxRevenue = 0;
  let bestRevenueEmployeeId = null;

  for (const employeeId in ordersEmployeesMap) {
    let currentEmployeeTotalRevenue = 0;

    const productsSold = ordersEmployeesMap[employeeId];

    for (const productId in productsSold) {
      const quantity = productsSold[productId];
      const price = productsMap[productId];

      currentEmployeeTotalRevenue += quantity * price;
    }

    if (maxRevenue < currentEmployeeTotalRevenue) {
      maxRevenue = currentEmployeeTotalRevenue;

      bestRevenueEmployeeId = Number(employeeId);
    }
  }

  return employees.find((employee) => employee.id === bestRevenueEmployeeId);
};
console.log(findBestRevenueEmployees(products, employees, orders));

// Bai 8
const getBestRevenueProductPerEmployee = (employees, products, orders) => {
  // Guard clause
  if (!employees || !products || !orders || employees.length === 0) return null;

  // Map product
  const productsMap = {};
  for (const product of products) {
    productsMap[product.id] = product;
  }

  // Nested map to accumulate revenue per employee per product
  const employeeProductRevenueMap = {};
  for (const order of orders) {
    if (!employeeProductRevenueMap[order.employeeId]) {
      employeeProductRevenueMap[order.employeeId] = {};
    }
    if (!employeeProductRevenueMap[order.employeeId][order.productId]) {
      employeeProductRevenueMap[order.employeeId][order.productId] = 0;
    }

    // Calculate revenue directly instead of just quantity
    employeeProductRevenueMap[order.employeeId][order.productId] +=
      order.quantity * productsMap[order.productId].price;
  }

  //Find the top product for each employee
  const result = [];
  for (const employee of employees) {
    const productsSold = employeeProductRevenueMap[employee.id];

    // Skip if the employee hasn't sold anything
    if (!productsSold) continue;

    let maxRevenue = 0;
    let bestProductId = null;

    // Find the max revenue product in the inner map
    for (const productId in productsSold) {
      if (productsSold[productId] > maxRevenue) {
        maxRevenue = productsSold[productId];
        bestProductId = Number(productId);
      }
    }

    // Push the result object
    result.push({
      employee: employee.name,
      bestProduct: productsMap[bestProductId].name,
      revenueGenerated: maxRevenue,
    });
  }

  return result;
};
console.log(getBestRevenueProductPerEmployee(employees, products, orders));

// Bai 9
const calculateEmployeeCommissions = (employees, products, orders) => {
  if (!employees || !products || !orders || employees.length === 0) return null;

  const COMMISSION_RATE = 0.03;

  // Price map
  const priceMap = {};
  for (const product of products) priceMap[product.id] = product.price;

  // Step 2: Total revenue map per employee
  const revenueMap = {};
  for (const order of orders) {
    if (!revenueMap[order.employeeId]) revenueMap[order.employeeId] = 0;
    revenueMap[order.employeeId] += order.quantity * priceMap[order.productId];
  }

  return employees.map((employee) => {
    const totalRevenue = revenueMap[employee.id] || 0;

    return {
      ...employee,
      commission: totalRevenue * COMMISSION_RATE,
    };
  });
};

console.log(calculateEmployeeCommissions(employees, products, orders));

// Bai 10
const sortEmployeesByRevenueDescending = (employees, products, orders) => {
  if (!employees || !products || !orders || employees.length === 0) return null;

  //Price map
  const priceMap = {};
  for (const product of products) priceMap[product.id] = product.price;

  //Total revenue map per employee
  const revenueMap = {};
  for (const order of orders) {
    if (!revenueMap[order.employeeId]) revenueMap[order.employeeId] = 0;
    revenueMap[order.employeeId] += order.quantity * priceMap[order.productId];
  }

  //Sort the employees array
  const sortedEmployees = [...employees].sort((employeeA, employeeB) => {
    const revenueA = revenueMap[employeeA.id] || 0;
    const revenueB = revenueMap[employeeB.id] || 0;

    return revenueB - revenueA;
  });

  return sortedEmployees;
};

console.log(sortEmployeesByRevenueDescending(employees, products, orders));
