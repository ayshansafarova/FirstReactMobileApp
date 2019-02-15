import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyADUCWuBxOd1_KKFTh3v7P_e7f6I5_9lnQ",
    authDomain: "firstreactnativeapp-8220d.firebaseapp.com",
    databaseURL: "https://firstreactnativeapp-8220d.firebaseio.com",
    projectId: "firstreactnativeapp-8220d",
    storageBucket: "firstreactnativeapp-8220d.appspot.com",
    messagingSenderId: "937681258730"
  };


export default class ConfigStore {
    constructor(props){
        firebase.initializeApp(config)
        this.splashTime = 1000
        this.splashImg = require('../../images/splash.jpeg')
        this.loginImg = require('../../images/login.jpg')
    }
    get SplashImg(){
        return this.splashImg
    }
    
    get SplashTime(){
        return this.splashTime
    }

    get LoginImg(){
        return this.LoginImg
    }
}

