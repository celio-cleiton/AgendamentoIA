import { EventEmitter } from "events"
import { toast } from "react-hot-toast"

const ReminderNotification = ({ title, message }: { title: string; message: string }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 max-w-md">
    <h3 className="font-bold">{title}</h3>
    <p className="text-gray-600">{message}</p>
  </div>
)

const PaymentNotification = ({ title, message }: { title: string; message: string }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 max-w-md">
    <h3 className="font-bold">{title}</h3>
    <p className="text-gray-600">{message}</p>
  </div>
)

export const notificationEmitter = new EventEmitter()

notificationEmitter
  .on('APPOINTMENT_REMINDER', (data) => {
    toast.custom(<ReminderNotification {...data} />)
  })
  .on('PAYMENT_CONFIRMATION', (data) => {
    toast.custom(<PaymentNotification {...data} />)
  })