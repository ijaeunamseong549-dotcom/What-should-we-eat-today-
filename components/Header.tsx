"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [userName, setUserName] =
    useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    const loginUser =
      localStorage.getItem("loginUser");

    if (isLoggedIn === "true" && loginUser) {
      const user = JSON.parse(loginUser);

      setUserName(user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loginUser");

    setUserName(null);

    window.location.href = "/";
  };

  return (
    <header className="header">

      <Link href="/" className="brand">
        <span className="brand-icon">
          🍊
        </span>

        <span>오늘 뭐 먹지?</span>

        <small>맛있는 선택</small>
      </Link>

      <nav className="nav">

        <Link href="/condition">
          추천받기
        </Link>

        <Link href="/guide">
          식사 가이드
        </Link>

        <Link href="/reviews">
          음식 후기
        </Link>

        <Link href="/map">
          맛집 지도
        </Link>

      </nav>

      {userName ? (

        <div className="header-user">

          <span>
            👋 {userName}님
          </span>

          <button
            type="button"
            onClick={handleLogout}
          >
            로그아웃
          </button>

        </div>

      ) : (

        <Link
          href="/login"
          className="profile-button"
        >
          👤
        </Link>

      )}

    </header>
  );
}