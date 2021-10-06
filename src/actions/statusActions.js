export const statusPending = () => {
  return {
    type: "PENDING",
  };
};

export const statusResolved = () => {
  return {
    type: "RESOLVED",
  };
};

export const statusRejected = (error) => {
  return {
    type: "REJECTED",
    payload: error,
  };
};

export const postIdle = () => {
  return {
    type: "POST_IDLE",
  };
};

export const postPending = () => {
  return {
    type: "POST_PENDING",
  };
};

export const postResolved = (msg) => {
  return {
    type: "POST_RESOLVED",
    payload: msg,
  };
};

export const postRejected = (error) => {
  return {
    type: "POST_REJECTED",
    payload: error,
  };
};
