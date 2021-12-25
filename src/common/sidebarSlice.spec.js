import reducer, { toggleMobileSidebar } from "./sidebarSlice";
describe("sidebar reducer", () => {
  const initialState = {
    status: "closed",
  };
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      status: "closed",
    });
  });

  it("sets status to open on calling toggleMobileSidebar", () => {
    const state = reducer(initialState, toggleMobileSidebar());
    expect(state.status).toEqual("open");
  });
});
