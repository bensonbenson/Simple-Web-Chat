import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import {App} from "./components/App";
import {initSocket} from "./socket/socket";
import store from "./store";

import {initListeners} from "./socket/listeners";

export const socket = initSocket();

initListeners(socket, store);

// Insert react app into top-level html DOM
render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById("root")
);