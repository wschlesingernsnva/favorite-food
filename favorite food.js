function main() {
	const dividers = document.querySelectorAll(".divider");
	const sections = document.querySelectorAll(".roll-section");
	for (let dividerIndex = 0; dividerIndex < dividers.length; dividerIndex++) {
		let thisDivider = dividers[dividerIndex];
		let thisSection = sections[dividerIndex];
		console.log(thisDivider);
		console.log(thisSection);
		thisDivider.addEventListener("click", () => {
			const dividerClasses = thisDivider.classList;
			if (dividerClasses.contains("closed")) {
				thisSection.style.display = "";
				dividerClasses.remove("closed");
			} else {
				thisSection.style.display = "none";
				dividerClasses.add("closed");
			}
		});
	}
}

main();
