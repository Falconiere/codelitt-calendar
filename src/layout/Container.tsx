import { Button } from "components";
import { useState } from "react";
import { cn } from "utils/tailwind/cn";

type ContentProps = {
  reminderContent: React.ReactNode;
  calendarContent: React.ReactNode;
  footerContent: React.ReactNode;
};

const Container = ({
  reminderContent,
  calendarContent,
  footerContent,
}: ContentProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  return (
    <div className="grid sm:grid-cols-[65%,35%] rounded-md overflow-hidden sm:rounded-[40px] shadow-cardShadow">
      <div className="bg-white flex flex-col p-4 pt-6 sm:p-10  overflow-hidden">
        {reminderContent}
      </div>
      <div
        className={cn(
          "fixed h-full sm:static w-full left-0 pt-10 bg-gradient-to-b from-[#101277] to-[#421F91] flex flex-col items-center transition-all",
          "bottom-[-95%]",
          {
            "bottom-[-10%]": isCalendarOpen,
          }
        )}
      >
        <Button
          className="sm:hidden relative top-[-65px]"
          variant="primary"
          onClick={() => setIsCalendarOpen((prev) => !prev)}
        >
          {isCalendarOpen ? "Close" : "Open"} Calendar
        </Button>
        {calendarContent}
        {footerContent}
      </div>
    </div>
  );
};

export { Container };
