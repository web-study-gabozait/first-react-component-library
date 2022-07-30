import React from "react";

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.title}</button>;
};

export default Button;
