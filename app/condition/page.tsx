"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import { Food } from "../../components/FoodData";

const categories = [
  "한식",
  "중식",
  "일식",
  "양식",
  "분식",
  "디저트",
];

const budgets = [5000, 8000, 10000, 15000];

export default function ConditionPage() {
  const router = useRouter();

  const [budget, setBudget] = useState(10000);
  const [category, setCategory] = useState("한식");

  const [showAddForm, setShowAddForm] =
    useState(false);

  const [customFoods, setCustomFoods] =
    useState<Food[]>([]);

  const [newMenu, setNewMenu] =
    useState("");

  const [newPrice, setNewPrice] =
    useState("");

  const [newImage, setNewImage] =
    useState("");

  // 저장된 사용자 메뉴 불러오기
  useEffect(() => {
    const savedFoods =
      localStorage.getItem("customFoods");

    if (savedFoods) {
      setCustomFoods(JSON.parse(savedFoods));
    }
  }, []);

  // 사진 선택
  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 등록할 수 있습니다.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("사진은 5MB 이하로 등록해주세요.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setNewImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  // 선택한 카테고리에 음식 등록
  const handleAddFood = () => {
    const menuName = newMenu.trim();
    const price = Number(newPrice);

    if (!menuName) {
      alert("메뉴 이름을 입력해주세요.");
      return;
    }

    if (!price || price <= 0) {
      alert("올바른 가격을 입력해주세요.");
      return;
    }

    if (!newImage) {
      alert("음식 사진을 등록해주세요.");
      return;
    }

    const newFood: Food = {
      id: `custom-${Date.now()}`,
      name: menuName,
      price: price,
      category: category,
      restaurant: "사용자 등록 메뉴",
      description:
        "사용자가 직접 등록한 메뉴입니다.",
      image: newImage,
    };

    const updatedFoods = [
      ...customFoods,
      newFood,
    ];

    setCustomFoods(updatedFoods);

    localStorage.setItem(
      "customFoods",
      JSON.stringify(updatedFoods)
    );

    // 입력값 초기화
    setNewMenu("");
    setNewPrice("");
    setNewImage("");
    setShowAddForm(false);

    alert(
      `"${menuName}" 메뉴가 ${category} 카테고리에 등록되었습니다!`
    );
  };

  // 추천받기
  const handleRecommend = () => {
    const query = new URLSearchParams({
      budget: String(budget),
      category: category,
    });

    router.push(`/recommend?${query.toString()}`);
  };

  return (
    <main>
      <Header />

      <section className="page-bg condition-bg">
        <div className="condition-card">

          {/* STEP 1 */}

          <div className="step">
            STEP 1
            <span>오늘의 예산 정하기</span>
          </div>

          <label className="field-label">
            얼마까지 쓸까요?
          </label>

          <div className="budget-input">
            <span>₩</span>

            <strong>
              {budget.toLocaleString()}
            </strong>

            <span>원 이하</span>
          </div>

          <div className="budget-buttons">
            {budgets.map((item) => (
              <button
                type="button"
                key={item}
                className={
                  budget === item
                    ? "selected"
                    : ""
                }
                onClick={() => setBudget(item)}
              >
                {item.toLocaleString()}원
              </button>
            ))}
          </div>

          {/* STEP 2 */}

          <div className="step step-two">
            STEP 2
            <span>좋아하는 음식 고르기</span>
          </div>

          {/* 고정 카테고리 */}

          <div className="category-buttons">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={
                  category === item
                    ? "selected"
                    : ""
                }
                onClick={() => {
                  setCategory(item);
                  setShowAddForm(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* 음식 등록 버튼 */}

          <button
            type="button"
            className="add-food-open-button"
            onClick={() =>
              setShowAddForm(!showAddForm)
            }
          >
            ＋ 선택한 카테고리에 음식 등록
          </button>

          {/* 음식 등록 */}

          {showAddForm && (
            <div className="add-food-form">

              <h3>
                🍽️ {category} 음식 등록
              </h3>

              <p>
                현재 선택한 <strong>{category}</strong>
                카테고리에 새로운 메뉴를 등록합니다.
              </p>

              {/* 메뉴 */}

              <label>
                메뉴 이름
              </label>

              <input
                type="text"
                placeholder="예: 김치볶음밥"
                value={newMenu}
                onChange={(e) =>
                  setNewMenu(e.target.value)
                }
              />

              {/* 가격 */}

              <label>
                가격
              </label>

              <input
                type="number"
                placeholder="예: 7000"
                value={newPrice}
                onChange={(e) =>
                  setNewPrice(e.target.value)
                }
              />

              {/* 사진 */}

              <label>
                음식 사진
              </label>

              <div className="image-upload-box">

                {!newImage && (
                  <label
                    htmlFor="food-image"
                    className="image-upload-button"
                  >
                    📷 음식 사진 선택
                  </label>
                )}

                <input
                  id="food-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />

                {newImage && (
                  <div className="image-preview">

                    <img
                      src={newImage}
                      alt="등록할 음식"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setNewImage("")
                      }
                    >
                      사진 삭제
                    </button>

                  </div>
                )}

              </div>

              {/* 등록 버튼 */}

              <div className="add-form-buttons">

                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setNewMenu("");
                    setNewPrice("");
                    setNewImage("");
                  }}
                >
                  취소
                </button>

                <button
                  type="button"
                  className="save-category-button"
                  onClick={handleAddFood}
                >
                  음식 등록하기
                </button>

              </div>

            </div>
          )}

          {/* 추천받기 */}

          <button
            type="button"
            className="primary-button"
            onClick={handleRecommend}
          >
            추천받기 ✨
          </button>

        </div>
      </section>
    </main>
  );
}