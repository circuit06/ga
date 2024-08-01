const express = require('express');
const app = express();


// Set up view engine
app.set('view engine', 'ejs');
// enable static files
app.use(express.static('public'));
// enable from processing 
app.use(express.urlencoded({
    extended: false
}));

// Define GET routes
app.get('/',(req, res) => {
        //render HTML page with data
        res.render('index');

});

app.get('/whyus',(req, res) => {
        //render HTML page with data
        res.render('whyus');
});

app.get('/aboutus',(req, res) => {
        //render HTML page with data
        res.render('aboutus');
});

app.get('/contactus',(req, res) => {
        //render HTML page with data
        res.render('contactus');

});

app.get('/currencyxchange',(req, res) => {
    //render HTML page with data
    res.render('currencyxchange');
});

app.get('/login',(req, res) => {
        //render HTML page with data
        res.render('login');
});

app.get('/signup',(req, res) => {
        //render HTML page with data
        res.render('signup');
});

app.get('/homepage',(req, res) => {
        //render HTML page with data
        res.render('homepage');
});

app.get('/portfolio',(req, res) => {
        //render HTML page with data
        res.render('portfolio');
});

app.get('/transfer',(req, res) => {
        //render HTML page with data
        res.render('transfer');
});

app.get('/borrow',(req, res) => {
        //render HTML page with data
        res.render('borrow');
});

app.get('/topup',(req, res) => {
        //render HTML page with data
        res.render('topup');
});

app.get('/loan',(req, res) => {
        //render HTML page with data
        res.render('loan');
});

app.get('/forgetpw',(req, res) => {
    //render HTML page with data
    res.render('forgetpw');
});

app.get('/emailsent',(req, res) => {
    //render HTML page with data
    res.render('emailsent');
});

app.get('/transfersuccess',(req, res) => {
    //render HTML page with data
    res.render('transfersuccess');
});

app.get('/pending',(req, res) => {
    //render HTML page with data
    res.render('pending');
});

app.get('/topupsuccess',(req, res) => {
    //render HTML page with data
    res.render('topupsuccess');
});

app.get('/loanapproved',(req, res) => {
    //render HTML page with data
    res.render('loanapproved');
});

app.get('/loanrejected',(req, res) => {
    //render HTML page with data
    res.render('loanrejected');
});


// Define POST routes
app.post('/login', (req,res) => {
        //send a success response 
        res.redirect('/homepage');
})

app.post('/signup', (req,res) => {
    //send a success response 
    res.redirect('/login');
})

app.post('/forgetpw', (req,res) => {
    //send a success response 
    res.redirect('/emailsent');
})

app.post('/transfer', (req,res) => {
    //send a success response 
    res.redirect('/transfersuccess');
})

app.post('/borrow', (req,res) => {
    //send a success response 
    res.redirect('/pending');
})

app.post('/topup', (req,res) => {
    //send a success response 
    res.redirect('/topupsuccess');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));