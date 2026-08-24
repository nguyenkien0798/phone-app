import React from "react";
import { useHistory } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import * as S from "./styles";

// Các biểu tượng Vector chuẩn sắc nét hệ sinh thái Apple
const AppleIcons = {
  IPhone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
      <line x1="10" y1="5" x2="14" y2="5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  Mac: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M1 20h22" strokeWidth="1.8" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
      <circle cx="12" cy="9" r="1.5" fill="currentColor" />
    </svg>
  ),
  IPad: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="19" r="0.8" fill="currentColor" />
      <circle cx="12" cy="4" r="0.5" fill="currentColor" />
    </svg>
  ),
  Watch: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="5" width="12" height="14" rx="3" />
      <path d="M9 5V2h6v3" />
      <path d="M9 19v3h6v-3" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M18 10v4" strokeWidth="2" />
    </svg>
  ),
  AirPods: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="16" height="12" rx="4" />
      <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      <path d="M4 12h16" strokeDasharray="2 2" />
    </svg>
  ),
  Accessories: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="7" />
      <path d="M12 9v6" />
      <path d="M9 12h6" />
      <circle cx="12" cy="12" r="3" strokeDasharray="2 2" />
    </svg>
  ),
  Pencil: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
    </svg>
  ),
  VisionPro: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c0-3.5 3-6 10-6s10 2.5 10 6-3 6-10 6-10-2.5-10-6z" />
      <circle cx="8" cy="12" r="2.5" fill="currentColor" fillOpacity="0.3" />
      <circle cx="16" cy="12" r="2.5" fill="currentColor" fillOpacity="0.3" />
      <path d="M6 12h12" strokeDasharray="1 3" />
    </svg>
  ),
  AppleTV: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="13" rx="2" />
      <path d="M8 21h8" strokeWidth="2" />
      <path d="M12 18v3" />
      <path d="M9 10l3 3 5-5" strokeWidth="1.8" />
    </svg>
  ),
  AppleCare: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8" strokeWidth="2" />
      <path d="M8 12h8" strokeWidth="2" />
    </svg>
  ),
  LikeNew: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  TradeIn: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
};

function CategoryHome() {
  const history = useHistory();

  const appleCategories = [
    {
      id: 1,
      title: "iPhone",
      subtitle: "15, 14, 13 Series",
      icon: <AppleIcons.IPhone />,
      accentColor: "#2563eb",
      bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      path: "/products?categoryId=1",
    },
    {
      id: 2,
      title: "Mac & MacBook",
      subtitle: "Air, Pro, M-Series",
      icon: <AppleIcons.Mac />,
      accentColor: "#4f46e5",
      bgGradient: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
      path: "/products?categoryId=2",
    },
    {
      id: 3,
      title: "iPad",
      subtitle: "Pro, Air, Gen 10, Mini",
      icon: <AppleIcons.IPad />,
      accentColor: "#0891b2",
      bgGradient: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
      path: "/products?categoryId=3",
    },
    {
      id: 4,
      title: "Apple Watch",
      subtitle: "Ultra 2, Series 9, SE",
      icon: <AppleIcons.Watch />,
      accentColor: "#e11d48",
      bgGradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
      path: "/products?categoryId=4",
    },
    {
      id: 5,
      title: "AirPods & Âm Thanh",
      subtitle: "Pro 2, Max, HomePod",
      icon: <AppleIcons.AirPods />,
      accentColor: "#7c3aed",
      bgGradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
      path: "/products?categoryId=5",
    },
    {
      id: 6,
      title: "Phụ Kiện Apple",
      subtitle: "MagSafe, Sạc, Cáp, Bao da",
      icon: <AppleIcons.Accessories />,
      accentColor: "#ea580c",
      bgGradient: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
      path: "/products?categoryId=6",
    },
    {
      id: 7,
      title: "Pencil & Bàn Phím",
      subtitle: "Apple Pencil & Magic Keyboard",
      icon: <AppleIcons.Pencil />,
      accentColor: "#059669",
      bgGradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      path: "/products?q=Pencil",
    },
    {
      id: 8,
      title: "Apple Vision Pro",
      subtitle: "Spatial Computing",
      icon: <AppleIcons.VisionPro />,
      accentColor: "#0284c7",
      bgGradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
      path: "/products?q=iPhone",
    },
    {
      id: 9,
      title: "Apple TV & Màn Hình",
      subtitle: "Studio Display & Apple TV 4K",
      icon: <AppleIcons.AppleTV />,
      accentColor: "#334155",
      bgGradient: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      path: "/products?categoryId=2",
    },
    {
      id: 10,
      title: "Apple Care+",
      subtitle: "Bảo hành ủy quyền Apple",
      icon: <AppleIcons.AppleCare />,
      accentColor: "#dc2626",
      bgGradient: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
      path: "/products",
    },
    {
      id: 11,
      title: "Apple Like New",
      subtitle: "Máy cũ chính hãng 99%",
      icon: <AppleIcons.LikeNew />,
      accentColor: "#16a34a",
      bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      path: "/products?q=iPhone",
    },
    {
      id: 12,
      title: "Thu Cũ Đổi Mới",
      subtitle: "Trợ giá lên đời đến 2 triệu",
      icon: <AppleIcons.TradeIn />,
      accentColor: "#d97706",
      bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
      path: "/products",
    },
  ];

  return (
    <S.Category>
      <div className="section-heading">
        <div className="title-group">
          <span>HỆ SINH THÁI APPLE CHÍNH HÃNG</span>
          <h2>Khám Phá Theo Nhu Cầu</h2>
        </div>
        <div className="view-all-link" onClick={() => history.push("/products")}>
          Xem tất cả sản phẩm Apple <ArrowRightOutlined />
        </div>
      </div>
      <S.CategoryList>
        {appleCategories.map((item) => (
          <S.CategoryItem
            key={item.id}
            $accentColor={item.accentColor}
            onClick={() => history.push(item.path)}
          >
            <div className="category-image" style={{ background: item.bgGradient, color: item.accentColor }}>
              {item.icon}
            </div>
            <div className="category-title">{item.title}</div>
            <div className="category-subtitle">{item.subtitle}</div>
          </S.CategoryItem>
        ))}
      </S.CategoryList>
    </S.Category>
  );
}

export default CategoryHome;
