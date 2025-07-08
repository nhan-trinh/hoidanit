import mySQL from "mysql2";

const connection = mySQL.createConnection({
    host: 'localhost', // địa chỉ máy chủ MySQL
    user: 'root', // tên người dùng
    database: 'jwt', // tên cơ sở dữ liệu
});// sử dụng mysql2 để kết nối với cơ sở dữ liệu MySQL



const handleHelloWorld = (req, res) => {
    return res.render("home.ejs");
}

const handleUser = (req, res) => {
    return res.render("user.ejs");
}

const handleCreateUser = (req, res) => {
    let username = req.body.Username;
    let email = req.body.Email;
    let password = req.body.Password;
    // req.body là nơi chứa dữ liệu được gửi từ form
    // console.log(">>>> check req" , req.body);



    connection.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',[username, email, password], // sử dụng dấu hỏi (?) để tránh SQL Injection
            function(err, results, fields) {
                if (err) {
                    console.log('failed', err)
                }
            }
    );



    return res.send("handleCreateUser");
}

module.exports = {
    handleHelloWorld,
    handleUser,
    handleCreateUser
}