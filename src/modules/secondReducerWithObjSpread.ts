import { EMPTY_OBJECT } from "../constants";
import { addLogToDOM, logger } from "../utils/logger";

const secondReduceLogger = logger("secondReducerWithObjSpread");

export const secondReducerWithObjSpread = () => {
  const splitMessage = secondReduceLogger.split();
  const startMessage = secondReduceLogger.info("start");

  addLogToDOM(splitMessage);
  addLogToDOM(startMessage);

  const data = [
    "2-A",
    "2-B",
    "2-C",
    "2-D",
    "2-E",
    "2-A",
    "2-D",
    "2-B",
    "2-G",
    "2-A",
  ];

  const result = data.reduce(
    (acc, letter, iteration) => {
      const key = letter.toString();

      const message = secondReduceLogger.info(`acc[${iteration}] ->`, acc);

      addLogToDOM(message);

      if (!acc[key]) {
        acc[key] = 1;

        return acc;
      }

      acc[key] += 1;

      return acc;
    },
    { ...EMPTY_OBJECT } as Record<string, number>
  );

  const finishMessage = secondReduceLogger.warn("finish ->", result);

  addLogToDOM(finishMessage);

  return result;
};
