import Categories from '../Models/Categories' ;
import Products from '../Models/Products' ;
import { Request , Response } from "express" ;


class CategoryHandler{

    static async createCategory(req: Request, res: Response): Promise<void> {
        const categoryName = req.body.categoryName;
        try {
          const newCategory = await Categories.create({
            categoryName: categoryName,
          });
    
          res.json({ massage: "category created", category: newCategory });
        } catch (e) {
          console.log("error creating category");
          throw e;
        }
      }

      static async GetCategories(req: Request, res: Response): Promise<void>{

        try{
            const allCategories = await Categories.findAll();

            if(allCategories.length>0){
                res.json({ message: "categories" , categories: allCategories });
            }

            res.json({ message: "no categories found"}) ;

        }catch(e){

            console.log("error getting categories");
            throw e;
        }
        
      }

      static async getSingleCategoryWithProduct(req:Request , res: Response): Promise<void>{

        const catId = req.params.catId;
        try{
          const productWithCategory = await Products.findAll({
            where:{
              cat_id : catId
            }
          });
          if(productWithCategory.length>0){
            res.json({ message:"products with category found" , products: productWithCategory }) ;
          }
          res.json({ message: "cant find product with category"}) ;
        }catch(e){
          console.log("error in get product with category") ;
          throw e ;
        }
      }
}

export default CategoryHandler ;