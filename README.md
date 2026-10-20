# Volt Store

Shop bán thiết bị Apple (React + Ant Design + json-server). Backend demo chạy local, dữ liệu nằm trong `db/db.json`.

## Chạy dự án

Cần **2 terminal**:

```bash
npm install
```

Tạo file `.env` (copy từ `.env.example`):

```
VITE_API_URL=http://localhost:4000
```

```bash
npm run server
npm start
```

- API: http://localhost:4000
- Web: http://localhost:3000

Cần **Node 24+**. Project dùng **Vite 5** (không còn Create React App / webpack).

## Tài khoản demo

| Vai trò | Email | Mật khẩu |
| --- | --- | --- |
| User | kiennguyen98@gmail.com | (mật khẩu đã hash trong db — đăng ký user mới nếu không nhớ) |
| Admin | kiennguyen123@gmail.com | (tài khoản admin có sẵn trong `db.json`) |

Đăng ký trên web **luôn tạo tài khoản khách**. Admin chỉ gán tay trong `db.json`.

Nếu quên mật khẩu admin: đăng ký user mới, rồi sửa `"role": "admin"` cho user đó trong `db/db.json` và restart `npm run server`.

## Mã giảm giá

Còn hạn trong `db.json`:

- `KMGS25` — giảm 25%
- `KMBF` — giảm 10%
- `GIAM500K` — giảm 500.000₫

## Luồng chính

- Khách: xem sản phẩm, đăng nhập, thêm giỏ, checkout, xem đơn / yêu thích / sửa hồ sơ.
- Admin: `/admin/products`, `/admin/orders`, `/admin/categories`, `/admin/discounts`.
- Giao hàng miễn phí Đà Nẵng, toàn quốc +35.000₫.
- COD = chưa thanh toán, MoMo/chuyển khoản = demo đã thanh toán.
- Tồn kho trừ khi đặt hàng thành công.

## Lưu ý

Đây là backend json-server (file JSON), phù hợp đồ án / demo, không dùng cho production thật.
