 function verifyMessage() {
            let message = prompt('Enter a message to verify: ');
            let resultVar = document.getElementById("result");

            if (!message) {
                resultVar.textContent = "No message entered.";
                return;
            }

            let messageUpper = message.toUpperCase();

            if (message.includes("FR") && message.includes("AI")) {
                resultVar.textContent = `The message "${message}" is legitimate.`;
            } else if (message.includes("FR")) {
                resultVar.textContent = `The message "${message}" is legitimate.`;
            } else if (message.includes("AI") && !message.includes("FR")) {
                resultVar.textContent = `The message "${message}" is legitimate.`;
            } else if (message=== "AI" || message ==='ai'){
                resultVar.textContent = `The message "${message}" is tampered with.`;
            }else {
                resultVar.textContent = `The message "${message}" is not yet encoded!`;
            }
        }
	
