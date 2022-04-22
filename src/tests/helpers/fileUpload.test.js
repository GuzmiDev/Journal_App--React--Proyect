import { fileUpload } from "../../helpers/fileUpload";
import "setimmediate";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY,
  api_secret: process.env.REACT_APP_API_SECRET,
  secure: process.env.REACT_APP_SECURE,
});

describe("Pruebas en fileUpload", () => {
  test("debe de cargar un archivo y retornar el URL", async () => {
    const resp = await fetch(
      "https://res.cloudinary.com/practicaldev/image/fetch/s--DYfpZirq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/990/1%2AOc2PsJ-QKOUG2I8J3HNmWQ.png"
    );
    const blob = await resp.blob();

    const file = new File([blob], "foto.png");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    // Borrar imagen por Id
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");
    cloudinary.v2.api.delete_resources(imageId, {}, () => {});
  });
  test("debe de retornar un error", async () => {
    const file = new File([], "foto.png");
    const url = await fileUpload(file);

    expect(url).toBeNull();
  });
});
