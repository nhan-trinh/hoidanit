import bcrypt from "bcryptjs";
import mySQL from "mysql2";
const salt = bcrypt.genSaltSync(10); 


const connection = mySQL.createConnection({
  host: "localhost", // địa chỉ máy chủ MySQL
  user: "root", // tên người dùng
  database: "jwt", // tên cơ sở dữ liệu
}); // sử dụng mysql2 để kết nối với cơ sở dữ liệu MySQL

// 

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync("userPassword", salt);
  return hashPassword; 
};

const createNewUser = (username, email, password) => {
  let hashPass = hashUserPassword(password);
  connection.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [username, email, hashPass], // sử dụng dấu hỏi (?) để tránh SQL Injection
    function (err, results, fields) {
      if (err) {
        console.log("failed", err); 
      }
    }
  );
}


const getUserList = () => {
    let users = [];
    connection.query(
    "SELECT * from users ", // sử dụng dấu hỏi (?) để tránh SQL Injection
    function (err, results, fields) {
      if (err) {
        console.log("failed", err); 
      }
      console.log("check results:" , results)
    }
  );
}


module.exports = {
    createNewUser,
    getUserList 
}