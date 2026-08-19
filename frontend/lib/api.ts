export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  message: string;
};

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080/api/v1";

function resolveUrl(input: RequestInfo | URL): RequestInfo | URL {
  if (typeof input === "string" && !input.startsWith("http")) {
    const normalizedPath = input.startsWith("/") ? input : `/${input}`;
    return `${API_BASE_URL}${normalizedPath}`;
  }

  return input;
}

export async function fetchApi<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<ApiResponse<T>> {
  const response = await fetch(resolveUrl(input), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  return response.json() as Promise<ApiResponse<T>>;
}
