import {handleRequest} from "./handler/handler";

addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event.request))
})