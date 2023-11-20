import { reminderColors } from "constants/reminderColors";
import { cn } from "utils/tailwind/cn";

type ReminderSelectColorProps = {
  colorIndex: number;
  onClick: (index: number) => void;
};
const ReminderSelectColor = ({
  colorIndex,
  onClick,
}: ReminderSelectColorProps) => {
  return (
    <div>
      <p className="text-darkerGray text-lg">Color</p>
      <div className={`reminder-colors grid grid-cols-10 gap-2`}>
        {reminderColors.map((color, idx) => (
          <button
            type="button"
            style={{ backgroundColor: color }}
            className={cn(
              "h-10 rounded-md border-darkerGray border-[1px] focus:outline-none",
              idx === colorIndex &&
                "ring-2 ring-offset-2 ring-offset-[#101277] ring-white"
            )}
            key={`reminder-color-${String(idx)}`}
            onClick={() => onClick(idx)}
          >
            <span className="sr-only">{color}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export { ReminderSelectColor };
