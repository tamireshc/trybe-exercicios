require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001

app.listen(PORT, async () => {
    console.log(`API sendo executada na porta ${PORT}`);
});