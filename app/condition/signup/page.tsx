"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function SignupPage() {
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
          className="auth-card signup-card"
          onSubmit={handleSubmit}
        >

          <div className="auth-icon">
            🍊
          </div>

          <h1>
            새로운 회원가입
          </h1>

          <p>
            간단한 가입으로 오늘 뭐 먹지?의
            모든 기능을 이용해보세요.
          </p>

          <label>이름</label>

          <input
            placeholder="홍길동"
          />

          <label>이메일</label>

          <input
            type="email"
            placeholder="univ@campus.ac.kr"
          />

          <label>비밀번호</label>

          <input
            type="password"
            placeholder="영문, 숫자 포함 8자 이상"
          />

          <label>비밀번호 확인</label>

          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
          />

          <label className="terms">

            <input type="checkbox" />

            <span>
              서비스 이용약관 및
              개인정보 수집에 동의합니다.
            </span>

          </label>

          <button className="primary-button">
            회원가입 완료하기 →
          </button>

          <p className="auth-bottom">
            이미 회원이신가요?{" "}
            <Link href="/login">
              로그인하기
            </Link>
          </p>

        </form>

      </section>
    </main>
  );
}