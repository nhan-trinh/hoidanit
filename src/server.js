import express from "express"; // 
import configViewEngine from "./config/viewEngine.js"; // 
import initWebRoutes from "./routes/Web.js";
require('dotenv').config(); // nạp biến môi trường từ file .env
import bodyParser from "body-parser"; // sử dụng body-parser để phân tích dữ liệu từ request

const app = express(); // khởi tạo ứng dụng express
const PORT = process.env.PORT || 8080; // lấy PORT từ biến môi trường hoặc mặc định là 8080

configViewEngine(app); // cấu hình view engine

// cấu hình các middleware cho ứng dụng express
app.use(bodyParser.json()); // sử dụng body-parser để phân tích dữ liệu JSON từ request
app.use(bodyParser.urlencoded({ extended: true })); // sử dụng body-parser để phân tích dữ liệu URL-encoded từ request
//

initWebRoutes(app); // khởi tạo các route
 
app.listen(PORT, () => { // lắng nghe kết nối trên cổng PORT
    console.log(">>>>>server is running on port: " + PORT); // in ra thông báo khi server đã chạy thành công
}) 