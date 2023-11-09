import { notifications } from "@mantine/notifications";

const show = (message: string, type: string) => {
  notifications.show({
    title: "Message",
    message: message,
    color: type === "success" ? "green" : type === "error" ? "red" : "yellow",
    autoClose: 4000,
  });
};

export const toast = {
  success: (message: string) => show(message, "success"),
  error: (message: string) => show(message, "error"),
  warning: (message: string) => show(message, "warning"),
};
