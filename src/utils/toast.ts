import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (type: string, data: string) => {
  switch (type) {
    case "success":
      toast.success(data, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "error":
      toast.error(data, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "warning":
      toast.warning(data, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "info":
      toast.info(data, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};
