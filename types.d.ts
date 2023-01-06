export interface IFormData {
  full_name: string;
  email: string;
  birth_date: string;
  country_of_origin: string;
  terms_and_conditions: boolean;
}

export interface IInputs {
  label: string
  name: string
  required: boolean
  type: string
}

export interface ICheckbox extends IInputs{}

export type IButtons = Pick<IInputs, "label">

export interface ISelects extends IInputs {
  options: {
      label: string
      value: string
  }[]
}

