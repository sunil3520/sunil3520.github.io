import React from 'react'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Projects', 'About', 'Team'];


const { isOpen, onOpen, onClose } = useDisclosure;


const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

const Navbar = () => {
    return (
        <div>
            <>
                <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                    <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={50} alignItems={'center'}>
                            <Avatar
                                size={'xl'}
                                src={
                                    'https://i.pinimg.com/736x/15/89/7c/15897c8936a937a28ad97cb8ff7841e7.jpg'
                                }
                            />
                            <HStack
                                as={'nav'}
                                spacing={50}
                                display={{ base: 'none', md: 'flex' }}>
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </HStack>
                        </HStack>
                        <Flex alignItems={'center'}>
                            <Button
                                variant={'solid'}
                                colorScheme={'teal'}
                                size={'sm'}
                                mr={4}
                                leftIcon={<AddIcon />}>
                                Action
                            </Button>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>

                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Link 1</MenuItem>
                                    <MenuItem>Link 2</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Link 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>

                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }}>
                            <Stack as={'nav'} spacing={4}>
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </Stack>
                        </Box>
                    ) : null}
                </Box>

                <Box p={4}>Main Content Here</Box>
            </>
        </div>
    )
}

export default Navbar