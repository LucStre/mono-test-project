import vehicleStore from "@/stores/VehicleStore";
import { autorun } from "mobx";
import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

const plugins = {
  dvr: dvr(validatorjs),
};

export const fields = [
  {
    name: "Id",
    label: "Id",
    placeholder: "Enter id of the vehicle",
    rules: "required|integer",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "Name",
    label: "Name",
    placeholder: "Enter name of the vehicle",
    rules: "required|string|min:2",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "Abrv",
    label: "Abrv",
    placeholder: "Enter abbreviation of the vehicle",
    rules: "required|string",
    options: {
      validateOnChange: true,
    },
  },
];

const hooks = {
  onInit(form) {
    autorun(() => form.clearing);
    autorun(() => form.validating);
    autorun(() => form.submitting);
  },
  async onSuccess(form) {
    await vehicleStore.createVehicle(form.values()).then(() => {
      if (vehicleStore.status == "error") {
        form.$("Id").invalidate(vehicleStore.error);
      } else {
        window.location.href = "/";
      }
    });
  },
};

const vehicleForm = new MobxReactForm({ fields }, { plugins, hooks });
export default vehicleForm;
