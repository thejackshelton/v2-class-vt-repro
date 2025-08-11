import { component$, useTask$ } from "@qwik.dev/core";
import { SeoCheck } from "seord";

export default component$(() => {
	useTask$(() => {
		new SeoCheck({
			title: "dummy title",
			htmlText: "dummy htmlText",
			keyword: "dummy keyword",
			subKeywords: ["dummy subKeyword1", "dummy subKeyword2"],
			metaDescription: "dummy metaDescription",
			languageCode: "en",
			countryCode: "us",
		});
	});

	return <></>;
});
