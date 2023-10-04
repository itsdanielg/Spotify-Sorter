import { describe, it, expect, vi } from "vitest";
import axios, { AxiosError } from "axios";
import { SpotifyResponseError } from "@/types";
import { FetchNextRecursiveData, fetchNextRecursive } from "./fetchNextRecursive";

describe(fetchNextRecursive, () => {
  const mockGet = vi.spyOn(axios, "get");

  describe("when fetch is unsuccessful", async () => {
    vi.resetAllMocks();

    mockGet.mockRejectedValue({
      response: {
        data: {
          error: {
            status: 401,
            message: "error caught"
          }
        } as unknown as SpotifyResponseError
      }
    } as AxiosError);
    const { data, errorResponse } = await fetchNextRecursive("", "", []);

    it("data is null", () => {
      expect(data).toBeNull();
    });

    it("errorResponse is non-null", () => {
      expect(errorResponse).not.toBeNull();
    });

    it("errorResponse is a SpotifyResponseError object", () => {
      expect(errorResponse).toHaveProperty("error");
    });

    it("errorResponse.error has status", () => {
      expect(errorResponse.error.status).toBe(401);
    });

    it("errorResponse.error has message", () => {
      expect(errorResponse.error.message).toBe("error caught");
    });
  });

  describe("when fetch is successful", async <T>() => {
    vi.resetAllMocks();

    const mockedItems = [1, 2, 3];
    mockGet.mockResolvedValue({
      data: {
        href: "",
        limit: 0,
        next: null,
        offset: 0,
        previous: null,
        total: 0,
        items: mockedItems
      } as unknown as FetchNextRecursiveData
    });
    const { data, errorResponse } = await fetchNextRecursive("", "", []);

    it("errorResponse is null", () => {
      expect(errorResponse).toBeNull();
    });

    it("data is non-null", () => {
      expect(data).not.toBeNull();
    });

    it("data.items is pushed to data", () => {
      expect(data).toEqual(mockedItems);
    });
  });
});
