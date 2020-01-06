import { mapToDebug } from "mvi.core";

async function getEngine(type) {
  try {
    const { createView } = await import(`./${type}/engine`);
    return mapToDebug(createView);
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
