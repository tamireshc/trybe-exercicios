require('dotenv').config();

const app = require('./app');
const connection = require('./db/connection');

const port = 3001;

app.listen(port, async () => {
    console.log(`API TrybeCash está sendo executada na porta ${port}`);

    //O código abaixo é para testarmos a comunicação com o MySQL
    // const [result] = await connection.execute('SELECT 2+2');
    // if (result) {
    //     console.log('MySQL connection OK');
    // }

    console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);

});