import { NESTED_EMPTY_OBJECT } from "../constants";
import { addLogToDOM, logger } from "../utils/logger";

const secondReduceLogger = logger("secondReduceWithNestedObjSpreadRoot");

export const secondReduceWithNestedObjSpreadRoot = () => {
  const splitMessage = secondReduceLogger.split();
  const startMessage = secondReduceLogger.info("start");

  addLogToDOM(splitMessage);
  addLogToDOM(startMessage);

  const data = [
    "fizz-A",
    "buzz-B",
    "fizz-C",
    "buzz-D",
    "fizz-E",
    "buzz-F",
    "fizz-G",
    "buzz-H",
    "fizz-A",
    "buzz-B",
    "fizz-C",
  ];

  const result = data.reduce(
    (acc, value, iteration) => {
      const [key, digit] = value.split("-");

      const message = secondReduceLogger.info(`acc[${iteration}] ->`, acc);

      addLogToDOM(message);

      if (!acc[key][digit]) {
        acc[key][digit] = 1;

        return acc;
      }

      acc[key][digit] += 1;

      return acc;
    },
    { ...NESTED_EMPTY_OBJECT } as Record<string, Record<string, number>>
  );

  const finishMessage = secondReduceLogger.warn("finish ->", result);

  addLogToDOM(finishMessage);

  return result;
};
