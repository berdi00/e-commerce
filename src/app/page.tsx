import CardContainer from "@/helpers/CardContainer";
import { TCategory } from "@/types/shop";

const fetchFunc = () => {
  const response = fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/home/products`
  ).then((res) => res.json());
  return response;
};

export default async function Home() {
  const categories: TCategory[] = await fetchFunc();

  return (
    <div className="container mx-auto space-y-3">
      {/* <Gallery /> */}
      {categories.map((cat) => (
        <CardContainer
          title={cat.title}
          key={cat.category_id}
          products={cat.products}
          id={cat.category_id}
        />
      ))}
    </div>
  );
}
