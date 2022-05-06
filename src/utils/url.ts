export const setUrlWithParams = (
  url: string,
  params: Record<string, string>,
) => {
  const urlParams = new URLSearchParams(params);

  return `${url}?` + urlParams;
};
