import { Alert, AlertDescription, AlertIcon, AlertTitle, ScaleFade } from '@chakra-ui/react';

const AnimationAlert: React.FC<{ success: boolean; error: unknown }> = ({ success, error }) => {
  return (
    <ScaleFade initialScale={0.2} in>
      <Alert
        rounded={'xl'}
        status={success ? 'success' : 'error'}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="20px" mr={0} />

        <AlertTitle mt={4} mb={1} fontSize="lg">
          {success ? '¡Hemos recibido tu formulario!' : 'Ha ocurrido un error.'}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {success ? 'Gracias por rellenar el formulario.' : `Ha ocurrido el error: ${error}.`}
        </AlertDescription>
      </Alert>
    </ScaleFade>
  );
};

export default AnimationAlert;
