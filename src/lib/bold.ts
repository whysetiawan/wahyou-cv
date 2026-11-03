// Turns **text** into <strong> for set:html. Input is our own data, never user input.
export function bold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-ink">$1</strong>');
}
