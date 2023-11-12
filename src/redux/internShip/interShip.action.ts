import { APIS_URL } from "../../constants/api";
import { useCallApi } from "../../utils/apiCall";
import { InternShip } from "../../model/inernShip";
import { FetchingInternShip } from "./interShipSlice";

const GetAll = async (dispatch: any) => {
  const api = APIS_URL.ADVANCE.filter();
  const { response, error }: any = await useCallApi({
    ...api,
    payload: {
      querySearch: `id > 0`,
      modelType: "internShips",
      ignoreAssociation: false,
    },
  });

  const data = response.data.data as InternShip[];
  if (!error && response.status === 200) {
    dispatch(FetchingInternShip(data));
    console.log("recruitments success");
  } else {
    console.log("recruitments fail");
  }
};

export const thunkFunctionInternShip = {
    GetAll,
}
