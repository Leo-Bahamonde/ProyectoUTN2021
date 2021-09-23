const express = require("express");
const router = express.Router();


/* Inicio */
router.get("/", (req, res) => {
   //res.sendFile(path.join(__dirname, "views/index.html"));  
   res.render("index.html", {
      title: "Sillones Confort FB"
   })
})
/* Contacto */
router.get("/contactos", (req, res) => {
   res.render("contact.html", {
      title: "Contactos"
   })
})
/* Como llegar */
router.get("/como-llegar", (req, res) => {
   res.render("howToGet.html", {
      title: "¿Como llegar?"
   })
})
/* Productos */
router.get("/productos", (req, res) => {
   res.render("product.html", {
      title: "productos"
   })
})

module.exports = router;