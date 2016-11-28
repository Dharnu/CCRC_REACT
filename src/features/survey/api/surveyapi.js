const surveyQuestionsURL = 'https://10.10.1.103:8443/catie/rest/device/survey/surveyQuestions.json?roomNumber=101&lastSurveyId=0';

class SurveyApi {


	static fetchCount() {
		console.log(document.querySelector('#roomno').innerHTML);
		return fetch('http://10.10.1.166/catie/rest/device/survey/surveyInit.json?roomNumber=101')
			.then(response => 
				response.json()
			)
			.catch(error => {
				debugger
			})

	}
	static fetchSurveys() {
		return fetch('http://10.10.1.166/catie/rest/device/survey/surveyQuestions.json?roomNumber=101&lastSurveyId=0')
			.then(response => 
				response.json()
			)
			.catch(error => {
				debugger
			})
	}

	submitSurveys() {

	}
}
export default SurveyApi;