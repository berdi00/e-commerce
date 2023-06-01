"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { DeleteOutlined } from "@ant-design/icons";

import {
  Box,
  Flex,
  Text,
  Button,
  Card,
  CardBody,
  Stack,
  StackDivider,
  CardFooter,
} from "@chakra-ui/react";
import React from "react";

import { formatCurrency } from "@/utilities/formatCurrency";
import CardInShoppingCart from "@/helpers/CardInShoppingCart";

const ShoppingCart = () => {
  const { cartQuantity, cartItems } = useShoppingCart();

  return (
    <Box margin={2} background="azure">
      <Flex justify="space-between" align="center">
        <Text>Sebedim({cartQuantity})</Text>
        <Button
          size="md"
          leftIcon={<DeleteOutlined />}
          color="white"
          background="teal"
          width="160px"
        >
          Sebedi boshat
        </Button>
      </Flex>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {cartItems?.map((item) => (
              <CardInShoppingCart
                key={item.id}
                id={item.id}
                image={item.image as string}
                price={item.price as number}
                title={item.title as string}
                desc={item.desc as string}
              />
            ))}
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            className="w-full"
          >
            <Text>
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = cartItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </Text>
            <Button>Purchase</Button>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ShoppingCart;
