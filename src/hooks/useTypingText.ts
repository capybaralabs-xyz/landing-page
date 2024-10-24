import { useState } from "react";


export default function useTypingEffect(text='', delay=100) {
	const [complete, setComplete] = useState(false)
	let index = 0
	function addNextCharacter(contentElement: HTMLElement) {
		if (index < text.length) {
			contentElement.textContent += text[index];
			index++;
			setTimeout(() => {addNextCharacter(contentElement)}, delay || Math.random() * 150 + 30);
		}else {
			setComplete(true)
		}
	}
	return {
		addNextCharacter,
		complete
	}
}