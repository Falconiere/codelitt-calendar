import { getAddRoute, getEditRoute, getListRoute } from "../routes";

describe('routes', () => {
    it('should correct path for getAddRoute', () => {
      const currentDate = `2020-01-01`
      const url = getAddRoute(currentDate);
      expect(url).toEqual(`/add/${currentDate}`);
    });

    it('should correct path for getListRoute', () => {
      const currentDate = `2020-01-01`
      const url = getListRoute(currentDate);
      expect(url).toEqual(`/list/${currentDate}`);
    });

    it('should correct path for getEditRoute', () => {
      const currentDate = `2020-01-01`
      const reminderId = `5e5e5e5e5e5e5e5e5e5e5e5e`
      const url = getEditRoute(currentDate,reminderId);
      expect(url).toEqual(`/reminder/${currentDate}/${reminderId}`);
    });

   
})