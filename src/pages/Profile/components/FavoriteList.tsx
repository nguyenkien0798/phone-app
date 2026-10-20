import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useHistory } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { getFavoriteListAction } from "../../../redux/slices/favorite.slice";
import { toggleFavoriteAction } from "../../../redux/slices/product.slice";
import * as S from "../styles";

const FavoriteList = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { userInfo } = useAppSelector((state) => state.authReducer);
  const { favoriteList } = useAppSelector((state) => state.favoriteReducer);
  const items = Array.isArray(favoriteList.data) ? favoriteList.data : [];

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getFavoriteListAction({ userId: userInfo.data.id }));
    }
  }, [userInfo.data.id, dispatch]);

  return (
    <div>
      <S.PanelHeader>
        <div className="panel-title-wrap">
          <h3>Sản phẩm yêu thích</h3>
          <p>Các sản phẩm bạn đã lưu để mua sau.</p>
        </div>
        <span className="panel-count">{items.length} SP</span>
      </S.PanelHeader>

      {items.length === 0 ? (
        <S.EmptyState>
          <div className="empty-icon">
            <HeartOutlined />
          </div>
          <strong>Chưa có sản phẩm yêu thích</strong>
          <span>Bấm trái tim ở trang chi tiết để lưu sản phẩm.</span>
        </S.EmptyState>
      ) : (
        <S.FavoriteGrid>
          {items.map((item) => (
            <div className="fav-card" key={item.id}>
              <button
                type="button"
                className="fav-main"
                onClick={() => history.push(`/product/${item.productId}`)}
              >
                <img src={item.product?.image} alt={item.product?.name || "Sản phẩm"} />
                <strong>{item.product?.name || "Sản phẩm đã xóa"}</strong>
                <span>
                  {Number(item.product?.price || 0).toLocaleString("vi-VN")}₫
                </span>
              </button>
              <button
                type="button"
                className="remove"
                onClick={() =>
                  dispatch(
                    toggleFavoriteAction({
                      userId: userInfo.data.id,
                      productId: item.productId,
                      favoriteId: item.id,
                    })
                  )
                }
              >
                Bỏ lưu
              </button>
            </div>
          ))}
        </S.FavoriteGrid>
      )}
    </div>
  );
};

export default FavoriteList;
