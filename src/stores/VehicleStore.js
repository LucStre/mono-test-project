import { makeObservable, runInAction } from "mobx";
import { VehicleService } from "../services/VehicleService";

class VehicleStore {
  vehicleService = new VehicleService();
  vehicleData = [];

  constructor() {
    makeObservable(this);
  }

  fetchVehicles = async (paramsData) => {
    try {
      var params = {
        sortBy: paramsData.sortBy,
        orderBy: paramsData.orderBy,
        limit: paramsData.limit,
        skip: paramsData.skip,
        Id: paramsData.Id,
        Name: paramsData.Name,
        Abrv: paramsData.Abrv,
        MakeId: paramsData.MakeId,
      };
      const filteredParams = Object.fromEntries(
        Object.entries(params).filter(
          ([key, value]) => value !== undefined && value !== ""
        )
      );
      const urlParams = new URLSearchParams(Object.entries(filteredParams));
      const data = await this.vehicleService.getVehicles(urlParams);
      runInAction(() => {
        this.vehicleData = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
}

const vehicleStore = new VehicleStore();
export default vehicleStore;
