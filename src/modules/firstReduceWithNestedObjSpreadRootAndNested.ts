import { NESTED_EMPTY_OBJECT_SPREAD } from "../constants";
import { addLogToDOM, logger } from "../utils/logger";

const firstReduceLogger = logger("firstReduceWithNestedObjSpreadRootAndNested");

export const firstReduceWithNestedObjSpreadRootAndNested = () => {
  const splitMessage = firstReduceLogger.split();
  const startMessage = firstReduceLogger.info("start");

  addLogToDOM(splitMessage);
  addLogToDOM(startMessage);

  const data = [
    "fizz-1",
    "buzz-2",
    "fizz-3",
    "buzz-4",
    "fizz-5",
    "buzz-6",
    "fizz-7",
    "buzz-8",
    "fizz-1",
    "buzz-2",
    "fizz-3",
  ];

  const result = data.reduce(
    (acc, value, iteration) => {
      const [key, digit] = value.split("-");

      const message = firstReduceLogger.info(`acc[${iteration}] ->`, acc);

      addLogToDOM(message);

      if (!acc[key][digit]) {
        acc[key][digit] = 1;

        return acc;
      }

      acc[key][digit] += 1;

      return acc;
    },
    { ...NESTED_EMPTY_OBJECT_SPREAD } as Record<string, Record<string, number>>
  );

  const finishMessage = firstReduceLogger.warn("finish ->", result);

  addLogToDOM(finishMessage);

  return result;
};
