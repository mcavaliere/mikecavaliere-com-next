export async function loadGists() {
  const fs = require("fs").promises;
  const path = require("path");

  const GIST_DATAFILE_PATH = path.join(process.cwd(), "data", "gists.json");

  const fileContents = await fs.readFile(GIST_DATAFILE_PATH, "utf8");
  const allGists = JSON.parse(fileContents);

  const gistMap = allGists.reduce((acc, gist) => {
    acc[gist.url] = gist;
    return acc;
  }, {});

  return gistMap;
}
