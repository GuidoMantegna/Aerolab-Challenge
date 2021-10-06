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

export const postIdle = () => {
  return {
    type: "POST_IDLE"
  }
}

export const postPending = () => {
  return {
    type: "POST_PENDING"
  }
}

export const postResolved = (msg) => {
  return {
    type: "POST_RESOLVED",
    payload: msg
  }
}

export const postRejected = error => {
  return {
    type: "POST_REJECTED",
    payload: error
  }
}