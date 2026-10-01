import { preferredProjectOrder, techStackMapping } from "./projectConfig";

describe("project configuration", () => {
  it("keeps GlobalLodge as the first featured project", () => {
    expect(preferredProjectOrder[0]).toBe("GlobalLodge");
  });

  it("defines the expected technology stack for HealthNexus", () => {
    expect(techStackMapping.HealthNexus).toEqual(
      expect.arrayContaining(["React", "Firebase", "Tailwind CSS"])
    );
  });
});
