"use client";
import {
  AppstoreOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Hide,
  IconButton,
  Input,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DrawerMenu from "./DrawerMenu";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartQuantity } = useShoppingCart();
  const router = useRouter();
  return (
    <>
      <div className="h-[50px] md:my-3">
        <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center px-2 mx-auto space-x-3 bg-white max-w-screen-2xl">
          <Button
            onClick={onOpen}
            size="md"
            className="w-[230px]"
            leftIcon={<AppstoreOutlined />}
            colorScheme="teal"
            variant="ghost"
          >
            Kategoriyalar
          </Button>
          <Divider orientation="vertical" height="23px" />
          <Hide below="md">
            <Button
              onClick={() => router.push("/")}
              className="w-[180px]"
              size="md"
              leftIcon={<HomeOutlined />}
              colorScheme="teal"
              variant="ghost"
            >
              Home
            </Button>
          </Hide>
          <Divider orientation="vertical" height="23px" />
          <Button
            size="md"
            className="w-[180px]"
            leftIcon={<EnvironmentOutlined />}
            colorScheme="teal"
            variant="ghost"
          >
            Ashgabat
          </Button>
          <Divider orientation="vertical" height="23px" />
          <Hide below="md">
            <Input className="mx-2" placeholder="search" size="md" />
          </Hide>
          {/* heart icon */}
          <IconButton
            onClick={() => setOpen((prev) => !prev)}
            size="lg"
            variant="ghost"
            colorScheme="teal"
            aria-label="Search database"
            icon={<SearchOutlined />}
          />
          <Hide below="md">
            <IconButton
              size="lg"
              variant="ghost"
              colorScheme="teal"
              aria-label="Search database"
              icon={<HeartOutlined />}
            />

            <div className="relative">
              <IconButton
                onClick={() => router.push("/shopping-cart")}
                size="lg"
                variant="ghost"
                colorScheme="teal"
                aria-label="Search database"
                icon={<ShoppingCartOutlined />}
              />
              {cartQuantity !== 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 rounded-[50%] text-white bg-[#1f8080] flex justify-center items-center">
                  {cartQuantity}
                </span>
              )}
            </div>
          </Hide>
        </div>

        <Show below="md">
          {open && (
            <div className="relative flex items-center justify-center mt-12">
              <Input className="w-full mx-2" placeholder="search" size="sm" />
            </div>
          )}
        </Show>
      </div>
      <DrawerMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
