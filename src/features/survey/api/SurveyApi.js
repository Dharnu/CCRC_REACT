
class SurveyApi {
    
    static getSurveyCount(){
        var dummyUrl = 'http://10.10.1.166/CCRC_SPA/surveyCount.php';
        var surveyUrl = 'http://10.10.1.140:8080/catie/rest/device/survey/surveyInit.json?roomNumber=101';
        
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            var req = new XMLHttpRequest();
            req.open('POST', dummyUrl);

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response text
                    var res = JSON.parse(req.response);
                    //console.log(JSON.parse(req.response).surveys);
                    console.log(JSON.parse(req.response));
                    resolve(Object.assign([],res.data));
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function() {
                alert("Network error");
                //reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    }
    
    static getAllSurveys(){
        var dummySurveyListUrl = 'http://10.10.1.166/CCRC_SPA/surveyList.php';
        var surveyListUrl = 'http://10.10.1.140:8080/catie/rest/device/survey/surveyQuestions.json?roomNumber=101&lastSurveyId=0';
        
        
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            var req = new XMLHttpRequest();
            req.open('POST', dummySurveyListUrl);

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response text
                    var res = JSON.parse(req.response);
                    //console.log(JSON.parse(req.response).surveys);
                    console.log(JSON.parse(req.response));
                    resolve(Object.assign([],res.data));
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function() {
                alert("Network error");
                //reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    }
    
    static submitSurveys(){
        var dummySubmitSurveyUrl = 'http://10.10.1.166/CCRC_SPA/submitSurvey.php';
        var submitSurveyUrl = 'http://10.10.1.140:8080/catie/rest/device/survey/surveyAns.json?roomNumber=101&surveyId=1&optionId=5';

        // Return a new promise.
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('POST', urls);

            req.onload = function() {
                if (req.status == 200) {
                    // Resolve the promise with the response text
                    var res = JSON.parse(req.response);
                    console.log(JSON.parse(req.response));
                    resolve(Object.assign([],res.data));
                } else {
                    // Otherwise reject with the status text
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function() {
                alert("Network error");
                //reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    }
    
    //Using Fetch API
//    static getAllSurveys(){
//        console.log("dharani");
//        var aa = 'roomNumber=101&lastSurveyId=0';
//         return new Promise((resolve, reject) => {
//            return fetch('http://10.10.1.166/CCRC_SPA/json.php', {
//                method: 'post',
//                mode: 'cors',
//                body: JSON.stringify({
//                        roomNumber:101,lastSurveyId: 0
//                })
//            }).then(response => {
//                if (response.ok) {
//                    response.json().then(function(data) {  
//                        console.log(data.surveys);  
//                        resolve(Object.assign([],data.surveys));
//                      });  
//                } else {
//                    reject(new Error('error'))
//                }
//            }, error => {
//                reject(new Error(error))
//            })
//        })
//       
//    }
    
    
//    static submitSurveys(){
//        console.log("submitSurvey");
//         return new Promise((resolve, reject) => {
//            return fetch('http://10.10.1.166/CCRC_SPA/submitSurvey.php', {
//                method: 'post',
//                mode: 'cors',
//                body: JSON.stringify({
//                        roomNo:101,id: 1,value: 'Good'
//                })
//            }).then(response => {
//                if (response.ok) {
//                    response.json().then(function(data) {  
//                        console.log("Success");  
//                      });  
//                } else {
//                    reject(new Error('error'))
//                }
//            }, error => {
//                reject(new Error(error.message))
//            })
//        })
//       
//    }
   
    
}

export default SurveyApi;