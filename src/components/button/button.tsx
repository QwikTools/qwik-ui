import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";

export type ButtonProps = QwikIntrinsicElements["button"] & {
  disabled?: boolean;
};
export const Button = component$(({ ...props }: ButtonProps) => {
  return (
    <button {...props}>
      <Slot />
    </button>
  );
});
