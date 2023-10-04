import { describe, it, expect, vi } from "vitest";
import axios, { AxiosError } from "axios";
import { SpotifyResponseError, SpotifyUser } from "@/types";
import { fetchCurrentUser } from "./fetchCurrentUser";

describe(fetchCurrentUser, () => {
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
    const { data, errorResponse } = await fetchCurrentUser("token");

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

  describe("when fetch is successful", async () => {
    vi.resetAllMocks();

    mockGet.mockResolvedValue({
      data: {
        id: "",
        display_name: "",
        images: {},
        type: "user"
      } as unknown as SpotifyUser
    });
    const { data, errorResponse } = await fetchCurrentUser("token");

    it("errorResponse is null", () => {
      expect(errorResponse).toBeNull();
    });

    it("data is non-null", () => {
      expect(data).not.toBeNull();
    });

    describe("data is a SpotifyUser object", () => {
      const mockedUser: SpotifyUser = {
        id: "",
        display_name: null,
        images: [],
        type: "user"
      };

      Object.keys(mockedUser).forEach((key) => {
        it(`data has ${key} property`, () => {
          expect(data).toHaveProperty(key);
        });
      });
    });
  });
});
