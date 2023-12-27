export const getSearchParams = () => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams;
};

export const setSearchParams = (key: string, value: string) => {
  const searchParams = getSearchParams();

  searchParams.set(key, value);

  window.history.pushState(
    null,
    "",
    window.location.pathname + "?" + searchParams.toString()
  );

  window.location.reload();
};
