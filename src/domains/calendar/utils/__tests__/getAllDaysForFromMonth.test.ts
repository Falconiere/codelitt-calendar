import { getAllDaysForFromMonth } from "../getAllDaysForFromMonth";

describe('getAllDaysForFromMonth', () => {
  it('should return an array of days', () => {
    const days = getAllDaysForFromMonth(11, 2023);
    expect(days).toHaveLength(36);
  })
})