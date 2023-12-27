import { getLogsWrap } from "./dom";

export const logger = (tag: string) => {
  return {
    split() {
      const mesage = `[${tag}]: ----------------------------------------`;
      console.log(mesage);

      return mesage;
    },
    warn(...args: unknown[]) {
      const message = [`[${tag}]: `, ...args];
      console.warn(...message);

      return message;
    },
    error(...args: unknown[]) {
      const message = [`[${tag}]: `, ...args];
      console.error(...message);

      return message;
    },
    info(...args: unknown[]) {
      const message = [`[${tag}]: `, ...args];

      console.info(`%c[${tag}]: `, "color: skyblue", ...args);

      return message;
    },
  };
};

export const addLogToDOM = (...message: unknown[]) => {
  const logsWrap = getLogsWrap();

  const log = document.createElement("pre");

  log.textContent = JSON.stringify(message);

  logsWrap.appendChild(log);
};
