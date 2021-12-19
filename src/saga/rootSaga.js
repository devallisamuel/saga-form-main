 import { all } from "@redux-saga/core/effects";
 import { mySaga } from "./mySaga";
 export  function* rootSaga () {
    yield all([mySaga()]);
 } 