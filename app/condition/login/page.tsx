"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>

      <header className="header">

        <Link href="/" className="brand">
          <span className="brand-icon">
            🍊
          </span>

          <span>
            오늘 뭐 먹지?
          </span>

          <small>
            맛있는 선택
          </small>
        </Link>

        <nav className="nav">
          <Link href="/condition">
            추천받기
          </Link>

          <Link href="/recommend">
            식사 가이드
          </Link>

          <Link href="/recommend">
            음식 후기
          </Link>

          <Link href="/recommend">
            맛집 지도
          </Link>
        </nav>

        <span className="profile-button">
          ♟
        </span>

      </header>

      <section className="page-bg auth-bg">

        <form
          className="auth-card"
          onSubmit={handleSubmit}
        >

          <div className="auth-icon">
            🍊
          </div>

          <h1>
            오늘 뭐 먹지? 로그인
          </h1>

          <p>
            맛있는 식사를 위한 첫 걸음,
            지금 시작해보세요.
          </p>

          <label>
            이메일
          </label>

          <input
            type="email"
            placeholder="univ@campus.ac.kr"
          />

          <label>
            비밀번호
          </label>

          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />

          <button className="primary-button">
            로그인하기 →
          </button>

          <div className="auth-links">
            <span>
              비밀번호를 잊으셨나요?
            </span>

            <span>
              비밀번호 찾기
            </span>
          </div>

          <div className="divider">
            <span>또는</span>
          </div>

          <button
            type="button"
            className="social kakao"
          >
            🟡 카카오로 시작하기
          </button>

          <button
            type="button"
            className="social naver"
          >
            N 네이버로 시작하기
          </button>

          <button
            type="button"
            className="social google"
          >
            ◉ 구글 계정으로 시작하기
          </button>

          <p className="auth-bottom">
            아직 회원이 아니신가요?{" "}
            <Link href="/signup">
              회원가입하기
            </Link>
          </p>

        </form>

      </section>
    </main>
  );
}