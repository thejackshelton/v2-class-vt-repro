import { component$, useSignal, useVisibleTask$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import SEO from "~/components/seo/seo";

export default component$(() => {
	const isConditional = useSignal(false);

	useVisibleTask$(() => {
		isConditional.value = true;
	});

	return (
		<>
			{isConditional.value ? <SEO /> : null}
			<h1>Hi 👋</h1>
			<div>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
