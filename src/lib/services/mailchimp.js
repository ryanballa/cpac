import base64 from 'base-64';
import { MAILCHIMP_API_KEY } from '$env/static/private';

async function registerEmail(email) {
	try {
		let dc = 'us18';
		let list_id = 'd3f1c2f56c';
		let url = `https://${dc}.api.mailchimp.com/3.0/lists/${list_id}/members`;
		let password = MAILCHIMP_API_KEY;

		let data = {
			email_address: email,
			status: 'subscribed'
		};

		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + base64.encode('anystring:' + password));

		const response = await fetch(url, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(data)
		});
		const mailchimpResponse = await response.json();
		if (mailchimpResponse) {
			return mailchimpResponse;
		}
	} catch (error) {
		return error;
	}
}

const mailchimp = {
	registerEmail
};

export default mailchimp;
