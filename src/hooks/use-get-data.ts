import { useQuery } from "@tanstack/react-query";
import { ProductVariants } from "../types.ts";

export function useGetData() {
  const { status, error, data } = useQuery<ProductVariants>({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch("https://cdn.teufelaudio.com/raw/upload/v1599581070/test_assets/bikiniberlin.json");

      return await response.json();
    },
  });

  return {
    status,
    error,
    data,
  };
}
