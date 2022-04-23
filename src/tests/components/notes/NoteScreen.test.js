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
import NoteScreen from "../../../componentes/notes/NoteScreen";
import { activeNote, startDeleting } from "../../../actions/notes";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
  startDeleting: jest.fn(),
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
    active: {
      id: 1234,
      title: "Hola",
      body: "mundo",
      date: 0,
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe("Pruebas en <NoteScreen/>", () => {
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
