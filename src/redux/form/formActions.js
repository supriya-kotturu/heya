import formTypes from './formTypes';

export function setFirstName(firstName) {
  return {
    type: formTypes.SET_FIRST_NAME,
    payload: firstName,
  };
}

export function setLastName(lastName) {
  return {
    type: formTypes.SET_LAST_NAME,
    payload: lastName,
  };
}

export function setWorkPhone(workPhone) {
  return {
    type: formTypes.SET_WORK_PHONE,
    payload: workPhone,
  };
}

export function setLandline(landline) {
  return {
    type: formTypes.SET_LANDLINE,
    payload: landline,
  };
}

export function setWorkEmail(workEmail) {
  return {
    type: formTypes.SET_WORK_EMAIL,
    payload: workEmail,
  };
}

export function setEmail(email) {
  return {
    type: formTypes.SET_EMAIL,
    payload: email,
  };
}

export function resetFormState() {
  return {
    type: formTypes.RESET_FORM_STATE,
  };
}
