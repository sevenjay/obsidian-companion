import { Completer } from "./complete";
import { OpenAIComplete } from "./completers/openai/openai";
import { ChatGPTComplete } from "./completers/chatgpt/chatgpt";
import { JurassicJ2Complete } from "./completers/ai21/ai21";
import { GooseAIComplete } from "./completers/gooseai/gooseai";

export const available: Completer[] = [
	new ChatGPTComplete(),
	new OpenAIComplete(),
	new JurassicJ2Complete(),
	new GooseAIComplete(),
];
