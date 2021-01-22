const { update } = require('../models/cart');
const Cart=require('../models/cart')

exports.addCart=(req, res)=>{
    Cart.findOne({user: req.user._id})
    .exec((error, cart)=>{
        if(error) return res.status(400).json({error})
        if(cart){
            //if cart existt then update the card by quantity
            const product=req.body.cartItem.product; 
            const item=cart.cartItem.find(c=>c.product==product)
            let conditions, update;
            if(item){
                conditions={"user": req.user._id, "cartItem.product":product},
                update= {"$set": {
                    "cartItem.$": {
                        ...req.body.cartItem,
                        quantity: item.quantity+req.body.cartItem.quantity
                    }
                }
            };
                
            } else {
                conditions={user: req.user._id},
                update={
                    "$push": {
                        "cartItem": req.body.cartItem
                    }
                };     
    }
    Cart.findOneAndUpdate(conditions, update)
    .exec((error, _cart)=>{
        if(error) return res.status(400).json({error})
        if(_cart){
            return res.status(200).json({message: _cart})
    }
    }) 
        } else { 
            //if cart does not exist then add the cart
            const cart=new Cart({
                user: req.user._id,
                cartItem: [req.body.cartItem]
            })
            cart.save((error, cart)=>{
                if(error) return res.status(400).json({error})
                if(cart) {
                    res.status(200).json({cart})
                }
            });
        }
    });
};
  