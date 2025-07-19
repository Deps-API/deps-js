import { ofetch, FetchOptions } from 'ofetch';
import { DepsApiError, ValidationError } from './errors';

export interface ApiConfig {
  apiKey: string;
  baseUrl?: string;
}

export const createHttpClient = (config: ApiConfig) => {
  const { apiKey, baseUrl = 'https://api.depscian.tech' } = config;

  return ofetch.create({
    baseURL: baseUrl,
    headers: {
      'X-API-Key': apiKey,
    },
    async onResponseError({ response }) {
      if (response.status === 422) {
        throw new ValidationError(response.status, response.statusText, response._data);
      }
      throw new DepsApiError(response.status, response.statusText, response._data?.error_message);
    },
  });
}; 