import { ENV } from "~/config/env";
import { routeLoader$ } from "@builder.io/qwik-city";

const Api = ENV.API_URL


interface Product {
  _id: string;
  name: string;
  price: number;
  
}

const useGetProducts = routeLoader$(async (requestEvent): Promise<Product[]> => {
  const cookie = requestEvent.request.headers.get("localstoreage") ?? "";
  const accessToken = requestEvent.cookie.get("accessToken")?.value;

  const res = await fetch(`${Api}/v1/products`, {
    credentials: "include",
    headers: {
      cookie,
      "Authorization": `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch products:", res.status);
    return [];
  }

  const data: Product[] = await res.json();

  // Remove duplicates if needed
  const uniqueProducts = Array.from(
    new Map(data.map(product => [product._id, product])).values()
  );

  return uniqueProducts;
});