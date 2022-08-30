export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
export const API_KEY = "384b7556adde46deb9570986526e9003"
export const endpointPath = (country, category, page, pageSize) => `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
