const initState={}
const billReducer=(state=initState , action)=>{
    switch(action.type){
        case  'CREATE_BILL_SUCCESS' :
            console.log('created BILL', action.todo);
            return state;

        case  'CREATE_BILL_ERROR' :
            console.log('created BILL ERROR', action.err);
            return state;

         case  'DELETE_BILL_SUCCESS' :
                console.log('DELETE BILL SUCCESS', action.todo);
                return state;
    
        case  'DELETE_BILL_ERROR' :
                console.log('DELETE BILL ERROR', action.err);
                return state;

        default:
             return state;

    }
}

export default billReducer