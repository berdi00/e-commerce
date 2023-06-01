"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
  id: number;
};

const CustomAlertDialog = ({ isOpen, onClose, id }: TProps) => {
  const cancelRef = React.useRef();
  const { removeFromCart } = useShoppingCart();
  return (
    <div>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef as any}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader />
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Siz hakykatdanam harydy sebetden aýyrmak isleýäňizmi ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef as any} onClick={onClose}>
              Ýok
            </Button>
            <Button colorScheme="red" ml={3} onClick={() => removeFromCart(id)}>
              Howa
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CustomAlertDialog;
