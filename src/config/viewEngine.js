import express from "express"; // sử dụng express framework để xây dựng ứng dụng web

const configviewEngine = (app) => { // cấu hình view engine cho ứng dụng
    // sử dụng express.static để phục vụ các file tĩnh từ thư mục public
    app.use(express.static('./src/public')); // thư mục chứa các file tĩnh như css, js, hình ảnh

    app.set("view engine", "ejs"); // định nghĩa sử dụng công nghệ view engine là ejs
    app.set("views", "./src/views"); // định nghĩa nơi lưu trữ các file view
}

export default configviewEngine;
