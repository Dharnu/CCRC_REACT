
class Api {


	static fetchDocRepoDetails() {
		return fetch('http://10.10.1.120:8080/catie/rest/device/document/display.json?roomNumber=1001&deviceId=5&refName=FridayFlyer_26')
			.then(response => 
				response.json()
			)
			.catch(error => {
				debugger
			})

	}
}
export default Api;