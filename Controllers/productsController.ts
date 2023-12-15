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

    static async getSingleProduct(req : Request, res : Response) : Promise<void>{
        const prodId = req.params.id ;

        try{
            const getOneProduct = await Products.findOne({
                where:{
                    id : prodId
                }
            })

            res.json({massage : "product found" , products : getOneProduct}) ;
        }catch(e){
            console.log("error in Single Product");
            throw e ;
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
            try{
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
            }catch(e){
                console.log("error creating product"); 
                throw e ;
            }

            
        }


    }

    static async createCategory(req: Request, res: Response) : Promise<void>{
        const categoryName = req.body.categoryName ;
        try{
            const newCategory = await Categories.create({
                categoryName : categoryName
            })

            res.json({massage : "category created" , category : newCategory}) ;
        }catch(e){
            console.log("error creating category")
            throw e ;
        }
        

        

    }

    static async updateProduct(req: Request, res: Response) : Promise<void>{
        const prodId = req.params.id ;
        const {prodName , description , imageUrl , price , quantity , color , categoryName} = req.body ;

        // getting the category info //
        const category = await Categories.findOne({
            where:{
                categoryName : categoryName
            }
        });
        if(categoryName == null) {
            res.json({massage : "category not found"}) ;
        }else if(categoryName!=null){
            try{
                const updated = await Products.update({
                    cat_id : category!.id,
                    name : prodName,
                    description : description,
                    price : price ,
                    quantity : quantity,
                    imageUrl : imageUrl ,
                    color : color
                },{
                    where : {
                        id : prodId
                    }
                })
                res.json({massage : "product updated" , product : updated}) ;
            }catch(e){
                console.log("error in update product") ;
                throw e ;
            }
           
        }
    }

    static async deleteProduct(res: Response, req : Request) : Promise<void>{
        const prodId = req.params.id ;

        try{
            const deletedProduct = await Products.destroy({
                where:{
                    id : prodId
                }
            })

            res.json({massage : "product deleted" , product : deletedProduct}) ;
        }catch(e){
            console.log("error in delete product")
            throw e ;
        }
    }
}

export default productHandler ;