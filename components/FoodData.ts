export type Food = {
  id: string;
  name: string;
  price: number;
  category: string;
  restaurant: string;
  description: string;
  image: string;
};

export const foods: Food[] = [
  {
    id: "1",
    name: "제육덮밥",
    price: 8000,
    category: "한식",
    restaurant: "캠퍼스 맛집",
    description: "매콤한 제육과 따뜻한 밥이 함께하는 든든한 메뉴",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "김치찌개",
    price: 7000,
    category: "한식",
    restaurant: "학생회관 식당",
    description: "따뜻하고 얼큰한 국물로 든든하게 즐기는 메뉴",
    image:
      "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "돈까스",
    price: 9000,
    category: "일식",
    restaurant: "오늘의 식당",
    description: "바삭한 튀김옷과 부드러운 고기가 어우러진 메뉴",
    image:
      "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "마라탕",
    price: 10000,
    category: "중식",
    restaurant: "마라 맛집",
    description: "원하는 재료를 골라 즐기는 얼얼하고 매콤한 메뉴",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "떡볶이",
    price: 5000,
    category: "분식",
    restaurant: "캠퍼스 분식",
    description: "학생들이 부담 없이 즐길 수 있는 대표적인 분식",
    image:
      "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    name: "파스타",
    price: 12000,
    category: "양식",
    restaurant: "캠퍼스 레스토랑",
    description: "부드러운 소스와 면을 함께 즐기는 메뉴",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    name: "아메리카노",
    price: 4500,
    category: "카페/디저트",
    restaurant: "캠퍼스 카페",
    description: "깔끔하고 부담 없이 즐길 수 있는 커피",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
];