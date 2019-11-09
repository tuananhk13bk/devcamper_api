import { Request, Response, NextFunction } from "express";
import BootCampServices, {
  TestServices
} from "components/bootcamp/services/index";
import { Container, Service } from "typedi";
import HttpStatusCode from "types/HttpStatusCode";

const getAllBootcamps = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, message: "Show all bootcamps" });
};

const getBootcampById = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, message: "Get bootcamp by id" });
};

const createBootcamp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bootcampServices = Container.get(BootCampServices);
  try {
    const newBootcamp = await bootcampServices.createBootCamp(req.body);
    res.status(HttpStatusCode.Success).json(newBootcamp);
  } catch (err) {
    console.log(err.message);
    next();
  }
};

const updateBootcamp = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, message: "Update bootcamp by id" });
};

const deleteBootcamp = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, message: "Delete bootcamp by id" });
};

export {
  getAllBootcamps,
  getBootcampById,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
};
