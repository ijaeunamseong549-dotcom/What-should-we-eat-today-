"use client";

import { useState } from "react";
import Header from "../../components/Header";

const reviews = [
  {
    id: 1,
    menu: "제육덮밥",
    restaurant: "캠퍼스 맛집",
    rating: 5,
    text: "가격도 괜찮고 양도 많아서 학생들이 먹기 좋은 메뉴였어요!",
    date: "2026.09.01",
  },
  {
    id: 2,
    menu: "돈까스",
    restaurant: "오늘의 식당",
    rating: 4,
    text: "바삭하고 맛있었습니다. 점심시간에 먹기 좋았어요.",
    date: "2026.08.30",
  },
  {
    id: 3,
    menu: "김치찌개",
    restaurant: "학생회관 식당",
    rating: 5,
    text: "따뜻하고 든든해서 한 끼 식사로 딱 좋았습니다.",
    date: "2026.08.28",
  },
  {
    id: 4,
    menu: "마라탕",
    restaurant: "마라 맛집",
    rating: 4,
    text: "재료를 원하는 대로 골라 먹을 수 있어서 좋았어요.",
    date: "2026.08.25",
  },
];

export default function ReviewsPage() {
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredReviews =
    selectedRating === 0
      ? reviews
      : reviews.filter((review) => review.rating === selectedRating);

  return (
    <main>
      <Header />

      <section className="page-bg reviews-bg">
        <div className="reviews-header">
          <span className="result-condition">💬 FOOD REVIEW</span>

          <h1>학생들의 음식 후기를 확인해보세요</h1>

          <p>
            다른 사람들이 직접 먹어본 음식의 솔직한 후기를 모아봤어요.
          </p>
        </div>

        <div className="review-filter">
          <button
            className={selectedRating === 0 ? "selected" : ""}
            onClick={() => setSelectedRating(0)}
          >
            전체
          </button>

          {[5, 4, 3].map((rating) => (
            <button
              key={rating}
              className={selectedRating === rating ? "selected" : ""}
              onClick={() => setSelectedRating(rating)}
            >
              {"★".repeat(rating)} {rating}점
            </button>
          ))}
        </div>

        <div className="review-list">
          {filteredReviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-top">
                <div>
                  <h2>{review.menu}</h2>
                  <span>{review.restaurant}</span>
                </div>

                <div className="review-rating">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>

              <p className="review-text">“{review.text}”</p>

              <span className="review-date">{review.date}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}