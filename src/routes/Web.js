import express from "express"; // sử dụng express framework để xây dựng ứng dụng web
import homeController from "../controller/homeController.js"; // import controller để xử lý các yêu cầu từ người dùng
import apiController from '../controller/apiController.js'
const router = express.Router(); // tạo một router mới từ express

/**
 *
 * @param {*} app
 * @returns
 */

const initWebRoutes = (app) => {
  // hàm khởi tạo các route cho ứng dụng web
  router.get("/", homeController.handleHelloWorld); // định nghĩa route cho đường dẫn gốc "/", khi người dùng truy cập vào đường dẫn này, sẽ gọi hàm handleHelloWorld
  router.get("/user", homeController.handleUser); // định nghĩa
  router.post("/users/create-user", homeController.handleCreateUser); // định nghĩa route cho đường dẫn "/user", khi người dùng truy cập vào đường dẫn này, sẽ gọi hàm handleUser
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.get("/edit-user/:id" , homeController.handleEditUser);
  router.post("/users/update-user", homeController.handleUpdateUser);
  router.get("/api/test-api", apiController.testApi);
  return app.use("/", router); // sử dụng router này cho ứng dụng express tại đường dẫn gốc "/"
};
export default initWebRoutes;
