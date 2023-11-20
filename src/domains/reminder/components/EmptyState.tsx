import { ReactComponent as Empty } from "assets/images/empty-calendar.svg";

const EmptyState = () => (
  <div className="flex items-center justify-center gap-4 h-full">
    <div className="flex flex-col items-center">
      <Empty />
      <p className="text-darkGray font-medium text-lg">
        No reminders registered so far
      </p>
    </div>
  </div>
);

export { EmptyState };
