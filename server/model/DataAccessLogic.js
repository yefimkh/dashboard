//const pool = require('../database/conn/Pool'); 
//import { Account } from 'model/account';
const ACC = require('./account');
//import { Result } from 'model/result';
const NS = require('./noticeservice');

class DataAccessLogic {
    constructor() {
    }
    
    async validateUser(username, password) {
            
            var res = await ACC.validateAccount(username, password);
        // data validation
            return res;
    };

    async getallNotices(CondoCode){
        var res = await NS.getNoticesByCondoCode(CondoCode);
        // data validation
        return res;
    };

    async getallNoticesByCondoName(CondoName){
        var res = await NS.getNoticesByCondoName(CondoName);
        // data validation
        return res;
    };
    
    async getIconsList(){
        var res = await NS.getAllIcons();
        // data validation
        return res;
    };

    async insertNotice(condo, text, start, end, imgId){
        var res = await NS.insertNewNotice( condo, text, start, end, imgId);
        // data validation
        return res;
    };

}

module.exports = new DataAccessLogic(); 


