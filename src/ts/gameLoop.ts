export type GameLoopListener = () => void;

export function gameLoop(listener: GameLoopListener): void {
	const typeofListener = typeof listener;
	if (typeofListener !== 'function') {
		throw new TypeError(`Game loop listener must be a function, instead got typeof "${typeofListener}".`);
	}

	function tick(): void {
		listener();
		requestAnimationFrame(tick);
	}

	requestAnimationFrame(tick);
}
