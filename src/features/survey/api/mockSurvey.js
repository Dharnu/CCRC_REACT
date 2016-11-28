const surveys = [{
		'id': 69,
		'survey': 'Test1',
		'date': 'October 21, 2016 12:09:07 PM',
		'signature': '- StatusSolutionAdministrator8668467272',
		'options': [{
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
		}]
	},
	{
		'id': 70,
		'survey': 'Test2',
		'date': 'October 21, 2016 12:09:07 PM',
		'signature': '- StatusSolutionAdministrator8668467272',
		'options': [{
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
		}]
	}];
const count ={"data":2,"status":"success"};
class mockSurvey {
	static fetchSurveys() {
		return new Promise((resolve, reject) => {
			resolve(Object.assign([], surveys));


		})
	}

	 static fetchCount(){
	 	
	 }
};

export default mockSurvey;