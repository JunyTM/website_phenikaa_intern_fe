export const ValidateEmail = (values: string) => {
  return /^\S+@\S+$/.test(values) ? null : "Email không hợp lệ";
};

export const ComparePassword = (password: string, re_password: string) => {
  return password === re_password ? null : "Mật khẩu không khớp";
};

export const DateToString = (date: Date | null) => {
  if (!date) return "";
  return date.toLocaleDateString(import.meta.env.VITE_REACT_APP_TIME_LOCAlE, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
