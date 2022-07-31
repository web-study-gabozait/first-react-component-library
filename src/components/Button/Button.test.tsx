import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("<Button/>", () => {
  test("버튼 컴포넌트 렌더링 확인", () => {
    render(<Button title="버튼" />);
  });
});
