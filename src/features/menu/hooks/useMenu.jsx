import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/menuApi";
import { menuItem } from "../../../data/restaurantMenu";
import { useState } from "react";

export const useMenu = () => {
  let limit = 15;
  const [page, setPage] = useState(0);
  console.log("Page=> ", page);

  const { data, isError, isPending, isFetching } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(limit, page),
    isPlaceholderData: keepPreviousData,
  });

  let totalPage = Math.ceil(data?.total / limit);
  const menuFood = data?.recipes?.map((val) => {
    const newMenu = menuItem.find((recipe) => recipe.recipeId === val.id);

    if (!newMenu) return null;

    return {
      ...val,
      price: newMenu.price,
    };
  });

  return {
    data,
    menuFood,
    isError,
    isPending,
    page,
    setPage,
    totalPage,
    isFetching,
  };
};
