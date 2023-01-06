import { Box, Button, Checkbox, Flex, Input, Select } from '@chakra-ui/react';
import type { IInputs, ISelects, IButtons, ICheckbox } from '../../types';

const Form: React.FC<{
  selects: ISelects[];
  inputs: IInputs[];
  buttons: IButtons[];
  checkboxs: ICheckbox[];
}> = ({ inputs, selects, buttons, checkboxs }) => {
  return (
    <Flex>
        
    </Flex>
  );
};

export default Form;
