import { isValid } from "date-fns";
import { useParams } from "react-router-dom";

const useGetDateFromUrl = () => {
  const { currentDate } = useParams<{ currentDate?: string }>();
    if(!currentDate || !isValid(new Date(currentDate))){
      return new Date();
    }
    return new Date(`${currentDate} EDT`)
};
export { useGetDateFromUrl }