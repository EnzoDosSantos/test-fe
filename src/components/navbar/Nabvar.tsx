import { Box, Flex, Stack, Text } from '@chakra-ui/react';

const Navbar: React.FC<{ onChangePage: () => void }> = ({ onChangePage }) => {
  return (
    <NavBarContainer>
      <MenuLinks onChangePage={onChangePage} />
    </NavBarContainer>
  );
};

const MenuLinks: React.FC<{ onChangePage: () => void }> = ({ onChangePage }) => {
  return (
    <Box>
      <Stack spacing={8} align="center" direction={'row'} pt={4}>
        <Text
          onClick={() => onChangePage()}
          _hover={{ transform: 'scale(1.2)', color: 'white', cursor: 'pointer' }}
        >
          Cambiar de pagina{' '}
        </Text>
      </Stack>
    </Box>
  );
};

const NavBarContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={'gray.200'}
      color={'black'}
      position={'fixed'}
    >
      {children}
    </Flex>
  );
};

export default Navbar;
