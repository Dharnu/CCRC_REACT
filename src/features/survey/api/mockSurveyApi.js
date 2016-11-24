import delay from './delay';
        const surveys = [
            {
                'id': 69,
                'survey': 'Test1',
                'date': 'October 21, 2016 12:09:07 PM',
                'signature': '- StatusSolutionAdministrator8668467272',
                'options': [
                    {
                        'id': 4,
                        'option': 'Good'
                    }, {
                        'id': 7,
                        'option': 'No'
                    }, {
                        'id': 5,
                        'option': 'Bad'
                    }, {
                        'id': 3,
                        'option': 'Excellent'
                    }
                ]
            },
            {
                'id': 70,
                'survey': 'Test2',
                'date': 'October 21, 2016 12:09:07 PM',
                'signature': '- StatusSolutionAdministrator8668467272',
                'options': [
                    {
                        'id': 4,
                        'option': 'Good'
                    }, {
                        'id': 7,
                        'option': 'No'
                    }, {
                        'id': 5,
                        'option': 'Bad'
                    }, {
                        'id': 3,
                        'option': 'Excellent'
                    }
                ]
            }
        ];


class SurveyApi {
    static getAllSurveys(){
        console.log("hello");
         return new Promise((resolve, reject) => {
            return fetch('http://10.10.1.166/CCRC_SPA/json.php').then(response => {
                if (response.ok) {
                    response.json().then(function(data) {  
                        console.log(data.surveys);  
                        resolve(Object.assign([],data.surveys));
                      });  
                } else {
                    reject(new Error('error'))
                }
            }, error => {
                reject(new Error(error.message))
            })
        })
//        return new Promise((resolve, reject)=> {
//            console.log(surveys);
//            resolve(Object.assign([],surveys));
//        });
//        
       
    }
    static submitSurveys(){
        console.log("submitSurvey");
         return new Promise((resolve, reject) => {
//            return fetch('http://10.10.1.166/CCRC_SPA/json.php').then(response => {
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
            
            return fetch('http://10.10.1.166/CCRC_SPA/submitSurvey.php', {
                method: 'post',
                body: JSON.stringify({
                        roomNo:101,id: 1,value: 'Good'
                })
            }).then(response => {
                if (response.ok) {
                    response.json().then(function(data) {  
                        console.log("Success");  
                      });  
                } else {
                    reject(new Error('error'))
                }
            }, error => {
                reject(new Error(error.message))
            })
        })
//        return new Promise((resolve, reject)=> {
//            console.log(surveys);
//            resolve(Object.assign([],surveys));
//        });
//        
       
    }
}

export default SurveyApi;