import {gameLoop} from './gameLoop';

document.addEventListener('DOMContentLoaded', main);

function main(): void {
	const canvas: HTMLCanvasElement = document.getElementById('game-canvas') as HTMLCanvasElement;
	const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

	let r = 0;
	gameLoop(() => {
		r += 0.01;

		const x = 300;
		const y = 200;

		const w = 200;
		const h = 100;

		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.translate(x, y);
		ctx.rotate(r);
		{
			ctx.fillStyle = '#f00';
			ctx.fillRect(-w / 2, -h / 2, w, h);
		}
		ctx.rotate(-r);
		ctx.translate(-x, -y);
	});
}
