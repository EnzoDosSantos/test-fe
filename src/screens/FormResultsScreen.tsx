import { useEffect, useState } from 'react';
import ModalCards from '../components/modal/ModalCards';
import UserSubmissionTable from '../components/table/UsersSubmissions';
import { getCollectionElements } from '../utils/firebase';
import type { IFormData } from '../../types';

type State = {
  value: IFormData;
  id: string;
}[];

const FormResultScreen = () => {
  const [submitedForms, setSubmitedForms] = useState<State | []>([]);
  useEffect(() => {
    (async () => {
      const forms = await getCollectionElements<IFormData>();
      setSubmitedForms(forms);
    })();
  }, []);

  return (
    <ModalCards>
      <UserSubmissionTable data={submitedForms} />
    </ModalCards>
  );
};

export default FormResultScreen;
