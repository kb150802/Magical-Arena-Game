import * as readline from 'readline';

export function rollDice(): number {
    let min = 1, max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function inputStringFromUser(prompt: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>((resolve) => {
        rl.question(prompt, (inputString: string) => {
            rl.close();
            resolve(inputString);
        });
    });
}
