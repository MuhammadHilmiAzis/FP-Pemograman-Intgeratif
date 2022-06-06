exports.account = function(req,res){
    res.render('account',{message:''})
}

exports.product = function(req,res){
    res.render('products',{message:''})
}

exports.cart = function(req,res){
    res.render('cart',{message:''})
}