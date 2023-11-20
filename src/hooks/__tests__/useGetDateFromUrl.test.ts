
import { useGetDateFromUrl } from '../useGetDateFromUrl';

const currentDate = '2023-11-20';
const mockedDate = new Date(`${currentDate} EDT`)
jest.spyOn(global, 'Date').mockImplementation(() => {
  return mockedDate;
});

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ currentDate: undefined }),
}));


describe('useGetDateFromUrl', () => {
  

  it('should return a date object', () => {
 
    jest.doMock('react-router-dom', () => ({
      useParams: jest.fn().mockReturnValue({ currentDate }),
    }));
    

    const date = useGetDateFromUrl();
    expect(date.getDate()).toEqual(mockedDate.getDate());
    

  });

  it('should return a date as new Date()', () => {
    const now = new Date();
    const date = useGetDateFromUrl();
    expect(date.getDate()).toEqual(now.getDate());
  });
});