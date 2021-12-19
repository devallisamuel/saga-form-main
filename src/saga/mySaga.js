 import { ON_SUBMIT,SubmitAction,SUBMIT } from "../redux/action/action";
 import { select,put,takeLatest,take,call,fork } from "@redux-saga/core/effects";

 export  const mySaga = function* () {
     while(true){
        let {payload} = yield take(ON_SUBMIT);
        yield call (callBackSubmit,payload);
     }
    //  payload  = yield takeLatest(ON_SUBMIT,callFunction);
    //  console.log(payload);
 }
//  function* callFunction () {
//     yield call (callBackSubmit,payload);
//  }
 let callBackSubmit = function* (payload) {
    // let payload = select(state => state)
    // console.log(payload, 'select')
    yield put({type:SUBMIT, payload});
 }