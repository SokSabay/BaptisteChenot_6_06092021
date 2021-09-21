const express = require('express')
const router = express.Router();

const auth = require("../middleware/auth");
const stuffCtrl = require('../controllers/stuff')
const multer = require('../middleware/multer-config')

router.post("/", auth, multer, stuffCtrl.createThing);
router.post("/:id/like", auth, stuffCtrl.likeOrNot);
router.put("/:id", auth, multer, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
router.get("/:id", auth, stuffCtrl.getOneThing);
router.get("/", auth, stuffCtrl.getAllThing);

module.exports = router;