const surveyQuestionsURL = 'https://10.10.1.103:8443/catie/rest/device/survey/surveyQuestions.json?roomNumber=101&lastSurveyId=0';



class SurveyApi {


	static fetchCount() {
		console.log(document.querySelector('#roomno').innerHTML);
		return fetch('http://10.10.1.167/survey/survey.php')
			.then(response => 
				response.json()
			)
			.catch(error => {
				debugger
			})

	}
	fetchSurveys() {
		return fetch(this.url)
			.then(response => response.json())
	}

	submitSurveys() {

	}
}
export default SurveyApi;