// Defined a simple fetch function to retrive data from JSON files for POC.
// This can be easily refactored to fetch data from API
export const FetchData = async (
  type: "products" | "delivery"
): Promise<[any]> => {
  const data = await import(`../data/${type}`);
  return data.default;
};
