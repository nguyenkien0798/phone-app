export const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  PROCESSING: "processing",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const PAYMENT_STATUS = {
  UNPAID: "unpaid",
  PAID: "paid",
  REFUNDED: "refunded",
};

export const ORDER_STATUS_LABEL = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  processing: "Đang giao",
  completed: "Hoàn tất",
  cancelled: "Đã hủy",
};

export const PAYMENT_STATUS_LABEL: Record<string, string> = {
  unpaid: "Chưa thanh toán",
  paid: "Đã thanh toán",
  refunded: "Đã hoàn tiền",
};

export const PAYMENT_TYPE_LABEL = {
  cod: "COD",
  momo: "MoMo / Apple Pay",
  atm: "Chuyển khoản",
};

export const getOrderStatusMeta = (status?: string) => {
  switch (status) {
    case ORDER_STATUS.COMPLETED:
      return { label: ORDER_STATUS_LABEL.completed, className: "status-paid" };
    case ORDER_STATUS.CANCELLED:
      return { label: ORDER_STATUS_LABEL.cancelled, className: "status-unpaid" };
    case ORDER_STATUS.CONFIRMED:
      return { label: ORDER_STATUS_LABEL.confirmed, className: "status-paid" };
    case ORDER_STATUS.PENDING:
      return { label: ORDER_STATUS_LABEL.pending, className: "status-unpaid" };
    default:
      return { label: ORDER_STATUS_LABEL.processing, className: "status-shipping" };
  }
};

export const canCancelOrder = (status?: string) =>
  status === ORDER_STATUS.PENDING || status === ORDER_STATUS.CONFIRMED;

export const getPaymentMeta = (order: { paymentStatus?: string; paymentType?: string }) => {
  const paymentStatus =
    order.paymentStatus ||
    (order.paymentType && order.paymentType !== "cod"
      ? PAYMENT_STATUS.PAID
      : PAYMENT_STATUS.UNPAID);
  return {
    status: paymentStatus,
    label: PAYMENT_STATUS_LABEL[paymentStatus] || PAYMENT_STATUS_LABEL.unpaid,
    className: paymentStatus === PAYMENT_STATUS.PAID ? "status-paid" : "status-unpaid",
  };
};
