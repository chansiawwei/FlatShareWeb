const initState={}

const todoReducer=(state=initState , action)=>{
    switch(action.type){
        case  'CREATE_TODO_SUCCESS' :
            console.log('created todo', action.todo);
            return state;

        case  'CREATE_TODO_ERROR' :
            console.log('created todo ERROR', action.err);
            return state;

        case  'DELETE_TODO_SUCCESS' :
                console.log('DELETE BILL SUCCESS', action.todo);
                return state;
    
        case  'DELETE_TODO_ERROR' :
                console.log('DELETE BILL ERROR', action.err);
                return state;

        default:
             return state;

    }

}

export default todoReducer