export default class ConfigStore {
    constructor(props){
        this.splashTime = 1000
        this.splashImg = require('../../images/splash.jpeg')
    }
    get SplashImg(){
        return this.splashImg
    }
    
    get SplashTime(){
        return this.splashTime
    }
}

