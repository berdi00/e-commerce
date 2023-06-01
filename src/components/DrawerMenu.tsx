"use client";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Hide,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";

type TProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type TSub = {
  id: number;
  title: string;
};

type TMenu = {
  id: number;
  title: string;
  sub_title: TSub[];
};

const DrawerMenu = ({ isOpen, onClose }: TProps) => {
  const [data, setData] = useState<TMenu[]>([]);
  const btnRef = useRef();
  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/home/menu`);
      if (res.ok) {
        return res.json();
      }
    };
    const data = fetchMenu();
    data.then((data) => setData(data));
  }, []);

  console.log(process.env.DB_URL, "node env");
  if (data === undefined || null) {
    return <h1>No data</h1>;
  }
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef as any}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <ul className="relative md:w-[400px] w-[350px] space-y-1 my-10">
              {data.map((menuItem) => (
                <div key={menuItem.id} className="md:px-4 group/item">
                  <li className="flex items-center justify-between px-1 py-3 bg-white border rounded-md md:px-3 border-slate-200 group-hover/item:bg-slate-300">
                    <Link
                      className="text-sm md:text-md"
                      href={`/category/${menuItem.id}`}
                    >
                      {menuItem.title}
                    </Link>
                    <RightOutlined />
                  </li>
                  <Hide below="md">
                    <ul className="absolute top-0 flex-col hidden w-full h-full space-y-3 bg-white md:px-5 left-full group-hover/item:flex">
                      {menuItem.sub_title.map((menuChild) => (
                        <li
                          key={menuChild.id}
                          className="border rounded-md md:text-md md:px-3 border-slate-200 hover:bg-slate-300"
                        >
                          <Link href="" className="text-sm text-black">
                            {menuChild.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Hide>
                </div>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
