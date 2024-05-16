import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { ConverterForm } from "./ConverterForm";

describe("ConverterForm Component", () => {
  test("calls onSubmit function", () => {
    const setPdfDataMock = jest.fn();
    const setDataLocalMock = jest.fn();
    const dataLocal = [];

    render(
      <ConverterForm
        setPdfData={setPdfDataMock}
        setDataLocal={setDataLocalMock}
        dataLocal={dataLocal}
      />
    );

    dataLocal.push({ name: "Sample text", data: "Sample text" });

    const textarea = screen.getByRole(/text/i);
    fireEvent.change(textarea, { target: { value: "Sample text" } });

    expect(dataLocal[0].data).toBe("Sample text");
    expect(dataLocal[0].name).toBe("Sample text");
  });
});
