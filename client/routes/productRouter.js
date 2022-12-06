const router = require("express").Router();

const product_controller = require("../controllers/productController");

router.get("/",product_controller.getAllProduct);
// router.post("/", loginController.loginPOST);
router.get("/:idCategory", product_controller.getbyCategory);
module.exports = router;