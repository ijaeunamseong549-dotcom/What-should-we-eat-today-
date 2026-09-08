"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import FoodCard from "../../components/FoodCard";
import { foods, Food } from "../../components/FoodData";

export default function RecommendPage() {
  const params = useSearchParams();

  const budget = Number(
    params.get("budget") || "10000"
  );

  const category =
    params.get("category") || "한식";

  const [allFoods, setAllFoods] =
    useState<Food[]>(foods);

  useEffect(() => {
    const savedFoods =
      localStorage.getItem("customFoods");

    if (savedFoods) {
      const customFoods: Food[] =
        JSON.parse(savedFoods);

      setAllFoods([
        ...foods,
        ...customFoods,
      ]);
    }
  }, []);

  const result = allFoods
    .filter(
      (food) =>
        food.price <= budget &&
        food.category === category
    )
    .slice(0, 4);

  return (
    <main>
      <Header />

      <section className="page-bg result-bg">

        <div className="result-top">

          <div>
            <span className="result-condition">
              예산 {budget.toLocaleString()}원 이하
            </span>

            <span className="result-condition muted">
              음식 · {category}
            </span>

            <h1>
              오늘은 이거 어때요? 😋
            </h1>

            <p>
              선택한 조건에 맞는 메뉴를 골라봤어요!
            </p>
          </div>

          <Link
            href="/condition"
            className="small-button"
          >
            ← 조건 다시 선택
          </Link>

        </div>

        {result.length > 0 ? (
          <div className="food-grid">

            {result.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
              />
            ))}

          </div>
        ) : (

          <div className="empty-state">

            <h2>
              😢 조건에 맞는 메뉴가 없어요
            </h2>

            <p>
              예산을 높이거나 다른 음식 종류를
              선택해보세요.
            </p>

            <Link
              href="/condition"
              className="primary-button"
            >
              다시 선택하기
            </Link>

          </div>
        )}

        <div className="center-button">
          <Link
            href="/condition"
            className="retry-button"
          >
            🔄 다시 추천받기
          </Link>
        </div>

      </section>
    </main>
  );
}