import { useLocation } from 'react-router-dom';

type Params = string | string[];

export const useParams = (keys: Params) => {
  let result: unknown | string;

  const params = useLocation();

  const isArray = Array.isArray(keys);

  if (isArray) {
    const paramsResult = keys.reduce((acc, key) => {
      const value = new URLSearchParams(params.search).get(key);

      return (acc = { ...acc, [key]: value });
    }, {});

    result = paramsResult;
  } else {
    const keyResult = new URLSearchParams(params.search).get(keys);

    result = keyResult;
  }

  return result;
};
