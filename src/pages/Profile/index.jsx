import React, { useState } from "react";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import TopWrapper from "../../components/TopWrapper";
import OrderHistory from "./components/OrderHistory";
import ChangePassword from "./components/ChangePassword";

import { BREADCRUMB, PROFILE_TABS } from "./constants";

import * as S from "./styles";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { userInfo } = useSelector((state) => state.authReducer);

  const renderProfileTab = () => {
    return PROFILE_TABS.map((tabItem, tabIndex) => (
      <S.TabItem
        key={`tab-${tabIndex}`}
        active={activeTab === tabItem.value}
        onClick={() => setActiveTab(tabItem.value)}
      >
        <Space size={12}>
          {tabItem.icon}
          {tabItem.title}
        </Space>
      </S.TabItem>
    ));
  };

  return (
    <>
      <TopWrapper titlePage="Trang cá nhân" breadcrumb={BREADCRUMB} />
      <S.ProfileWrapper>
        <S.ProfileContainer>
          <S.LeftContainer>
            <S.AvatarContainer>
              <Avatar size={180} icon={<UserOutlined />} />
              <h2 style={{ color: "white" }}>{userInfo.data.name}</h2>
            </S.AvatarContainer>
            {renderProfileTab()}
          </S.LeftContainer>
          <S.RightContainer>
            {activeTab === 1 && <OrderHistory />}
            {activeTab === 5 && <ChangePassword />}
          </S.RightContainer>
        </S.ProfileContainer>
      </S.ProfileWrapper>
    </>
  );
};

export default ProfilePage;
