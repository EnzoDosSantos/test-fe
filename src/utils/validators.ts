import * as Yup from 'yup';

export const options = [
  'argentina',
  'brasil',
  'chile',
  'colombia',
  'mexico',
  'peru',
  'uruguay',
  'venezuela'
];

export const schema = Yup.object().shape({
  full_name: Yup.string().required('Debes ingresar tu nombre completo.'),
  email: Yup.string().email('Estructura de email invalida.').required('Debes ingresar tu email.'),
  birth_date: Yup.string().required('Debes ingresar tu fecha de nacimiento.'),
  country_of_origin: Yup.mixed().required('Debes seleccionar un pais de la lista.').oneOf(options),
  terms_and_conditions: Yup.boolean().oneOf(
    [true],
    'Debes aceptar los terminos y condiciones para continuar.'
  )
});
