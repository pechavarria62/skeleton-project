import { prisma } from '../prisma';

async function main() {
	//
	for (let i = 0; i < 200; i++) {
		//
	}
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
