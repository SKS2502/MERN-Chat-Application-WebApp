import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { ViewIcon } from '@chakra-ui/icons';
import { IconButton, Button} from '@chakra-ui/button';
import { Image, Text} from '@chakra-ui/react';
import { Modal,ModalBody, ModalCloseButton, ModalContent,ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';


const ProfileModal = ({ user, children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return <>
        {
            children ? (<span onClick={onOpen}>{children}</span>) : (
                <IconButton d={{ base: "flex" }}
                    icon={<ViewIcon />}
                    onClick={onOpen}/>
            )
        }

        <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
                <ModalHeader
                    fontSize="40px"
                    fontFamily="Work sans"
                    d="flex"
                    justifyContent="center"
                >{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
                    d="flex"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Image
                        borderRadius="full"
                        boxSize="150px"
                        src={user.pic}
                        alt={user.name}
                    />
                <Text
                        fontSize={{ base: "28px", md: "30px" }}
                        fontFamily="Work sans"
                    />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
};

export default ProfileModal;
