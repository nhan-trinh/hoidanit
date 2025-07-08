import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird"





const salt = bcrypt.genSaltSync(10);

// const connection = mysql.createConnection({
//   host: "localhost", // địa chỉ máy chủ MySQL
//   user: "root", // tên người dùng
//   database: "jwt", // tên cơ sở dữ liệu
// }); // sử dụng mysql2 để kết nối với cơ sở dữ liệu MySQL

//

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync("userPassword", salt);
  return hashPassword;
};

const createNewUser = (username, email, password) => {
  let hashPass = hashUserPassword(password);
  connection.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [username, email, hashPass], // sử dụng dấu hỏi (?) để tránh SQL Injection
    function (err, results, fields) {
      if (err) {
        console.log("failed", err);
      }
    }
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt',
  Promise: bluebird,
});
  let users = [];
  // connection.query(
  //   "SELECT * from users ", // sử dụng dấu hỏi (?) để tránh SQL Injection
  //   function (err, results, fields) {
  //     if (err) {
  //       console.log("failed", err);
  //       return users;
  //     }
  //     users = results;
  //     console.log("check user list:", users);
  //     return users;
  //   }
  // );

  try {
    const [rows, fields] = await connection.execute("SELECT * from users");
    return rows;
  } catch (error) {
    console.log(">>>> check error", error)
  }
};

module.exports = {
  createNewUser,
  getUserList,
};
