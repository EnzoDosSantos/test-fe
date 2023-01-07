import {
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Spinner,
  Text,
  VStack
} from '@chakra-ui/react';
import AnimationAlert from '../alerts/AnimationAlert';
import { Field, Formik } from 'formik';
import { schema, options } from '../../utils/validators';
import type { IFormData } from '../../../types';

const Form: React.FC<{
  values: IFormData;
  isLoading: boolean;
  error: unknown | false;
  isSend: boolean;
  handleSubmit: (values: IFormData) => Promise<void>;
}> = ({ isLoading, error, isSend, values, handleSubmit }) => {
  return (
    <Formik validationSchema={schema} initialValues={values} onSubmit={handleSubmit}>
      {({ handleSubmit, errors, touched, values }) => (
        <form onSubmit={handleSubmit}>
          {isSend && <AnimationAlert error={error} success={isSend} />}
          <VStack
            rounded={'2xl'}
            boxShadow={'xl'}
            flexDirection={'column'}
            p={10}
            w={'100%'}
            h={'100%'}
            spacing={3}
          >
            <Text fontSize={'xl'} fontWeight={'semibold'}>
              Por favor complete el siguiente formulario
            </Text>
            <Divider m={5} />
            <FormControl isRequired isInvalid={!!errors.full_name && touched.full_name}>
              <FormLabel htmlFor="full_name">Nombre completo</FormLabel>
              <Field as={Input} name="full_name" id="full_name" type="text" variant="filled" />
              <FormErrorMessage>{errors.full_name}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field as={Input} id="email" name="email" type="email" variant="filled" />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.birth_date && touched.birth_date}>
              <FormLabel htmlFor="birth_date">Fecha de cumpleaños</FormLabel>
              <Field as={Input} id="birth_date" name="birth_date" type="date" variant="filled" />
              <FormErrorMessage>{errors.birth_date}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!errors.country_of_origin && touched.country_of_origin}
            >
              <FormLabel htmlFor="country_of_origin">Pais de origen</FormLabel>
              <Field
                value={values.country_of_origin}
                as={Select}
                id="country_of_origin"
                variant="filled"
              >
                {options.map((e) => {
                  return (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  );
                })}
              </Field>
              <FormErrorMessage>{errors.country_of_origin}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!errors.terms_and_conditions && touched.terms_and_conditions}
            >
              <Flex flexDirection={'row'} justifyContent={'space-around'}>
                <Field
                  as={Checkbox}
                  id="terms_and_conditions"
                  name="terms_and_conditions"
                  type="checkbox"
                />
                <FormLabel htmlFor="terms_and_conditions">
                  ¿Aceptas los terminos y condiciones?
                </FormLabel>
              </Flex>
              <FormErrorMessage>{errors.terms_and_conditions}</FormErrorMessage>
            </FormControl>

            {isLoading ? (
              <Spinner />
            ) : (
              <Button type="submit" disabled={Object.keys(errors).length > 0} width="full">
                Submit
              </Button>
            )}
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default Form;
