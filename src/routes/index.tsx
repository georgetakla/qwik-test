import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {QwikFluentInput} from './InputComponent'
 

export default component$(() => {

  // Define the signal for input value
  const inputValue = useSignal('');

  // Handle input change event
  const handleInputChange = $((event: Event) => {
    const target = event.target as HTMLInputElement;
    inputValue.value = target.value; // Update the signal value
  });
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        <h1>Qwik Fluent UI Input with Lazy Loading</h1>
        <QwikFluentInput
          placeholder="Type something..."
          value={inputValue.value}
          onChange={handleInputChange}
        />
        <p>Current Input: {inputValue.value}</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
