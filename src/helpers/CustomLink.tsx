import Link from "next/link";
import { Text } from "@chakra-ui/react";
import React from "react";

type TProps = {
  text: string;
  link: string;
  icon: React.ReactNode;
};

const CustomLink = ({ text, link, icon }: TProps) => {
  return (
    <Link className="relative" href={link}>
      {icon}
      <Text fontSize="xs">{text}</Text>
    </Link>
  );
};

export default CustomLink;
