import { useState, useMemo, useCallback } from "react";
import { ProductModel } from "../model/ProductModel";

const DEFAULT_MAX_LENGTH = 150;

export const useDescription = (items: ProductModel[]) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );

  const modifiedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        shortDescription:
          item.description.length > DEFAULT_MAX_LENGTH
            ? `${item.description.slice(0, DEFAULT_MAX_LENGTH)}...`
            : item.description,
      })),
    [items]
  );

  const toggleExpanded = useCallback((id: number) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return { modifiedItems, expandedItems, toggleExpanded };
};
