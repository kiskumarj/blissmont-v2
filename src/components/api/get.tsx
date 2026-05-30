import { ENV } from "~/config/env";
import { routeLoader$ } from "@builder.io/qwik-city";

const Api = ENV.API_URL;

interface Customer {
  ID: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  gst: string;
  is_active: boolean;
}

interface Product {
  ID: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  sku: string;
  category: string;
  is_active: boolean;
}

export const useGetCustomers = routeLoader$(async (requestEvent): Promise<Customer[]> => {
  const cookie = requestEvent.request.headers.get("localstoreage") ?? "";
  const accessToken = requestEvent.cookie.get("accessToken")?.value;

  const res = await fetch(`${Api}/v1/customers`, {
    credentials: "include",
    headers: {
      cookie,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch customers:", res.status);
    return [];
  }

  const json = await res.json();
  const data: Customer[] = json.data ?? [];

  const uniqueCustomers = Array.from(
    new Map(data.map((customer) => [customer.ID, customer])).values(),
  );

  return uniqueCustomers;
});

export const useGetProducts = routeLoader$(async (requestEvent): Promise<Product[]> => {
  const cookie = requestEvent.request.headers.get("localstoreage") ?? "";
  const accessToken = requestEvent.cookie.get("accessToken")?.value;

  const res = await fetch(`${Api}/v1/products`, {
    credentials: "include",
    headers: {
      cookie,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch products:", res.status);
    return [];
  }

  const json = await res.json();
  const data: Product[] = json.data ?? [];

  const uniqueProducts = Array.from(
    new Map(data.map((product) => [product.ID, product])).values(),
  );

  return uniqueProducts;
});
