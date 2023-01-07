import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react';

const UserCards: React.FC<{ name: string; birth: string; email: string; origen: string }> = ({
  name,
  birth,
  email,
  origen
}) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Pais de origen
            </Heading>
            <Text pt="2" fontSize="sm">
              {origen}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Fecha de nacimiento
            </Heading>
            <Text pt="2" fontSize="sm">
              {birth}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserCards;
