import { FirebaseApp } from 'firebase/app';
import {atom} from 'recoil';
export const databaseConnectionAtom: any = atom({
    default: {},
    key:'databseConn'
});