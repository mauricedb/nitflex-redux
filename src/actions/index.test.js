import { login } from ".";

describe("Actions", () => {
  it("should create a LOGIN action", () => {
    const action = login({ name: "Maurice" });

    expect(action).toEqual({
      type: "LOGIN",
      payload: {
        name: "Maurice"
      }
    });
  });
});
