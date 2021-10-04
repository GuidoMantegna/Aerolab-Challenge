export * from './productsActions';
export * from './userActions';

export const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQwYWY4NjcwYjY0YTAwMjE4YTQ1OWEiLCJpYXQiOjE2MzE2MjkxOTB9.bVdWQdLhGQhQaSaU4mSueNr1ZIIV8j3YHe3AZ-wcXmQ'
  }
}

export const statusPending = () => {
  return {
    type: "PENDING"
  }
}

export const statusResolved = () => {
  return {
    type: "RESOLVED"
  }
}

export const statusRejected = error => {
  return {
    type: "REJECTED",
    payload: error
  }
}

export const itemPending = () => {
  return {
    type: "ITEM_PENDING"
  }
}

export const itemResolved = (msg) => {
  return {
    type: "ITEM_RESOLVED",
    payload: msg
  }
}

export const itemRejected = error => {
  return {
    type: "ITEM_REJECTED",
    payload: error
  }
}