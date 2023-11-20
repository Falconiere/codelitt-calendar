import { useForm } from "react-hook-form";

import { useHookFormMask } from "use-mask-input";
import { useEffect } from "react";
import { Reminder } from "store";
import { Button, Divider, Input, TextArea } from "components";
import { ReminderSelectColor } from "domains/reminder/components";
import { validateEnteredDate, validateEnteredTime } from "../utils";

type ReminderFormProps = {
  onSubmit: (data: Reminder) => void;
  onCancel: () => void;
  onRemove?: () => void;
  values?: Partial<Reminder>;
};

const ReminderForm = ({
  onSubmit: send,
  onCancel,
  onRemove,
  values,
}: ReminderFormProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Reminder>({
    defaultValues: {
      colorIndex: 0,
      ...values,
    },
  });
  const registerWithMask = useHookFormMask(register);
  const onSubmit = handleSubmit((data) => send(data));

  const watchedDate = watch("date");

  // This is a workaround to set the date value from the url when editing a reminder
  useEffect(() => {
    if (values?.date) {
      setValue("date", values.date);
    }
  }, [setValue, values?.date]);

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input
        label="Title"
        placeholder="Title"
        {...register("title", {
          required: {
            value: true,
            message: "This is required",
          },
          maxLength: {
            value: 30,
            message: "Title is too long",
          },
        })}
        maxLength={30}
        error={errors.title?.message}
      />
      <TextArea
        label="Description"
        placeholder="Description"
        maxLength={255}
        {...register("description", {
          required: {
            value: true,
            message: "This is required",
          },
          maxLength: {
            value: 255,
            message: "Description is too long",
          },
        })}
        error={errors.description?.message}
      />
      <div className="grid grid-cols-2 gap-8">
        <Input
          label="Date"
          placeholder="MM/DD/YYYY"
          {...registerWithMask("date", ["99/99/9999"], {
            required: { value: true, message: "This is required" },
            pattern: {
              value: /^\d{2}\/\d{2}\/\d{4}$/,
              message: "Invalid date",
            },
            validate: validateEnteredDate,
          })}
          error={errors.date?.message}
        />
        <Input
          label="Time"
          placeholder="HH:MM"
          {...registerWithMask("time", ["99:99"], {
            required: { value: true, message: "This is required" },
            pattern: {
              value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
              message: "Invalid time",
            },
            validate: (value) =>
              validateEnteredTime({
                date: new Date(watchedDate),
                time: value,
              }),
          })}
          error={errors.time?.message}
        />
      </div>
      <ReminderSelectColor
        colorIndex={watch("colorIndex")}
        onClick={(colorIdex) => {
          setValue("colorIndex", colorIdex);
        }}
      />
      <Divider />
      <div className={`flex gap-2 justify-${onRemove ? "between" : "end"}`}>
        {onRemove && (
          <Button variant="destroy" type="button" onClick={onRemove}>
            Remove
          </Button>
        )}
        <div className="flex gap-2">
          <Button variant="secondary" type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" as="button">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};
export { ReminderForm };
