const surveys = {
		'id': 69,
		'survey': 'Test5',
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
	};

class mockSurvey {
	static fetchSurveys() {
		return new Promise((resolve, reject) => {
			resolve(Object.assign([], surveys));


		})
	}
};

export default mockSurvey;