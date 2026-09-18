export const SHIPPING_FEE_DA_NANG = 0;
export const SHIPPING_FEE_NATIONWIDE = 35000;

export const DA_NANG_CITY_CODE = "48";

export const isDaNangCity = (cityName = "") =>
  String(cityName).toLowerCase().includes("đà nẵng") ||
  String(cityName).toLowerCase().includes("da nang");

export const getShippingFee = (cityName) =>
  isDaNangCity(cityName) ? SHIPPING_FEE_DA_NANG : SHIPPING_FEE_NATIONWIDE;

export const formatShippingFeeLabel = (cityName) => {
  const fee = getShippingFee(cityName);
  if (fee === 0) {
    return { text: "0 ₫ (Miễn phí Đà Nẵng)", free: true, fee };
  }
  return {
    text: `${fee.toLocaleString("vi-VN")} ₫ (Toàn quốc)`,
    free: false,
    fee,
  };
};
