import Link from "next/link";
import Header from "../../components/Header";

const guides = [
  {
    emoji: "🍚",
    title: "든든한 한 끼",
    description: "배고픈 날에는 밥과 주요 메뉴가 함께 있는 식사를 추천해요.",
    menus: ["제육덮밥", "김치찌개", "돈까스"],
  },
  {
    emoji: "🥗",
    title: "가볍게 먹기",
    description: "부담 없이 먹고 싶은 날을 위한 가벼운 메뉴예요.",
    menus: ["샐러드", "포케", "샌드위치"],
  },
  {
    emoji: "🍜",
    title: "스트레스 해소",
    description: "맛있는 음식으로 기분 전환하고 싶은 날 추천해요.",
    menus: ["마라탕", "라멘", "떡볶이"],
  },
  {
    emoji: "☕",
    title: "카페 & 디저트",
    description: "식사 후 달콤한 디저트가 생각날 때 찾아보세요.",
    menus: ["아메리카노", "케이크", "와플"],
  },
];

export default function GuidePage() {
  return (
    <main>
      <Header />

      <section className="page-bg guide-bg">
        <div className="guide-header">
          <span className="result-condition">🍊 CAMPUS GUIDE</span>

          <h1>오늘은 어떤 식사가 좋을까요?</h1>

          <p>
            지금 기분과 상황에 맞는 식사 방법을 찾아보세요.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.title}>
              <div className="guide-emoji">{guide.emoji}</div>

              <h2>{guide.title}</h2>

              <p>{guide.description}</p>

              <div className="guide-menus">
                {guide.menus.map((menu) => (
                  <span key={menu}>{menu}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="guide-action">
          <Link href="/condition" className="primary-button">
            나에게 맞는 음식 추천받기 ✨
          </Link>
        </div>
      </section>
    </main>
  );
}