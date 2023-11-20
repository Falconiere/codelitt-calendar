import { v4 as uuidv4  } from 'uuid';
import { format } from 'date-fns'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Reminder = {
  id?:string,
  date: string
  time: string
  title: string
  description: string
  colorIndex: number
}

type ReminderStore = {
  reminders: Record<string, Reminder[]>
  addReminder: (reminder: Reminder) => void
  editReminder: (reminder: Reminder) => void
  deleteReminder: (id: string) => void
  filterReminders: (date: Date) => Reminder[]
  getReminderById: (id: string) => Reminder | undefined
  count:(date: Date) => number
}

const useReminderStore = create<ReminderStore>()(persist(
  (set, get) => ({
    reminders: {},
    addReminder: (reminder) => {
      const reminders = get().reminders
      const date = new Date(reminder.date)
      const id = format(date, 'yyyy-MM-dd')
      const dateReminders = reminders[id] || []
      set({
        reminders: {
          ...reminders,
          [id]: [...dateReminders, {
            ...reminder,
            id: reminder.id ?? uuidv4(),
          }],
        },
      })
    },
    editReminder: (reminder) => {
      if(reminder.id === undefined) return
      get().deleteReminder(reminder.id)
      get().addReminder(reminder)
    },
    deleteReminder(id: string) {
      const reminders = get().reminders
      for (const key in reminders) {
        const dateReminders = reminders[key]
        const index = dateReminders.findIndex((r) => r.id === id)
        if (index !== -1) {
          dateReminders.splice(index, 1)
          set({
            reminders: {
              ...reminders,
              [key]: dateReminders,
            },
          })
          
        }
      }
    },
    filterReminders(date) {
      const reminders = get().reminders
      const id = format(date, 'yyyy-MM-dd')
      let dateReminders = reminders[id]
      // ORDER REMINDERS BY TIME
      return dateReminders?.sort((a, b) => {
        const aTime = new Date(`${a.date} ${a.time}`)
        const bTime = new Date(`${b.date} ${b.time}`)
        return aTime.getTime() - bTime.getTime()
      }) ?? []
      
    },
    getReminderById(id) {
      const reminders = get().reminders
      for (const key in reminders) {
        const dateReminders = reminders[key]
        const reminder = dateReminders.find((r) => r.id === id)
        if (reminder) {
          return reminder
        }
      }
    },
    count(date) {
      const reminders = get().reminders
      const id = format(date, 'yyyy-MM-dd')
      const dateReminders = reminders[id]
      return dateReminders?.length ?? 0
    },
  }),
  {
    name: 'reminder-storage',
    storage: createJSONStorage(() => localStorage),
  },
))

export type { Reminder }
export { useReminderStore }
