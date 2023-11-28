import { BaseService } from "./BaseService";

export class VehicleService extends BaseService {
  constructor() {
    super("/vehicle");
  }

  async getVehicles(urlParams) {
    return this.get(urlParams);
  }
}
