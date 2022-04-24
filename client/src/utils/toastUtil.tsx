import { toast } from 'react-toastify'
import Md from 'react-markdown'

const toastError = (msg: string) => {
  toast.error(msg ? <Md>{msg}</Md> : 'Something went wrong', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

const toastWarning = (msg: string) => {
  toast.warn(msg ? <Md>{msg}</Md> : 'Something went wrong', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: false,
  })
}

const toastSuccess = (msg: string) => {
  toast.success(msg ? <Md>{msg}</Md> : 'Success', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}

export {
  toastError,
  toastSuccess,
  toastWarning,
}
