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
}
