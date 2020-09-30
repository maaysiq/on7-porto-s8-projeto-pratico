//passo-a-passo

// 1. Importar app
// 2. Declarar a variavel "port" e atribuir o valor
// 3. "Escutar" o app mosntrando no console qual caminho está usando

const app = require('./src/app')
const port = 8080

app.listen(port, () => {
    console.log(` Executando em http://localhost${port}`);
})