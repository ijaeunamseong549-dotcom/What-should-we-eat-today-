"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const savedUser =
      localStorage.getItem("user");

    if (!savedUser) {
      alert(
        "가입된 계정이 없습니다. 먼저 회원가입해주세요."
      );
      return;
    }

    const user: User =
      JSON.parse(savedUser);

    if (
      user.email !== email ||
      user.password !== password
    ) {
      alert(
        "이메일 또는 비밀번호가 올바르지 않습니다."
      );
      return;
    }

    // 로그인 상태 저장
    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "loginUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      })
    );

    alert(`${user.name}님, 환영합니다!`);

    router.push("/");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <Link href="/" className="auth-logo">
          🍊 오늘 뭐 먹지?
        </Link>

        <h1>로그인</h1>

        <p className="auth-description">
          오늘 뭐 먹지?에 다시 오신 것을 환영합니다.
        </p>

        {/* 이메일 */}

        <div className="auth-field">
          <label>이메일</label>

          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        {/* 비밀번호 */}

        <div className="auth-field">
          <label>비밀번호</label>

          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
        </div>

        {/* 로그인 */}

        <button
          type="button"
          className="auth-submit"
          onClick={handleLogin}
        >
          로그인
        </button>

        <div className="auth-divider">
          <span>또는</span>
        </div>

        {/* 소셜 로그인 UI */}

        <div className="social-buttons">

          <button
            type="button"
            onClick={() =>
              alert(
                "카카오 로그인은 추후 API 연결 예정입니다."
              )
            }
          >
            🟡 카카오 로그인
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "네이버 로그인은 추후 API 연결 예정입니다."
              )
            }
          >
            🟢 네이버 로그인
          </button>

          <button
            type="button"
            onClick={() =>
              alert(
                "Google 로그인은 추후 API 연결 예정입니다."
              )
            }
          >
            ⚪ Google 로그인
          </button>

        </div>

        {/* 회원가입 */}

        <div className="auth-bottom">
          아직 계정이 없으신가요?

          <Link href="/signup">
            회원가입
          </Link>
        </div>

      </div>

    </main>
  );
}