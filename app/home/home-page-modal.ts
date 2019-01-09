import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Page } from 'tns-core-modules/ui/page';
let closeCallback;

export function onLoaded(args: EventData) {
	let page = args.object;
}

export function onShownModally(args) {
	const context = args.context;
	closeCallback = args.closeCallback;

	const page = args.object as Page;
	page.bindingContext = { vehicles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9] };
}

export function tapClose() {
	const username = "username";
	const password = "password";

	closeCallback(username, password);
}