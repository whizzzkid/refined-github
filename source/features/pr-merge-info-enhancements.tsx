import select from 'select-dom';
import features from '../libs/features';
import delegate from 'delegate-it';


function update() {
	const title = select('.js-issue-title').textContent;
	const number = select('.gh-header-number').textContent;
	select<HTMLTextAreaElement>('#merge_title_field').value = `${title.trim()} (${number})`;

	const description = select('.comment-form-textarea[name=\'pull_request[body]\']').textContent;
	select<HTMLTextAreaElement>('#merge_message_field').value = description;
}

function init() {
	delegate(`
		.btn-group-merge .js-details-target,
		.btn-group-squash .js-details-target
	`, 'click', update);
}

features.add({
	id: 'pr-merge-info-enhancements',
	include: [
		features.isPRConversation
	],
	load: features.onAjaxedPages,
	init
});
