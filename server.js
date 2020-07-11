const express = require('express');
const app = express();
const bookRoute =require('./routes/bookRoute');
const cateRoute =require('./routes/cateRoute');
//routes
app.use('/',bookRoute);
app.use('/book',bookRoute);
app.use('/cate',cateRoute);

//port number
const PORT = process.env.PORT || 5000;

//listen to PORT
app.listen(PORT,()=>console.log(`server listent on port ${PORT}`))