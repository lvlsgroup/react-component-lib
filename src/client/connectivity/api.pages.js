import httpRequest from './httpRequest';
import { getBaseRequestConfig } from './baseRequestConfig';

const LOCAL_BASE_PATH =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:3091/mockApi`
    : `http://localhost:3091/mockApi`; // `http://localhost:3000/mockApi`

export function fetchPageContent(page) {
  const baseRequestConfig = getBaseRequestConfig();
  const url = `${LOCAL_BASE_PATH}${page}`;

  const requestConfig = Object.assign({}, baseRequestConfig, {
    url: url,
  });

  return httpRequest(requestConfig);
}
