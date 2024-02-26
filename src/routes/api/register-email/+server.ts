import mailchimp from '$lib/services/mailchimp.js';
import { json } from '@sveltejs/kit';

export async function POST(event) {
	try {
		const request = await event.request.json();
		let result = await mailchimp.registerEmail(request.email);
		return json({
			status: result.status,
			body: result
		});
	} catch (error) {
		return json(error);
	}
}
