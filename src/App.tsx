import Form from './components/Form';
import { selects, buttons, checkboxs, inputs } from './utils/getLayoutElements';

const App = () => {
  return <Form selects={selects} buttons={buttons} checkboxs={checkboxs} inputs={inputs} />;
};

export default App;
