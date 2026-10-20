import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { UserOutlined, IdcardFilled } from "@ant-design/icons";
import { useAppSelector } from "../../redux/hooks";
import { useHistory, useLocation } from "react-router-dom";

import TopWrapper from "../../components/TopWrapper";
import OrderHistory from "./components/OrderHistory";
import ChangePassword from "./components/ChangePassword";
import FavoriteList from "./components/FavoriteList";
import EditProfile from "./components/EditProfile";

import { BREADCRUMB, PROFILE_TABS } from "./constants";

import * as S from "./styles";

const ProfilePage = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(1);
  const { userInfo } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    const tab = Number(new URLSearchParams(location.search).get("tab"));
    if ([1, 2, 3, 5].includes(tab)) setActiveTab(tab);
  }, [location.search]);

  const roleLabel = userInfo.data.role === "admin" ? "Quản trị viên" : "Thành viên";

  const handleTabClick = (tabItem) => {
    if (tabItem.path) {
      history.push(tabItem.path);
      return;
    }
    setActiveTab(tabItem.value);
  };

  return (
    <>
      <TopWrapper
        titlePage="Trang Cá Nhân"
        subtitle={`Xin chào, ${userInfo.data.name || "Thành viên"} — Quản lý đơn hàng và thông tin tài khoản`}
        icon={<IdcardFilled />}
        breadcrumb={BREADCRUMB}
        height={260}
      />
      <S.ProfileWrapper>
        <S.ProfileContainer>
          <S.LeftContainer>
            <S.AvatarContainer>
              <Avatar size={108} icon={<UserOutlined />} className="profile-avatar" />
              <div className="profile-meta">
                <h2>{userInfo.data.name || "Thành viên"}</h2>
                {userInfo.data.email && (
                  <p className="profile-email">{userInfo.data.email}</p>
                )}
                <span className="profile-badge">{roleLabel}</span>
              </div>
            </S.AvatarContainer>

            <S.TabsRow>
              {PROFILE_TABS.map((tabItem) => (
                <S.TabItem
                  key={tabItem.value}
                  type="button"
                  active={activeTab === tabItem.value}
                  onClick={() => handleTabClick(tabItem)}
                >
                  {tabItem.icon}
                  {tabItem.title}
                </S.TabItem>
              ))}
            </S.TabsRow>
          </S.LeftContainer>

          <S.RightContainer>
            {activeTab === 1 && <OrderHistory />}
            {activeTab === 2 && <FavoriteList />}
            {activeTab === 3 && <EditProfile />}
            {activeTab === 5 && <ChangePassword />}
          </S.RightContainer>
        </S.ProfileContainer>
      </S.ProfileWrapper>
    </>
  );
};

export default ProfilePage;
