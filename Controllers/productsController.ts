import Products from "../Models/Products"
import Categories from "../Models/Categories";
import { Request , Response } from "express";

class productHandler {


    static async getAllProducts(req : Request, res : Response) : Promise<void> {

        const allProducts = await Products.findAll();
        if(allProducts.length <= 0) {
            res.json({massage : "no products found"}) ;
        }else{
            res.json({products : allProducts}) ;
        }

    }

    static async createProduct(req : Request, res : Response) : Promise<void>{

        const {prodName , description , imageUrl , price , quantity , color , categoryName} = req.body ;

        const getCategory = await Categories.findOne({
            where :{
                categoryName : categoryName
            }
        });
        if(getCategory == null){
            res.json({massage : "no categories found"}) ;
        }else{
            const newProduct = await Products.create({
                cat_id : getCategory.id,
                name : prodName,
                description : description,
                price : price ,
                quantity : quantity ,
                imageUrl : imageUrl,
                color : color
            });
            res.json({ massage : "product created successful" ,product : newProduct})
        }


    }

    static async createCategory(req: Request, res: Response) : Promise<void>{
        const categoryName = req.body.categoryName ;

        const newCategory = await Categories.create({
            categoryName : categoryName
        })

        res.json({massage : "category created" , category : newCategory}) ;

    }

}

export default productHandler ;