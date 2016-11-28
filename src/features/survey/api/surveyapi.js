export default class SurveyApi {

constructor(){
  this.url='http://10.10.1.166/CCRC_SPA/json.php';
}

 fetchSurveys(){
 return fetch(this.url)
 .then(response=>response.json())
}

submitSurveys(){

}
}
