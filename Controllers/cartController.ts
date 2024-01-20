import {Request,Response} from 'express' ;
import cartModel from '../Models/Cart' ;
import products from '../Models/Products';
import Prod_Cart from '../Models/Prod_Cart';

class Cart {

    // Waiting for Eng. Omar to complete the JWT .
    static async createCart(req: Request, res: Response) : Promise<void> {

        const prod_Id = req.params.prod_Id ;
        const userId = 0 ; // get the user ID from the token .

        try{
            //getting the product info .
            const productsInfo = await products.findOne({
                where : { prod_Id : prod_Id}
            })
            // Checking if user have cart or not ..
            const checkIfUserHasCart = await cartModel.findOne({
                where:{
                    userId: userId ,
                    Is_purchased: false 
                }
            });
            // if user has cart then we check if the product already exists in cart ????????? //
            if(checkIfUserHasCart){
                const checkIfProdInCart = await Prod_Cart.findOne({
                    where:{
                        Productid : prod_Id
                    }
                });
                // if product already exists in cart respond with this .. //
                if(checkIfProdInCart!=null){

                    res.json({message: "Product already exists in cart"});

                }else if(checkIfProdInCart == null){
                    // adding product to cart //
                    const createAssociation = await Prod_Cart.create({
                        Cartid : checkIfUserHasCart.id,
                        Productid : prod_Id ,
                        quantity : productsInfo?.quantity ,
                        totalPrice : productsInfo?.price
                    });
                    res.json({message: "Product added to cart successfully" , cart : createAssociation});
                }
                // if user don`t have a cart .. //
            }else{

                const createCartRecord = await cartModel.create({
                    user_id: userId ,
                    Is_purchased : false  // update here ==> this attribute must be in association table....??//
                });

                const createAssociation = await Prod_Cart.create({
                    Cartid : createCartRecord.id,
                    Productid : prod_Id ,
                    quantity : productsInfo?.quantity ,
                    totalPrice : productsInfo?.price
                });

                res.json({message : "new cart added and product added successfully" , cart : createAssociation});

            }

        }catch(err){
            console.log("Failed to create cart"+err);
            throw err;
        }
    }

    static async getCart(req: Request, res: Response) : Promise<void> {

        const userId = 0 ; // get userId from the token .

        try{
            const cart = await cartModel.findOne({
                where:{
                    user_id: userId,
                    Is_purchased: false
                },include:[
                    products
                ]
            });
            res.json({message: "Cart found successfully" , cart : cart});
        }catch(error){
            console.log("Failed to get cart"+error);
            throw error;    
        }
    }


}

export default Cart ;