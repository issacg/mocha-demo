var express = require('express'),
    app = express();
    
require('./lib/reverser')(app);

app.listen(8080);