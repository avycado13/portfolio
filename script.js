document.addEventListener("DOMContentLoaded", () => {
	const heading = document.querySelector("h1");
	if (heading) {
		heading.addEventListener("click", () => {
			heading.classList.toggle("spin");
		});
	}

	const paragraphs = document.querySelectorAll("p");
	paragraphs.forEach((paragraph) => {
		const textLength = paragraph.textContent.trim().length;
		// Longer text gets a smaller growth factor to reduce layout jump.
		const growth = Math.max(1.06, Math.min(1.3, 1.3 - textLength / 420));
		paragraph.style.setProperty("--hover-scale", growth.toFixed(2));
	});
});

function _scrambleIt(b, a, c) {
	const email = `${a}@${b}${c}`;
	const reversed = email.split("").reverse().join("");
	document.write(
		"<a onclick=\"this.href='mailto:" +
			email +
			"';return true;\" style=\"cursor:pointer;\">" +
			'<span style="unicode-bidi:bidi-override;direction:rtl;">' +
			reversed +
			"</span>" +
			"</a>",
	);
}
