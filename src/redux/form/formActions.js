import formTypes from "./formTypes";

export function setFirstName(e) {
  return {
    type: formTypes.SET_FIRST_NAME,
    payload: e.target.value,
  };
}

export function setLastName(e) {
  return {
    type: formTypes.SET_LAST_NAME,
    payload: e.target.value,
  };
}

export function setWorkPhone(e) {
  return {
    type: formTypes.SET_WORK_PHONE,
    payload: e.target.value,
  };
}

export function setLandline(e) {
  return {
    type: formTypes.SET_LANDLINE,
    payload: e.target.value,
  };
}

export function setWorkEmail(e) {
  return {
    type: formTypes.SET_WORK_EMAIL,
    payload: e.target.value,
  };
}

export function setEmail(e) {
  return {
    type: formTypes.SET_EMAIL,
    payload: e.target.value,
  };
}

export function resetFormState() {
  return {
    type: formTypes.RESET_FORM_STATE,
  };
}
