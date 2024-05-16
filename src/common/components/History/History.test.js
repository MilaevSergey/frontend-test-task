import React, { act } from "react";
import { render, screen } from "@testing-library/react";

import { History } from "./History";

describe("History Component", () => {
  test("renders history items correctly", () => {
    const dataLocal = [
      { name: "Item 1", data: "data1" },
      { name: "Item 2", data: "data2" },
    ];

    act(() => {
      render(<History setPdfData={jest.fn()} dataLocal={dataLocal} />);
    });

    const historyItems = screen.getAllByText(/Item \d/);
    expect(historyItems).toHaveLength(dataLocal.length);
  });
});
