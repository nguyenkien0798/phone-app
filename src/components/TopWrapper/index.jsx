import React from "react";
import { Breadcrumb } from "antd";
import { useHistory } from "react-router";

import * as S from "./styles";

const TopWrapper = ({ titlePage, breadcrumb = [], height }) => {
  const history = useHistory();

  function redirectPage(e, path) {
    e.preventDefault();
    history.push(path);
  }

  function renderBreadcrumb() {
    return breadcrumb.map((breadcrumbItem, breadcrumbIndex) => {
      return (
        <Breadcrumb.Item
          key={`breadcrumb-${breadcrumbIndex}`}
          {...(breadcrumbIndex !== breadcrumb.length - 1 && {
            href: "#",
          })}
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
      <Breadcrumb>{renderBreadcrumb()}</Breadcrumb>
      {titlePage && <S.TopTitle>{titlePage}</S.TopTitle>}
    </S.TopContainer>
  );
};

export default TopWrapper;
