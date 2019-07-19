
  export const createBill = (bill) => {
    console.log("bills is passed here")
    console.log(bill)
    return (dispatch, getState,{getFirebase,getFirestore}) => {

        // make async call to database
        const firestore = getFirestore();
        const profile=getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        firestore.collection('bills').add({
          ...bill,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorId: authorId,
          createdAt: new Date()
        }).then(() => {
          dispatch({ type: 'CREATE_BILL_SUCCESS' });
        }).catch(err => {
          dispatch({ type: 'CREATE_BILL_ERROR' }, err);
        });
      }
    }
  ;

  export const deleteBill =(id)=>{
    return (dispatch, getState,{getFirebase,getFirestore}) => {
      // make async call to database
     
      const firestore = getFirestore();
      const firebase=getFirebase()
      const profile=getState().firebase.profile;
      const authorId=getState().firebase.auth.uid;
      const data=getState()
      console.log(data)

      firestore.collection("bills").doc(id).delete().then(() => {
        dispatch({ type: 'DELETE_BILL_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'DELETE_BILL_ERROR' }, err);
      });
    
    
    }


  };