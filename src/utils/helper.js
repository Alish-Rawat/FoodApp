export function filterData(searchInput, allrestaurants) {
  const filterD = allrestaurants.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterD;
}
