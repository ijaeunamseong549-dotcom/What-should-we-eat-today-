"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] =
    useState("");

  const [agree, setAgree] = useState(false);

  const handleSignup = () => {
    // 이름 확인
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    // 이메일 확인
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!email.includes("@")) {
      alert("올바른 이메일을 입력해주세요.");
      return;
    }

    // 비밀번호 확인
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      alert("비밀번호는 6자 이상 입력해주세요.");
      return;
    }

    // 비밀번호 확인
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 약관 확인
    if (!agree) {
      alert("이용약관에 동의해주세요.");
      return;
    }

    const newUser: User = {
      name,
      email,
      password,
    };

    // 회원정보 저장
    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    alert("회원가입이 완료되었습니다!");

    router.push("/login");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <Link href="/" className="auth-logo">
          🍊 오늘 뭐 먹지?
        </Link>

        <h1>회원가입</h1>

        <p className="auth-description">
          오늘 뭐 먹지?의 회원이 되어보세요.
        </p>

        {/* 이름 */}

        <div className="auth-field">
          <label>이름</label>

          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </div>

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
            placeholder="6자 이상 입력해주세요"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        {/* 비밀번호 확인 */}

        <div className="auth-field">
          <label>비밀번호 확인</label>

          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={passwordConfirm}
            onChange={(e) =>
              setPasswordConfirm(e.target.value)
            }
          />
        </div>

        {/* 약관 */}

        <label className="agree-box">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) =>
              setAgree(e.target.checked)
            }
          />

          <span>
            이용약관 및 개인정보 처리방침에
            동의합니다.
          </span>
        </label>

        {/* 회원가입 */}

        <button
          type="button"
          className="auth-submit"
          onClick={handleSignup}
        >
          회원가입
        </button>

        {/* 로그인 이동 */}

        <div className="auth-bottom">
          이미 계정이 있으신가요?

          <Link href="/login">
            로그인
          </Link>
        </div>

      </div>

    </main>
  );
}