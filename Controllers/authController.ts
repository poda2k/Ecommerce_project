import Users from "../Models/auth";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req: Request, res: Response) => {
  try {
    const user: any = await Users.findOne({ where: { email: req.body.email } });
    console.log(user);

    if (!user) {
      res.status(404).json({ message: "user is not found" });
    }
    const checkPass = bcrypt.compare(req.body.password, user.password);
    if (!checkPass) {
      res.status(400).json({ msg: "password is wrong" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        user_name: user.user_name,
        email: user.email,
        isAdmin : user.is_admin
      },
      "mysecrettoken",
      { expiresIn: "1d" }
    );
    const { password, isAdmin, ...otherdetails } = user.dataValues;
    res.status(200).json({ user: otherdetails, token: token });
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};
export const register = async (req: Request, res: Response) => {
  try {
    const exited = await Users.findOne({ where: { email: req.body.email } });

    if (exited) {
      return res.status(400).json({ message: "this user is registerd" });
    }

    const hashed_Password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create({
      ...req.body,
      password: hashed_Password,
    });

    res.status(200).json({
      message: "User has been created successfully",
      user: record,
    });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
