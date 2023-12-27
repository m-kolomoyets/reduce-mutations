import { EMPTY_OBJECT } from "../constants";
import { addLogToDOM, logger } from "../utils/logger";

const firstReduceLogger = logger("firstReduceWithObjSpread");

export const firstReduceWithObjSpread = () => {
  const splitMessage = firstReduceLogger.split();
  const startMessage = firstReduceLogger.info("start");

  addLogToDOM(splitMessage);
  addLogToDOM(startMessage);

  const data = [1, 2, 3, 4, 5, 1, 4, 2, 7, 1];

  const result = data.reduce(
    (acc, digit, iteration) => {
      const key = digit.toString();

      const message = firstReduceLogger.info(`acc[${iteration}] ->`, acc);

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

  const finishMessage = firstReduceLogger.warn("finish ->", result);

  addLogToDOM(finishMessage);

  return result;
};
