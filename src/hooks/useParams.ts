import { useLocation } from 'react-router-dom';
import { F } from 'ts-toolbelt';

type Params = string | string[] | unknown;

type Result<T extends Params> = T extends string ? string : string[];

export const useParams = <TParams extends Params>(keys: F.Narrow<TParams>) => {
  let result: Result<TParams>;

  const params = useLocation();

  const isArray = Array.isArray(keys);

  if (isArray) {
    const paramsResult = keys.reduce((acc, key) => {
      const value = new URLSearchParams(params.search).get(key);

      return (acc = { ...acc, [key]: value });
    }, {});

    result = paramsResult as Result<TParams>;
  } else {
    const keyResult = new URLSearchParams(params.search).get(keys as string);

    result = keyResult as Result<TParams>;
  }

  return result;
};
