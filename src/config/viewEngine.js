import express from "express";

const configviewEngine = (app) => {
    app.use(express.static('./src/public'));

    app.set("view engine", "ejs"); // định nghĩa sử dụng công nghệ view engine là ejs
    app.set("views", "./src/views"); // định nghĩa nơi lưu trữ các file view
}

export default configviewEngine;
