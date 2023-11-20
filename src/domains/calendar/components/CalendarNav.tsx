import { ReactComponent as ChevronLeft } from "assets/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "assets/icons/chevron-right.svg";
import { ReactComponent as Bullet } from "assets/icons/bullet.svg";

type CalendarNavProps = {
  onNext: () => void;
  onPrev: () => void;
};
const CalendarNav = ({ onNext, onPrev }: CalendarNavProps) => (
  <div className="flex items-center pt-8">
    <button type="button" onClick={onPrev}>
      <ChevronLeft />
    </button>
    <Bullet />
    <button type="button" onClick={onNext}>
      <ChevronRight />
    </button>
  </div>
);

export { CalendarNav };
