"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import CustomLink from "@/helpers/CustomLink";
import {
  GiftOutlined,
  HeartOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Tab, TabList, Tabs, TabIndicator, Hide } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <Hide above="md">
      <div className="fixed bottom-0 w-full h-[50px] bg-white">
        <Tabs colorScheme="teal" align="center">
          <TabList>
            <Tab>
              <CustomLink icon={<HomeOutlined />} text="Bash" link="" />
            </Tab>
            <Tab>
              <CustomLink icon={<GiftOutlined />} text="Brendlar" link="" />
            </Tab>
            <Tab className="relative">
              <CustomLink
                icon={<ShoppingCartOutlined />}
                text="Sebet"
                link="/shopping-cart"
              />
              {cartQuantity === 0 ? null : (
                <span className="absolute top-0 right-0 w-5 h-5 rounded-[50%] text-white bg-[#1f8080] flex justify-center items-center">
                  {cartQuantity}
                </span>
              )}
            </Tab>
            <Tab>
              <CustomLink icon={<HeartOutlined />} text="Halanlarym" link="" />
            </Tab>
            <Tab>
              <CustomLink icon={<UserOutlined />} text="Profil" link="" />
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
        </Tabs>
      </div>
    </Hide>
  );
};

export default Footer;
