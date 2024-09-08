import React from "react";
import { render, screen } from "@testing-library/react";

import TestRunHistoryPage from "../TestRunHistoryPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders testRunHistory page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TestRunHistoryPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("testRunHistory-datatable")).toBeInTheDocument();
    expect(screen.getByRole("testRunHistory-add-button")).toBeInTheDocument();
});
