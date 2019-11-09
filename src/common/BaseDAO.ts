import { Model, Document } from "mongoose";

class BaseDAO {
  constructor(
    private model: Model<Document, {}>,
    private useCache: boolean = false
  ) {}

  async create(record: { [key: string]: any }): Promise<Document> {
    try {
      const newRecord = await this.model.create(record);
      return newRecord;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findById(id: any | string | number) {
    if (!this.useCache) {
    }
  }

  async findOne() {}

  async find() {}

  async count() {}

  async checkExists() {}

  cache() {
    this.useCache = true;
  }
}

export default BaseDAO;
