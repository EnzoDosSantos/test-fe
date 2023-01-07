import { Flex, Grid, GridItem, ScaleFade } from '@chakra-ui/react';
import UserCards from '../cards/UserCards';
import type { IFormData } from '../../../types';

type State = {
  value: IFormData;
  id: string;
}[];

const UserSubmissionTable: React.FC<{ data: State }> = ({ data }) => {
  if (data.length > 0) {
    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((e) => {
          return (
            <ScaleFade key={e.id} in initialScale={0.2}>
              <GridItem transition="all .25s ease" _hover={{ transform: 'scale(1.1)' }} p={3}>
                <UserCards
                  name={e.value.full_name}
                  birth={e.value.birth_date}
                  email={e.value.email}
                  origen={e.value.country_of_origin}
                />
              </GridItem>
            </ScaleFade>
          );
        })}
      </Grid>
    );
  }
  return (
    <Flex fontSize={'xl'} align={'center'} justify={'center'}>
      No tenemos registros en la base de datos.
    </Flex>
  );
};

export default UserSubmissionTable;
