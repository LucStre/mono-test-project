import { BaseService } from "./BaseService";

export class ModelService extends BaseService {
  constructor() {
    super("/model");
  }

  async get(urlParams) {
    return this.get(urlParams);
  }

  async create(model) {
    return this.post(model);
  }

  async update(id, model) {
    return this.put(id, model);
  }

  async delete(id) {
    return this.put(id);
  }
}
