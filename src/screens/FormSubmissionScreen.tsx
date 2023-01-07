import { useState } from 'react';
import Form from '../components/forms/Form';
import { Container } from '@chakra-ui/react';
import { saveFormData } from '../utils/firebase';
import type { IFormData } from '../../types';

const FormSubmissionScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(false);
  const [isSend, setIsSend] = useState(false);
  const initialValues: IFormData = {
    full_name: '',
    email: '',
    birth_date: '',
    country_of_origin: 'argentina',
    terms_and_conditions: false
  };

  const handleSubmit = async (values: IFormData): Promise<void> => {
    try {
      setIsLoading(true);
      const check = await saveFormData(
        values.full_name,
        values.email,
        values.birth_date,
        values.country_of_origin,
        values.terms_and_conditions
      );
      if (check) {
        setIsSend(true);
        setTimeout(() => {
          setIsSend(false);
        }, 2000);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container
      display={'flex'}
      flexDirection={'column'}
      overflow={'hidden'}
      w={'100vw'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Form
        isLoading={isLoading}
        error={error}
        isSend={isSend}
        values={initialValues}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default FormSubmissionScreen;
