"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import CardContainer from "@/helpers/CardContainer";
import { TCategoryProduct } from "@/types/shop";
import { Box, Button, Card, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Prooduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<TCategoryProduct>();
  // const [quantity, setQuantity] = useState<number>();
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    addValues,
  } = useShoppingCart();

  const quantity = getItemQuantity(parseInt(slug as string, 10));
  // setQuantity(quantity);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DB_URL}/product/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data, "data");
      });
  }, [slug]);
  return (
    <div>
      {product && (
        <Stack direction={["column", "row"]} spacing="24px">
          <Card w={["full", "600px"]} h="auto" padding={2}>
            <Image
              src={
                product.image
                  ? `${process.env.NEXT_PUBLIC_DB_URL}${product?.image}`
                  : "/vercel.svg"
              }
              alt="pic"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
            />
          </Card>
          <Box padding={4}>
            <Stack direction={["column"]} spacing="24px">
              <Text
                fontSize={["xl", null, "4xl"]}
                textAlign="center"
                fontWeight={600}
                color="black"
              >
                {product.title}
              </Text>
              <Text fontSize={["sm", null, "md"]} textAlign="center">
                {product.description}
              </Text>
              <Stack direction={["row", "column"]} spacing={24}>
                <Text
                  fontWeight={600}
                  textAlign="center"
                  color="teal"
                  fontSize={["md", null, "3xl"]}
                >
                  {product.price}m
                </Text>
                {quantity === 0 ? (
                  <Button
                    _hover={{ background: "#1f6d80" }}
                    onClick={() => {
                      addValues(
                        product.id,
                        product.image,
                        product.title,
                        product.description,
                        product.price
                      );
                      increaseCartQuantity(parseInt(slug as string, 10));
                    }}
                    color="white"
                    background="teal"
                    width="100%"
                    size={["sm", null, "md"]}
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Stack direction="row" spacing={12}>
                    <Button
                      _hover={{ background: "#1f6d80" }}
                      padding={["0px", "12px"]}
                      color="white"
                      background="teal"
                      width={["23px", "63px"]}
                      size={["sm", null, "md"]}
                      onClick={() =>
                        decreaseCartQuantity(parseInt(slug as string, 10))
                      }
                    >
                      -
                    </Button>
                    <Text
                      textAlign="center"
                      color="teal"
                      fontSize={["md", null, "lg"]}
                    >
                      {quantity} in cart
                    </Text>
                    <Button
                      _hover={{ background: "#1f6d80" }}
                      color="white"
                      background="teal"
                      width={["23px", "63px"]}
                      size={["sm", null, "md"]}
                      onClick={() =>
                        increaseCartQuantity(parseInt(slug as string, 10))
                      }
                    >
                      +
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}
      {product && (
        <CardContainer
          products={product?.others}
          title="Meňzeş harytlar"
          key={product?.id}
          id={product.id}
        />
      )}
    </div>
  );
};

export default Prooduct;
