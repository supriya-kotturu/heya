import formTypes from './formTypes';

const initialFormState = {
  firstName: '',
  lastName: '',
  workPhone: '',
  landline: '',
  workEmail: '',
  email: '',
  id: '',
  isEditing: false,
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case formTypes.SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };

    case formTypes.SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };

    case formTypes.SET_WORK_PHONE:
      return {
        ...state,
        workPhone: action.payload,
      };

    case formTypes.SET_LANDLINE:
      return {
        ...state,
        landline: action.payload,
      };

    case formTypes.SET_WORK_EMAIL:
      return {
        ...state,
        workEmail: action.payload,
      };

    case formTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case formTypes.SET_ID:
      return {
        ...state,
        id: action.payload,
      };

    case formTypes.SET_IS_EDITING:
      return {
        ...state,
        isEditing: action.payload,
      };

    case formTypes.RESET_FORM_STATE:
      return initialFormState;

    default:
      return state;
  }
};

export default formReducer;
