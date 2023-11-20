
// (:currentDate) DATE FORMAT: YYYY-MM-DD
const ROUTES = {
  HOME: '/',
  LIST: "/list/:currentDate",
  ADD:"/add/:currentDate",
  EDIT: "/reminder/:currentDate/:reminderId",
}

const getEditRoute = (currentDate: string, reminderId: string) => {
  if(!reminderId || !currentDate){
    const error = reminderId ? "currentDate" : "reminderId"
    throw new Error(`${error} is required`)
  }
  return ROUTES.EDIT.replace(':currentDate', currentDate).replace(':reminderId', reminderId)
}

const getAddRoute = (currentDate: string) => {
  if(!currentDate){
    throw new Error(`currentDate is required`)
  }
  return ROUTES.ADD.replace(':currentDate', currentDate)
}

const getListRoute = (currentDate: string) => {
  if(!currentDate){
    throw new Error(`currentDate is required`)
  }
  return ROUTES.LIST.replace(':currentDate', currentDate)
}


export { ROUTES, getEditRoute, getAddRoute,getListRoute }