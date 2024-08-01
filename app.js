const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const topupRouter = require('./routes/topup');
const buyRouter = require('./routes/buy');
const sellRouter = require('./routes/sell');
const swapRouter = require('./routes/swap');
const sendRouter = require('./routes/send');
const receiveRouter = require('./routes/receive');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/topup', topupRouter);
app.use('/buy', buyRouter);
app.use('/sell', sellRouter);
app.use('/swap', swapRouter);
app.use('/send', sendRouter);
app.use('/receive', receiveRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
