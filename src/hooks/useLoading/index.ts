import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onChangeLoading = (value: boolean) => {
    setIsLoading(value);
  };
  return {
    isLoading,
    onChangeLoading,
  };
};
