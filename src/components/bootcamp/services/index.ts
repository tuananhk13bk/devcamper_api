import BootcampDAO from "../DAO/index";
import { Service } from "typedi";

@Service()
export default class BootCampServices {
  constructor(private bootcampDAO: BootcampDAO) {}

  public async createBootCamp(record: { [key: string]: any }) {
    try {
      const newRecord = await this.bootcampDAO.create(record);
      return newRecord;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

// @Service()
export class TestServices {
  constructor() {}
  log() {
    console.log("ahihi");
  }
}
