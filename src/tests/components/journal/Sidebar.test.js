/**
 * @jest-environment node
 */
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import "jsdom-global/register";

import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";
import SideBar from "../../../componentes/journal/SiderBar";

jest.mock("../../../actions/auth", () => ({
  startLogout: jest.fn(),
}));

jest.mock("../../../actions/notes", () => ({
  startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: "1",
    name: "Erick",
  },
  ui: {
    loading: false,
    msg: null,
  },
  notes: {
    active: null,
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en <Sidebar/>", () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test("debe de mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar el logout", () => {
    wrapper.find("button").prop("onClick")();

    expect(startLogout).toHaveBeenCalled();
  });

  test("debe de llamar el startNewNote", () => {
    wrapper.find(".journal__new-entry").prop("onClick")();

    expect(startNewNote).toHaveBeenCalled();
  });
});
