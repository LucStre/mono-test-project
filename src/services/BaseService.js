export const BASE_URL = "http://localhost:5000";

export class BaseService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get = async (urlParams) => {
    const options = {
      method: "GET",
    };
    const request = new Request(
      BASE_URL + this.endpoint + "?" + urlParams,
      options
    );
    const response = await fetch(request);
    return response.json();
  };

  post = async (data) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    var options = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const request = new Request(BASE_URL + this.endpoint, options);
    const response = await fetch(request);
    return response;
  };

  put = async (id, data) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    var options = {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    };
    const request = new Request(BASE_URL + this.endpoint + "/" + id, options);
    const response = await fetch(request);
    return response;
  };

  delete = async (id) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      method: "DELETE",
      headers,
    };
    const request = new Request(BASE_URL + this.endpoint + "/" + id, options);
    const response = await fetch(request);
    return response;
  };
}
