import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.title}</button>;
};

export default Button;
