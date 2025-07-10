import express from "express"; // sử dụng express framework để xây dựng ứng dụng web
import apiController from '../controller/apiController.js'
const router = express.Router(); // tạo một router mới từ express

/**
 *
 * @param {*} app
 * @returns
 */

const initApiRoutes = (app) => {
  // hàm khởi tạo các route cho ứng dụng web
  router.get("/api/test-api", apiController.testApi);
  router.post("/register", apiController.handleRegister)
  return app.use("/api/v1", router); // sử dụng router này cho ứng dụng express tại đường dẫn gốc "/"
};  
export default initApiRoutes;
