import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import {atom} from 'recoil';
export const databaseConnectionAtom = atom<Firestore | null>({
    default: null,
    key:'databseConn'
});