import { MODE_BUTTONS } from "../constants";

export const getButtonsWrap = () => {
  return document.getElementById("mode-buttons-wrap")!;
};

export const getLogsWrap = () => {
  return document.getElementById("logs-wrap")!;
};

export const getModeButtons = () => {
  const buttonsWrap = getButtonsWrap();

  buttonsWrap.innerHTML = "";

  const buttons = {} as Record<string, HTMLButtonElement>;

  Object.values(MODE_BUTTONS).forEach(({ label, value }) => {
    const button = document.createElement("button");

    button.innerText = label;
    button.id = value;

    buttons[value] = button;

    buttonsWrap.appendChild(button);
  });

  return buttons;
};
