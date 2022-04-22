/**
 * @jest-environment node
 */

import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import { types } from "../../types/types";

jest.mock("../../helpers/fileUpload", () => {
  return {
    fileUpload: () => {
      return Promise.resolve("Cualquierlinlk/cualquierimagen.jpg");
    },
  };
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "testing",
  },
  notes: {
    active: {
      id: "5miec5p48ZxhnNdIYwri",
      title: "titulo",
      body: "body",
    },
  },
};

let store = mockStore({
  auth: {
    uid: "testing",
  },
});

describe("Pruebas con las acciones de notes", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("debe de crear una nueva nota startNewNote", async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();

    const id = actions[0].payload.id;

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });
    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    await db.doc(`testing/journal/notes/${id}`).delete();
  });

  test("startLoadingNotes debe cargar las notas", async () => {
    await store.dispatch(startLoadingNotes("testing"));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });
  });

  test("startSaveNote debe de actualizar la nota", async () => {
    const note = {
      id: "5miec5p48ZxhnNdIYwri",
      title: "titulo",
      body: "body",
    };

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`testing/journal/notes/${note.id}`).get();

    expect(docRef.data().title).toBe(note.title);
  });

  test("startUploading debe de actualizar el url del entry", async () => {
    const file = [];
    await store.dispatch(startUploading(file));
    const docRef = await db
      .doc(`/testing/journal/notes/5miec5p48ZxhnNdIYwri`)
      .get();

    expect(docRef.data().url).toBe("Cualquierlinlk/cualquierimagen.jpg");
  });
});
