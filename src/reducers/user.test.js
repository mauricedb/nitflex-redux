import reducer from "./user";
import { login } from "../actions";

describe("The user reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  it("should handle a LOGIN action", () => {
    const oldState = null;

    const newState = reducer(oldState, login({ name: "Maurice" }));

    expect(newState).toEqual({
      name: "Maurice"
    });
  });
});
