export const createTodo = (todo) => {
    return (dispatch, getState,{getFirebase,getFirestore}) => {

        // make async call to database
        const firestore = getFirestore();
        const profile=getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        firestore.collection('todos').add({
          ...todo,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorId: authorId,
          createdAt: new Date()
        }).then(() => {
          dispatch({ type: 'CREATE_TODO_SUCCESS' });
        }).catch(err => {
          dispatch({ type: 'CREATE_TODO_ERROR' }, err);
        });
      }
    }
  ;

  
  export const deleteTodo =(id)=>{
    return (dispatch, getState,{getFirebase,getFirestore}) => {
      // make async call to database
     
      const firestore = getFirestore();
      const firebase=getFirebase()
      const profile=getState().firebase.profile;
      const authorId=getState().firebase.auth.uid;
      const data=getState()
      console.log(data)

      firestore.collection("todos").doc(id).delete().then(() => {
        dispatch({ type: 'DELETE_TODO_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'DELETE_TODO_ERROR' }, err);
      });
    
    
    }


  };