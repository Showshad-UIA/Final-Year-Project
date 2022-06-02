import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCXQ02gcd9l-CDdr3Dyfp6GLhn51hIns4k",
	authDomain: "fresh-goods-delivery-system.firebaseapp.com",
	databaseURL:
		"https://fresh-goods-delivery-system-default-rtdb.firebaseio.com",
	projectId: "fresh-goods-delivery-system",
	storageBucket: "fresh-goods-delivery-system.appspot.com",
	messagingSenderId: "730440360302",
	appId: "1:730440360302:web:53181393926a8a1c75617f",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
