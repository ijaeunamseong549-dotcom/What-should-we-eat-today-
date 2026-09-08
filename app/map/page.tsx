"use client";

import { useState } from "react";
import Header from "../../components/Header";

const restaurants = [
  {
    id: 1,
    name: "캠퍼스 맛집",
    category: "한식",
    menu: "제육덮밥",
    price: 8000,
    position: "top: 25%; left: 30%;",
  },
  {
    id: 2,
    name: "오늘의 식당",
    category: "일식",
    menu: "돈까스",
    price: 9000,
    position: "top: 45%; left: 60%;",
  },
  {
    id: 3,
    name: "마라 맛집",
    category: "중식",
    menu: "마라탕",
    price: 10000,
    position: "top: 65%; left: 40%;",
  },
  {
    id: 4,
    name: "학생회관 식당",
    category: "한식",
    menu: "김치찌개",
    price: 7000,
    position: "top: 35%; left: 75%;",
  },
];

export default function MapPage() {
  const [selected, setSelected] = useState(restaurants[0]);
  const [category, setCategory] = useState("전체");

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <main>
      <Header />

      <section className="page-bg map-bg">
        <div className="map-header">
          <div>
            <span className="result-condition">📍 CAMPUS MAP</span>

            <h1>내 주변 맛집을 찾아보세요</h1>

            <p>대학생들이 자주 찾는 맛집을 한눈에 확인할 수 있어요.</p>
          </div>
        </div>

        <div className="map-filter">
          {["전체", "한식", "중식", "일식"].map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="map-layout">
          <div className="fake-map">
            <div className="map-road road-one" />
            <div className="map-road road-two" />
            <div className="map-road road-three" />

            <div className="map-building building-one">
              학교
            </div>

            <div className="map-building building-two">
              학생회관
            </div>

            {filteredRestaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                className={`map-pin ${
                  selected.id === restaurant.id ? "active" : ""
                }`}
                style={{
                  top: restaurant.position.split(";")[0].replace("top:", ""),
                  left: restaurant.position.split(";")[1].replace("left:", ""),
                }}
                onClick={() => setSelected(restaurant)}
              >
                📍
              </button>
            ))}
          </div>

          <aside className="restaurant-panel">
            <h2>주변 맛집</h2>

            <p className="restaurant-count">
              {filteredRestaurants.length}개의 맛집
            </p>

            <div className="restaurant-list">
              {filteredRestaurants.map((restaurant) => (
                <button
                  key={restaurant.id}
                  className={`restaurant-item ${
                    selected.id === restaurant.id ? "selected" : ""
                  }`}
                  onClick={() => setSelected(restaurant)}
                >
                  <div className="restaurant-icon">🍽️</div>

                  <div>
                    <strong>{restaurant.name}</strong>

                    <span>
                      {restaurant.category} · {restaurant.menu}
                    </span>

                    <b>{restaurant.price.toLocaleString()}원</b>
                  </div>
                </button>
              ))}
            </div>

            <div className="selected-restaurant">
              <span>현재 선택한 맛집</span>

              <h3>{selected.name}</h3>

              <p>
                {selected.category} · {selected.menu}
              </p>

              <strong>
                {selected.price.toLocaleString()}원
              </strong>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}