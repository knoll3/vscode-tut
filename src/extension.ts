import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "helloworld" is now active!');

	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	context.subscriptions.push(disposable);

	const helloMars = vscode.commands.registerCommand('helloworld.helloMars', () => {
		vscode.window.showInformationMessage('Hello Mars!');
	});
	context.subscriptions.push(helloMars);

	const showTime = vscode.commands.registerCommand('helloworld.showTime', () => {
		const d = new Date();
		const month = d.getMonth().toString();
		const day = d.getDate().toString();
		const year = d.getFullYear().toString();
		const date = `${month}/${day}/${year}`;
		vscode.window.showInformationMessage(`Today is ${date}`);
	});
	context.subscriptions.push(showTime);


}

export function deactivate() {}
