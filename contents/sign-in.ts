import { ContentProps } from "@/types/sign-in";

export const SignInContent: ContentProps = {
  text: "Hello Tailwind!",
  tailwindClasses: {
    container: "flex-1 items-center justify-center bg-white",
    text: "text-slate-800 text-2xl font-bold underline",
  },
};

export const AboutContent: ContentProps = {
  text: "Welcome to About Page!",
  tailwindClasses: {
    container: "flex-1 items-center justify-center bg-blue-100",
    text: "text-blue-800 text-2xl font-bold underline",
  },
};
