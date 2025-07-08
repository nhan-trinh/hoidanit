import express from "express"; // sử dụng express framework để xây dựng ứng dụng web
import homeController from "../controller/homeController.js"; // import controller để xử lý các yêu cầu từ người dùng
const router = express.Router(); // tạo một router mới từ express

/**
 * 
 * @param {*} app 
 * @returns 
 */



const initWebRoutes = (app) => {    // hàm khởi tạo các route cho ứng dụng web
    router.get("/", homeController.handleHelloWorld); // định nghĩa route cho đường dẫn gốc "/", khi người dùng truy cập vào đường dẫn này, sẽ gọi hàm handleHelloWorld
    router.get("/user" , homeController.handleUser);
    router.post("/users/create-user", homeController.handleCreateUser); // định nghĩa route cho đường dẫn "/user", khi người dùng truy cập vào đường dẫn này, sẽ gọi hàm handleUser
    return app.use("/", router); // sử dụng router này cho ứng dụng express tại đường dẫn gốc "/"

}   
export default initWebRoutes;