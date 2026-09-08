import Link from "next/link";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="hero home-hero">
        <div className="home-image image-a">
          <img
            src="https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>

        <div className="home-image image-b">
          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>

        <div className="home-image image-c">
          <img
            src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>

        <div className="home-image image-d">
          <img
            src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>

        <div className="home-center">
          <div className="home-icon">
            😋
          </div>

          <div>
            <h1>오늘 뭐 먹지?</h1>
            <p>캠퍼스 라이프</p>
          </div>
        </div>
      </section>

      <Link
        href="/condition"
        className="floating-start"
      >
        오늘 뭐 먹지? →
      </Link>
    </main>
  );
}