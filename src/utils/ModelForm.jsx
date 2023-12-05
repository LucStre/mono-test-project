import modelStore from "@/stores/ModelStore";
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
    placeholder: "Enter the model id",
    rules: "required|integer",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "Name",
    label: "Name",
    placeholder: "Enter the model name",
    rules: "required|string|min:2",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "Abrv",
    label: "Abrv",
    placeholder: "Enter the model abbreviation",
    rules: "required|string",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "MakeId",
    label: "Vehicle",
    placeholder: "Select vehicle of the model",
    rules: "required|integer",
    options: {
      validateOnChange: true,
    },
  },
];

const createForm = () => {
  const hooks = {
    onInit(form) {
      autorun(() => form.clearing);
      autorun(() => form.validating);
      autorun(() => form.submitting);
    },
    async onSuccess(form) {
      await modelStore.createModel(form.values()).then(() => {
        if (modelStore.status == "error") {
          form.invalidate(modelStore.error);
        } else {
          window.location.href = "/models/" + form.values().MakeId;
        }
      });
    },
  };

  return new MobxReactForm({ fields }, { plugins, hooks });
};

export { createForm };
