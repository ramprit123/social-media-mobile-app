export type ContentProps = {
    text: string;
    tailwindClasses: {
      container: string;
      text: string;
    };
  };
  
  export interface SignInProps {
    content: ContentProps;
  }