import { makeObservable, runInAction } from "mobx";
import { VehicleService } from "../services/VehicleService";

class VehicleStore {
  vehicleService = new VehicleService();
  vehicleData = [];
  status = "initial";
  error = undefined;

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
      const data = await this.vehicleService.get(urlParams);
      runInAction(() => {
        this.vehicleData = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  createVehicle = async (vehicle) => {
    try {
      const response = await this.vehicleService.create(vehicle);
      if (response.status === 201) {
        runInAction(() => {
          this.status = "success";
        });
      } else {
        return response.text().then((text) => {
          this.status = "error";
          this.error = text;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  updateVehicle = async (vehicle) => {
    try {
      const response = await this.vehicleService.put(vehicle);
      if (response.status === 200) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  deleteVehicle = async (id) => {
    try {
      const response = await this.vehicleService.delete(id);
      if (response.status === 204) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
}

const vehicleStore = new VehicleStore();
export default vehicleStore;
