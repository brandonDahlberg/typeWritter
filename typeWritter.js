const sentence = 'Im the greatest programmer ever';

let delay = 0;

const typeWritter = function () {
	for (let char of sentence) {
		setTimeout(() => {
			process.stdout.write(char);
		}, delay);

		delay = delay + 50;
	}
	setTimeout(() => {
		process.stdout.write('   Not.          ');
	}, delay + 500);
};

typeWritter();
