import Link from "next/link";
import Header from "../../../components/Header";
import { foods } from "../../../components/FoodData";

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const food =
    foods.find((item) => item.id === id) ||
    foods[0];

  return (
    <main>
      <Header />

      <section className="page-bg detail-bg">

        <Link
          href="/recommend"
          className="back-link"
        >
          ← 추천 결과로 돌아가기
        </Link>

        <div className="detail-layout">

          <div className="detail-image">
            <img
              src={food.image}
              alt={food.name}
            />
          </div>

          <article className="detail-card">

            <div className="rating">
              ★ 4.8
              <span>
                (최근 방문자 142명 기준)
              </span>
            </div>

            <div className="detail-title-row">
              <h1>{food.name}</h1>

              <strong>
                {food.price.toLocaleString()}원
              </strong>
            </div>

            <h3>
              메뉴 설명
            </h3>

            <p className="detail-description">
              {food.description}.
              부담스럽지 않은 가격으로
              든든하게 즐길 수 있어
              대학생 점심 메뉴로 추천해요.
            </p>

            <h3>
              오늘의 추천 이유
            </h3>

            <div className="reason">
              <b>🔥 가성비 좋은 메뉴</b>

              <p>
                예산 안에서 충분히 든든한
                한 끼를 먹을 수 있어요.
              </p>
            </div>

            <div className="reason">
              <b>🍚 한 끼로 충분해요</b>

              <p>
                밥과 주요 재료가 함께 구성되어
                식사로 잘 어울려요.
              </p>
            </div>

            <div className="reason">
              <b>📍 가까운 음식점</b>

              <p>
                {food.restaurant}에서 판매하는
                인기 메뉴예요.
              </p>
            </div>

          </article>

        </div>
      </section>
    </main>
  );
}