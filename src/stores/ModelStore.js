import { makeObservable, runInAction } from "mobx";
import { ModelService } from "../services/ModelService";

class ModelStore {
  modelService = new ModelService();
  modelData = [];
  status = "initial";
  error = undefined;

  constructor() {
    makeObservable(this);
  }

  fetchModels = async (paramsData) => {
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
      const data = await this.modelService.get(urlParams);
      runInAction(() => {
        this.modelData = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  createModel = async (model) => {
    try {
      const response = await this.modelService.create(model);
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

  updateModel = async (id, model) => {
    try {
      const response = await this.modelService.update(id, model);
      if (response.status === 200) {
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

  deleteModel = async (id) => {
    try {
      const response = await this.modelService.delete(id);
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

const modelStore = new ModelStore();
export default modelStore;
