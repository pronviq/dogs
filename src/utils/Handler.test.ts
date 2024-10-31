import Handler from "./Handler";

describe("Handler", () => {
  it("должен добавлять 'cm' к строке для метода getHeight", () => {
    expect(Handler.getHeight("180")).toBe("180 cm");
  });

  it("должен добавлять 'kg' к строке для метода getWeight", () => {
    expect(Handler.getWeight("75")).toBe("75 kg");
  });
});
