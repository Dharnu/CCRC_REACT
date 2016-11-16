export default class SurveyApi {

constructor(){
  this.url='http://10.10.1.167/survey/survey.php';
}

 fetchSurveys(){
 return fetch(this.url)
 .then(response=>response.json())
}

submitSurveys(){

}
}
