import { useQuery } from "@tanstack/react-query";
import { genAccountServiceUrl } from "@/src/services/apiUrls";
import axiosInst from "../../Interceptors";
import { OrderInfo } from "@interface/market";
interface UseGetOrders {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  refetch: () => void;
  data: OrderInfo[] | undefined;
}
const handleGetData = async (accountId: string): Promise<OrderInfo[]> => {
  try {
    const res = await axiosInst.get(genAccountServiceUrl(accountId, "order"));
    const { s, ec, d } = res.data;
    if (s === "ok") {
      return d;
    }
    throw new Error(ec);
  } catch (e) {
    throw e;
  }
};

export const useGetOrders = (accountId: string): UseGetOrders => {
  const { isError, isSuccess, isLoading, refetch, data } = useQuery({
    queryKey: ["orders", accountId],
    queryFn: () => handleGetData(accountId),
    enabled: !!accountId,
  });

  return { isError, isSuccess, isLoading, refetch, data };
};
