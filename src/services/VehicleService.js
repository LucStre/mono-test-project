import { BaseService } from "./BaseService";

export class VehicleService extends BaseService {
  constructor() {
    super("/vehicle");
  }

  async get(urlParams) {
    return this.get(urlParams);
  }

  async create(vehicle) {
    return this.post(vehicle);
  }

  async update(id, vehicle) {
    return this.put(id, vehicle);
  }

  async delete(id) {
    return this.delete(id);
  }
}
