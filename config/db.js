const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true,useFindAndModify: false }).then((result) => {
    console.log('Veritabanı bağlantısı başarılı');
}).catch((err) => {
    console.error('Veritabanına bağlanılamadı', err);
});

