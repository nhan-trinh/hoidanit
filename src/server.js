import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/Web.js";
require('dotenv').config(); // nạp biến môi trường từ file .env

const app = express(); // khởi tạo ứng dụng express
const PORT = process.env.PORT || 8080; // lấy PORT từ biến môi trường hoặc mặc định là 8080

configViewEngine(app); // cấu hình view engine
initWebRoutes(app); // khởi tạo các route


app.listen(PORT, () => { // lắng nghe kết nối trên cổng PORT
    console.log(">>>>>server is running on port: " + PORT); // in ra thông báo khi server đã chạy thành công
})