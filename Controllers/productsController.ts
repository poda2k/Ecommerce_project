import Products from "../Models/Products";
import Categories from "../Models/Categories";
import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  const allProducts = await Products.findAll();
  if (allProducts.length <= 0) {
    res.json({ message: "no products found" });
  } else {
    res.json({ products: allProducts });
  }
};

export const getSingleProduct = async (req: Request, res: Response): Promise<void> => {
  const prodId = req.params.id;

  try {
    const getOneProduct = await Products.findOne({
      where: {
        id: prodId,
      },
    });

    res.json({ message: "product found", products: getOneProduct });
  } catch (e) {
    console.log("error in Single Product");
    throw e;
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const {
    prodName,
    description,
    imageUrl,
    price,
    quantity,
    color,
    categoryName,
    admin_id,
  } = req.body;

  // checks for category if exists in category table.
  const getCategory = await Categories.findOne({
    where: {
      categoryName: categoryName,
    },
  });

  console.log(categoryName);

  if (getCategory == null) {
    res.json({ message: "no categories found" });
  } else {
    try {
      console.log("created");

      const newProduct = await Products.create({
        cat_id: getCategory.id,
        name: prodName,
        description: description,
        price: price,
        quantity: quantity,
        imageUrl: imageUrl,
        admin_id: admin_id,
        color: color,
      });

      res.json({
        message: "product created successful",
        product: newProduct,
      });
    } catch (e) {
      console.log("error creating product");
      throw e;
    }
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const prodId = req.params.id;
  const {
    prodName,
    description,
    imageUrl,
    price,
    quantity,
    color,
    categoryName,
  } = req.body;

  // getting the category info //
  const category = await Categories.findOne({
    where: {
      categoryName: categoryName,
    },
  });

  if (categoryName == null) {
    res.json({ message: "category not found" });
  } else if (categoryName != null) {
    try {
      const updated = await Products.update(
        {
          cat_id: category!.id,
          name: prodName,
          description: description,
          price: price,
          quantity: quantity,
          imageUrl: imageUrl,
          color: color,
        },
        {
          where: {
            id: prodId,
          },
        }
      );
      res.json({ message: "product updated", product: updated });
    } catch (e) {
      console.log("error in update product");
      throw e;
    }
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const prodId = req.params.id;

  try {
    const deletedProduct = await Products.destroy({
      where: {
        id: prodId,
      },
    });

    res.json({ message: "product deleted", product: deletedProduct });
  } catch (e) {
    console.log("error in delete product");
    throw e;
  }
};
