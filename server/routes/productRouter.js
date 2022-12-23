﻿const router = require("express").Router();
const product_controller = require("../controllers/productController");
router.get("/add-category", product_controller.getAddCategory);

router.post("/add-category", product_controller.postAddCategory);

router.get("/show-category", product_controller.getCategoryView);

router.get("/edit-category/:id",product_controller.getEditCategory);

router.post("/edit-category", product_controller.postEditCategory);

router.get("/show-producer", product_controller.getShowProducer);

router.get("/add-producer", product_controller.getAddProducer);

router.post("/add-producer", product_controller.postAddProducer);

router.get("/edit-producer/:id", product_controller.getEditProducer);

router.post("/edit-producer", product_controller.postEditProducer);

router.get("/delete-producer/:id", product_controller.getDeleteProducer);

router.get("/show-product")
module.exports = router;