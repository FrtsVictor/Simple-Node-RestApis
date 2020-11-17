const db = require('./_database');

const insertTestData = async () => {
  await db.connect();

  const queryProduct =
    'INSERT INTO products (name, price, qtt_stock, description) VALUES($1, $2, $3, $4)';

  await db.query(queryProduct, [
    'Xiami Mi8 Plus',
    1500.9,
    10,
    'Xiami Mi8 Plus 120GB HD 6GB RAM',
  ]);
  await db.query(queryProduct, [
    'Xiami Mi9 PlusC',
    1700.9,
    10,
    'Xiami Mi9 PlusC 180GB HD 8GB RAM',
  ]);
  await db.query(queryProduct, [
    'Xiami RedmeNote Pro',
    1450.9,
    10,
    'Xiami RedmeNote Pro 220GB HD, 8GB RAM',
  ]);
  await db.query(queryProduct, [
    'Xiaomi Pro Turbo',
    3900.9,
    10,
    'Xiaomi Pro Turbo 220GB HD 10GB RAM',
  ]);
  await db.query(queryProduct, [
    'Xiaomi Pocophone',
    3500.9,
    10,
    'Xiaomi Pocophone 220GB HD 12GB RAM',
  ]);

  console.log('Insert products ok');
};

insertTestData();
