import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text
} from '@chakra-ui/react';
import type { IInputs, ISelects, IButtons, ICheckbox } from '../../types';

const Form: React.FC<{
  selects: ISelects[];
  inputs: IInputs[];
  buttons: IButtons[];
  checkboxs: ICheckbox[];
}> = ({ inputs, selects, buttons, checkboxs }) => {
  return (
    <Flex
      rounded={'2xl'}
      boxShadow={'xl'}
      flexDirection={'column'}
      p={10}
      w={'100%'}
      h={'70%'}
    >
      <Text fontSize={'xl'} fontWeight={'semibold'}>
        Por favor complete el siguiente formulario
      </Text>
      <Divider m={5} />
      <FormControl p={3} isRequired>
        {inputs.map((e, i) => {
          return (
            <Box pt={5} key={i}>
              <FormLabel>{e.label}</FormLabel>
              <Input required type={e.type} />
            </Box>
          );
        })}

        {selects.map((e, i) => {
          return (
            <Box pt={5} key={i}>
              <FormLabel>{e.label}</FormLabel>
              <Select>
                {e.options.map((e, i) => {
                  return <option key={i} value={e.value}>{e.label}</option>;
                })}
              </Select>
            </Box>
          );
        })}

        {checkboxs.map((e, i) => {
          return (
            <Flex pt={5} p={3} key={i} m={'auto'} gap={5} justifyContent={'center'} align={'center'}>
              <Checkbox />
              <FormLabel>{e.label}</FormLabel>
            </Flex>
          );
        })}

        {buttons.map((e, i) => {
          return (
            <Flex pt={5} justifyContent={'center'} align={'center'} key={i}>
              <Button>{e.label}</Button>
            </Flex>
          );
        })}
      </FormControl>
    </Flex>
  );
};

export default Form;
