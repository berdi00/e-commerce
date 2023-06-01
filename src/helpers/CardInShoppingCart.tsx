import React, { FC } from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { DeleteOutlined } from "@ant-design/icons";
import CustomAlertDialog from "@/components/CustomAlertDialog";
type TProps = {
  id: number;
  image: string;
  title: string;
  desc: string;
  price: number;
};
const CardInShoppingCart = ({ id, image, title, desc, price }: TProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomAlertDialog isOpen={isOpen} onClose={onClose} id={id} />
      <Flex key={id}>
        <Box width="30%" height={["100px", null, "300px"]} marginRight={3}>
          <Image
            src={
              image
                ? `${process.env.NEXT_PUBLIC_DB_URL}${image}`
                : "/vercel.svg"
            }
            width={250}
            height={300}
            alt="pic"
          />
        </Box>
        <Box width="100%">
          <Stack
            direction={["column", "column"]}
            spacing={["12px", null, "34px"]}
          >
            <Flex justify="space-between" align="center">
              <Text fontSize="lg" fontWeight={700}>
                {title}
              </Text>
              <IconButton
                onClick={() => removeFromCart(id)}
                size="lg"
                variant="ghost"
                colorScheme="teal"
                aria-label="Search database"
                icon={<DeleteOutlined />}
              />
            </Flex>
            <Text fontSize="md">{desc}</Text>
            <Flex justify="space-between">
              <Stack direction="row" spacing={10}>
                <Button
                  _hover={{ background: "#1f6d80" }}
                  color="white"
                  background="teal"
                  width="33px"
                  size={["sm", null, "md"]}
                  onClick={() => {
                    if (quantity === 1) {
                      onOpen();
                    } else {
                      decreaseCartQuantity(id);
                    }
                  }}
                >
                  {quantity === 1 ? <DeleteOutlined /> : "-"}
                </Button>
                <Text
                  textAlign="center"
                  color="teal"
                  fontSize={["md", null, "lg"]}
                >
                  {quantity} sany
                </Text>
                <Button
                  _hover={{ background: "#1f6d80" }}
                  color="white"
                  background="teal"
                  width="33px"
                  size={["sm", null, "md"]}
                  onClick={() => {
                    increaseCartQuantity(id);
                  }}
                >
                  +
                </Button>
              </Stack>
              <Text fontSize={["sm", null, "xl"]} color="teal">
                {price}m
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default CardInShoppingCart;
