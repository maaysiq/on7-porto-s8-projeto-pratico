// passo-a-passo
// 1: Importar o JSON de músicas
// 2: Criar o metodo para buscar todas as músicas
// 3: Exportar o método

// ./ retornar arquivos ou pastas do mesmo diretorio
// ../ retorna arquivos ou pastas de um diretorio acima

const musicas = require('../model/musicas.json');
//const artistas =  require('../model/artistas.json')

const getAll =  (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
    //verifica se a resposta tem status 200 (sucesso) e envia o JSON
}
// passo-a-passo

// criar metodo getById
// retornar o item daquele ID

const getByID = (req, res) => {
    const id = req.params.id

    const musicaFiltrada = musicas.find((musica)=> {
        return musica.id == id
    })
    res.status(200).send(musicaFiltrada)
}

    // 1. Criar metodo getAllArtistas
    // 2. Filtrar lista de musica por artista

    //const getAllArtistas =(req, res) => {
        //res.status(200).send(artistas)
    //}

    const getByArtist =(req, res) => {
        const artista = req.params.artista
        const artistaFiltrado = musicas.filter((musica) => musica.artista ==artista)

        res.status(200).send(artistaFiltrado);
    }


    // 1. criar metodo getAllAstists
    // 2. Retornar somente o nome dos artistas da lista musica

    const getAllArtistas = (req, res) => {
        const artistas = musicas.map((musica) => musica.artista)

        res.status(200).send(artistas)
    }


module.exports ={getAll, getByID, getAllArtistas, getByArtist}