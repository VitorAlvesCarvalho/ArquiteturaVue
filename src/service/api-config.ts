import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseApiConfig {
  public http!: AxiosInstance;

  constructor(baseUrl?: string) {
    const baseURL = baseUrl || "url_base";

    this.http = axios.create({
      baseURL,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.get<T>(url, options).then(({ data }) => data);
  }

  public post<T>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.http.post(url, data, options).then(({ data }) => data);
  }

  public put<T>(
    url: string,
    data?: any,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return this.http.put(url, data, options).then(({ data }) => data);
  }

  public delete<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.delete(url, options).then(({ data }) => data);
  }
}
