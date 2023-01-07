import FormSubmissionScreen from './screens/FormSubmissionScreen';
import FormResultScreen from './screens/FormResultsScreen';
import Navbar from './components/navbar/Nabvar';
import { useState } from 'react';

const App = () => {
  const [changePage, setChangePage] = useState(true);
  const handleChangePage = () => setChangePage(!changePage);
  return (
    <>
      <Navbar onChangePage={handleChangePage} />
      {changePage ? <FormSubmissionScreen /> : <FormResultScreen />}
    </>
  );
};

export default App;
