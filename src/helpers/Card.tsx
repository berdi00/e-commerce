"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type TProps = {
  key: number;
  id: number;
  name: string;
  desc: string;
  imgUrl: string;
  price: number;
};

const Card = ({ id, name, desc, imgUrl, price }: TProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    addValues,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const router = useRouter();
  return (
    <Box
      boxShadow="md"
      display="flex"
      background="inherit"
      padding={4}
      flexDirection="column"
      justifyContent="space-between"
      rowGap={3}
      height={["380px", null, "480px"]}
    >
      <div onClick={() => router.push(`/product/${id}`)}>
        <Image
          src={
            imgUrl
              ? `${process.env.NEXT_PUBLIC_DB_URL}${imgUrl}`
              : "/vercel.svg"
          }
          width={250}
          height={300}
          alt={name}
        />
      </div>
      <div className="space-y-3">
        <Text
          fontSize={["md", null, "xl"]}
          textAlign="center"
          fontWeight={600}
          color="teal"
        >
          {name}
        </Text>
        <Text fontSize={["xs", null, "md"]} textAlign="center">
          {desc}
        </Text>
        <Text
          fontWeight={600}
          textAlign="center"
          color="teal"
          fontSize={["md", null, "lg"]}
        >
          {price}m
        </Text>
      </div>
      {quantity === 0 ? (
        <Button
          _hover={{ background: "#1f6d80" }}
          onClick={() => {
            addValues(id, imgUrl, name, desc, price);
            increaseCartQuantity(id);
          }}
          color="white"
          background="teal"
          width="100%"
          size={["sm", null, "md"]}
        >
          Add to Cart
        </Button>
      ) : (
        <Flex justify="space-between" align="center">
          <Button
            _hover={{ background: "#1f6d80" }}
            color="white"
            background="teal"
            width={["23px", "63px"]}
            size={["sm", null, "md"]}
            onClick={() => decreaseCartQuantity(id)}
          >
            -
          </Button>
          <Text textAlign="center" color="teal" fontSize={["md", null, "lg"]}>
            {quantity} in cart
          </Text>
          <Button
            _hover={{ background: "#1f6d80" }}
            color="white"
            background="teal"
            width={["23px", "63px"]}
            size={["sm", null, "md"]}
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Card;
