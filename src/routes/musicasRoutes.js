//passo-a-passo

// 1. Importar o Express
// 2. Importar o Router
// 3. Importar o Controller
// 4. Criar a rota que traz todos os itens
// 5. Exportar o router

const express = require('express');
const router = express.Router();
const controller = require('../controller/musicasController');

router.get('/musicas', controller.getAll);
router.get("/", controller.getAll);
router.get('/musica/:id', controller.getByID);
router.get('/artistas', controller.getAllArtistas);
router.get('/musica/artista/:artista', controller.getByArtist)
router.get ('/artistas', controller.getAllArtistas)

module.exports = router