import React from "react";
import { TProductAgain } from "@/types/shop";
import Card from "@/helpers/Card";
const fetchFunc = (id: string) => {
  const response = fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/product/category/${id}`
  ).then((res) => res.json());
  return response;
};

const CategoryProduct = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const categoryProducts: TProductAgain[] = await fetchFunc(id);
  console.log(categoryProducts, "category products");
  return (
    <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-3">
      {categoryProducts.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.title}
          desc={item.description}
          imgUrl={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CategoryProduct;
