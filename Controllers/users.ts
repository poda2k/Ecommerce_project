import { db } from "../Models/databaseConnection";
import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  db.query(
    "SELECT * FROM users ORDER BY id ASC",
    (error: any, results: any) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

export const createUser = (req: Request, res: Response) => {
  const { user_name, email, password, address, isadmin, img, city, country } =
    req.body;
  console.log(user_name);
  console.log(email, password, address, isadmin, img, city, country);

  try {
    const user = db.query(
      "INSERT INTO users (user_name,email,password,address,isadmin,img,city,country) VALUES ($1, $2,$3,$4,$5,$6,$7,$8)",
      [user_name, email, password, address, isadmin, img, city, country]
    );

    res.status(200).json({ users: user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
