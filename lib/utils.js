import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// shadcn generated code (do not delete)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// return the last two messages from the array only 
// if messsages length > 2
export function getRecentMessages(messages) {
  return messages.length > 2 ? messages.slice(-2) : messages;
}

export function cleanMessage(message) {
  // message = ['7d676aad-f9c8-4f28-9d5e-49b8b1c39615',
  //         '63d986a8-377f-4201-92b6-7a009253be28',
  //         'assistant',
  //         `The core idea of the Nothing Phone is to provide a minimalist and transparent design that emphasizes simplicity and user exper
  // ience, while integrating innovative features and a unique aesthetic. It aims to challenge the status quo of smartphone design and create a more engaging and less cluttered user interface.\n` +
  //           '\n' +
  //           `The core idea of the iPhone is to deliver a seamless and intuitive user experience through a combination of hardware and sof
  // tware integration. It focuses on premium design, ease of use, and a robust ecosystem of apps and services, emphasizing innovation, secu
  // rity, and a high-quality user experience.`,
  //         '2025-03-02 16:44:21.330 +00:00',
  //         '2025-03-02 16:44:21.330 +00:00' ]
  
  // Write a code to sanitize the message recieved in the above format.
  // Only return the message
  const cleanMessage = message.replace(/\n\s*\+\s*\n/g, '\n').trim();
  return cleanMessage;
}
