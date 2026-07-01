import { createFormHook } from "@tanstack/react-form";
import CheckboxGroup from "./components/form-checkbox-group";
import RadioGroup from "./components/form-radio-group";
import Select from "./components/form-select";
import SubmitButton from "./components/form-submit-button";
import Suggestion from "./components/form-suggestion";
import Textfield from "./components/form-textfield";
import { fieldContext, formContext } from "./form-context";

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    CheckboxGroup,
    RadioGroup,
    Select,
    Suggestion,
    Textfield,
  },
  formComponents: {
    SubmitButton,
  },
});
