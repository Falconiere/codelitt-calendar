import { validateParameter } from "../utils";

describe('providers utils', () => {
  it('should return true', () => {
    expect(validateParameter.currentDate("2020-01-01")).toBe(true);
    expect(validateParameter.reminderId("5e5e5e5e5e5e5e5e5e5e5e5e")).toBe(false);
    expect(validateParameter.reminderId("5e5e5e5e5e5e5e5e5e5e5e5eawdasda")).toBe(false);
  });
});