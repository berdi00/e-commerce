"use client";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Flex, Heading, IconButton, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import { TProductAgain } from "@/types/shop";
import { useRouter } from "next/navigation";

type TProps = {
  products: TProductAgain[];
  id: number;
  title: string;
};

const CardContainer = ({ products, title, id }: TProps) => {
  const router = useRouter();
  return (
    <section style={{ marginTop: "22px", padding: "0px 11px" }}>
      <Link
        href={`/category/${id}`}
        className="flex items-center justify-between group"
      >
        <Heading fontSize={["lg", null, "2xl"]}>{title}</Heading>
        <IconButton
          onClick={() => router.push(`/category/${id}`)}
          size="lg"
          aria-label="Search database"
          variant="ghost"
          colorScheme="black"
          icon={<ArrowRightOutlined />}
        />
      </Link>
      <SimpleGrid
        style={{ marginTop: "12px" }}
        columns={[2, null, 4]}
        spacing="20px"
      >
        {products?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.title}
            desc={item.description}
            imgUrl={item.image}
            price={item.price}
          />
        ))}
      </SimpleGrid>
    </section>
  );
};

export default CardContainer;
