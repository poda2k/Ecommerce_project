import { Request, Response } from "express";
import cartModel from "../Models/Cart";
import products from "../Models/Products";
import Prod_Cart from "../Models/Prod_Cart";


  // Waiting for Eng. Omar to complete the JWT .
 export const createCart = async(req:Request , res:Response) => {
  const prod_Id = req.params.prod_Id;
    console.log(prod_Id);
    const userId = 1; // get the user ID from the token .

    try {
      //getting the product info .
      const productsInfo = await products.findOne({
        where: { id: prod_Id },
      });
      console.log(`productsInfo?.price`, productsInfo?.price);

      // Checking if user have cart or not ..
      const checkIfUserHasCart = await cartModel.findOne({
        where: {
          user_id: userId,
          Is_purchased: false,
        },
      });
      // if user has cart then we check if the product already exists in cart ????????? //
      if (checkIfUserHasCart) {
        const checkIfProdInCart = await Prod_Cart.findOne({
          where: {
            ProductId: prod_Id,
          },
        });
        // if product already exists in cart respond with this .. //
        if (checkIfProdInCart != null) {
          res.json({ message: "Product already exists in cart" });
        } else if (checkIfProdInCart == null) {
          // adding product to cart //
          const createAssociation = await Prod_Cart.create({
            CartId: checkIfUserHasCart.id,
            ProductId: prod_Id,
            quantity: req.body.quantity,
            totalprice: productsInfo?.price,
          });
          res.json({
            message: "Product added to cart successfully",
            cart: createAssociation,
          });
        }
        // if user don`t have a cart .. //
      } else {
        const createCartRecord = await cartModel.create({
          user_id: userId,
          Is_purchased: false, // update here ==> this attribute must be in association table....??//
        });

        const createAssociation = await Prod_Cart.create({
          Cartid: createCartRecord.id,
          Productid: prod_Id,
          quantity: productsInfo?.quantity,
          totalPrice: productsInfo?.price,
        });

        res.json({
          message: "new cart added and product added successfully",
          cart: createAssociation,
        });
      }
    } catch (err) {
      console.log("Failed to create cart" + err);
      throw err;
    }
 }

export const updateCart = async(req : Request, res : Response) => {
  try {
    const updatedCart = await Prod_Cart.update(
      {
        quantity: req.body.quantity,
      },
      {
        where: { CartId: req.query.cartId, ProductId: req.query.prodId },
      }
    );

    res.status(200).json({ message: "the quantity has been updated" });
    console.log(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
 }
 
export const getCart = async(req: any, res: Response)=>{
    // get userId from the token .
    console.log(req["user"]);

    try {
      const cart = await cartModel.findAll({
        where: {
          user_id: req["user"],
          Is_purchased: false,
        },
        include: [products],
      });
      res.json({ message: "Cart found successfully", cart: cart });
    } catch (error) {
      console.log("Failed to get cart" + error);
      throw error;
    }
  }
 
  

