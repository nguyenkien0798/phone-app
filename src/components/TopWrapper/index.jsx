import React from "react";
import { Breadcrumb } from "antd";
import { useHistory } from "react-router";
import { RightOutlined } from "@ant-design/icons";

import * as S from "./styles";

const TopWrapper = ({ titlePage, breadcrumb = [], height, subtitle, icon }) => {
  const history = useHistory();

  function redirectPage(e, path) {
    e.preventDefault();
    if (path) history.push(path);
  }

  function renderBreadcrumb() {
    return breadcrumb.map((breadcrumbItem, breadcrumbIndex) => {
      const isLast = breadcrumbIndex === breadcrumb.length - 1;
      return (
        <Breadcrumb.Item
          key={`breadcrumb-${breadcrumbIndex}`}
          {...(!isLast && breadcrumbItem.path && { href: "#" })}
          onClick={(e) => redirectPage(e, breadcrumbItem.path)}
        >
          {breadcrumbItem.icon && breadcrumbItem.icon}
          <span>{breadcrumbItem.title}</span>
        </Breadcrumb.Item>
      );
    });
  }

  return (
    <S.TopContainer height={height}>
      <S.TopInner>
        <S.BreadcrumbWrapper>
          <Breadcrumb
            separator={
              <RightOutlined style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }} />
            }
          >
            {renderBreadcrumb()}
          </Breadcrumb>
        </S.BreadcrumbWrapper>

        {icon && <S.PageIcon>{icon}</S.PageIcon>}
        {titlePage && <S.TopTitle>{titlePage}</S.TopTitle>}
        {subtitle && <S.TopSubtitle>{subtitle}</S.TopSubtitle>}
      </S.TopInner>
    </S.TopContainer>
  );
};

export default TopWrapper;
