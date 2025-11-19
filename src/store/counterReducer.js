const INC = "INC" 
 
const initState = {
  count: 0,
};

const counterReducer = (state=initState, action) => {
  switch (action.type) {
    case"INC" : {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    default: {
      return state;
    }
  }
};

export const incAC = () => ({ type: "INC" })

export default counterReducer