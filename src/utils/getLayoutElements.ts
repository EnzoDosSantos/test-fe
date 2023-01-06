import db from '../../db.json';
import type { IInputs, ISelects, IButtons, ICheckbox } from '../../types';
const buttons = db.items.filter((e) => e.type === 'submit') as IButtons[];
const inputs = db.items.filter(
  (e) => e.type !== 'checkbox' && e.type !== 'select' && e.type !== 'submit'
) as IInputs[];
const checkboxs = db.items.filter((e) => e.type === 'checkbox') as ICheckbox[];
const selects = db.items.filter((e) => e.type === 'select') as ISelects[];

export { buttons, inputs, checkboxs, selects };
