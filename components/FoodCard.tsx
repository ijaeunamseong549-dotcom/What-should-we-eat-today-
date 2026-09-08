import Link from "next/link";

export type Food = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  restaurant: string;
};

export default function FoodCard({ food }: { food: Food }) {
  return (
    <Link href={`/menu/${food.id}`} className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-card-body">
        <div className="food-title-row">
          <h3>{food.name}</h3>

          <strong>
            {food.price.toLocaleString()}원
          </strong>
        </div>

        <p>{food.description}</p>

        <div className="food-card-footer">
          <span>메뉴 정보 및 후기 보기</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}