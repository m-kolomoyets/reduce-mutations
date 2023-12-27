import { addLogToDOM, logger } from "./utils/logger";
import { getLogsWrap, getModeButtons } from "./utils/dom";
import { getSearchParams, setSearchParams } from "./utils/searchParams";
import { firstReduceWithObjRef } from "./modules/firstReduceWithObjRef";
import { firstReduceWithObjSpread } from "./modules/firstReduceWithObjSpread";
import { secondReducerWithObjRef } from "./modules/secondReducerWithObjRef";
import { secondReducerWithObjSpread } from "./modules/secondReducerWithObjSpread";
import { firstReduceWithNestedObjRef } from "./modules/firstReduceWithNestedObjRef";
import { secondReduceWithNestedObjRef } from "./modules/secondReduceWithNestedObjRef";
import { firstReduceWithNestedObjSpreadRoot } from "./modules/firstReduceWithNestedObjSpreadRoot";
import { secondReduceWithNestedObjSpreadRoot } from "./modules/secondReduceWithNestedObjSpreadRoot";
import "./style.css";
import { firstReduceWithNestedObjSpreadRootAndNested } from "./modules/firstReduceWithNestedObjSpreadRootAndNested";
import { secondReduceWithNestedObjSpreadRootAndNested } from "./modules/secondReduceWithNestedObjSpreadRootAndNested";

const mainLogger = logger("main");

const withObjectsClickHandler = () => {
  setSearchParams("mode", "with-objects");
};

const withObjectSpreadClickHandler = () => {
  setSearchParams("mode", "with-object-spread");
};

const withNestedObjectsClickHandler = () => {
  setSearchParams("mode", "with-nested-objects");
};

const withNestedObjectSpreadRootClickHandler = () => {
  setSearchParams("mode", "with-nested-object-spread-root");
};

const withNestedObjectSpreadRootAndNestedClickHandler = () => {
  setSearchParams("mode", "with-nested-object-spread-root-n-nested");
};

window.addEventListener("DOMContentLoaded", () => {
  const logsWrap = getLogsWrap();
  const buttons = getModeButtons();

  logsWrap.innerHTML = "";

  buttons["with-objects"].addEventListener("click", withObjectsClickHandler);
  buttons["with-objects-spread"].addEventListener(
    "click",
    withObjectSpreadClickHandler
  );
  buttons["with-nested-object"].addEventListener(
    "click",
    withNestedObjectsClickHandler
  );
  buttons["with-nested-object-spread-root"].addEventListener(
    "click",
    withNestedObjectSpreadRootClickHandler
  );
  buttons["with-nested-object-spread-root-n-nested"].addEventListener(
    "click",
    withNestedObjectSpreadRootAndNestedClickHandler
  );

  const searchParams = getSearchParams();

  switch (searchParams.get("mode")) {
    case "with-objects": {
      // !!!
      // MUTATION ALERT
      const firstWithRef = firstReduceWithObjRef();
      const secondWithRef = secondReducerWithObjRef();

      const splitMessage = mainLogger.split();
      const firstMessage = mainLogger.warn(
        "firstReduceWithObjRef ->",
        firstWithRef
      );
      const secondMessage = mainLogger.warn(
        "secondReducerWithObjRef ->",
        secondWithRef
      );

      addLogToDOM(splitMessage);
      addLogToDOM(firstMessage);
      addLogToDOM(secondMessage);
      break;
    }
    case "with-object-spread": {
      // !!!
      // It works fine, when you run these firstly.
      // The effect of mutation comes if run it after the firstReduceWithObjRef and secondReducerWithObjRef.
      // To repoduce the effect of mutation, you need to run firstReduceWithObjRef and secondReducerWithObjRef functions firstly.
      const firstWithSpread = firstReduceWithObjSpread();
      const secondWithSpread = secondReducerWithObjSpread();

      const splitMessage = mainLogger.split();
      const firstMessage = mainLogger.warn(
        "firstReduceWithObjSpread ->",
        firstWithSpread
      );
      const secondMessage = mainLogger.warn(
        "secondReducerWithObjSpread ->",
        secondWithSpread
      );

      addLogToDOM(splitMessage);
      addLogToDOM(firstMessage);
      addLogToDOM(secondMessage);
      break;
    }
    case "with-nested-objects": {
      // !!!
      // MUTATION ALERT
      const firstWithNestedRef = firstReduceWithNestedObjRef();
      const secondWithNestedRef = secondReduceWithNestedObjRef();

      const splitMessage = mainLogger.split();
      const firstMessage = mainLogger.warn(
        "firstReduceWithNestedObjRef ->",
        firstWithNestedRef
      );
      const secondMessage = mainLogger.warn(
        "secondReduceWithNestedObjRef ->",
        secondWithNestedRef
      );

      addLogToDOM(splitMessage);
      addLogToDOM(firstMessage);
      addLogToDOM(secondMessage);
      break;
    }
    case "with-nested-object-spread-root": {
      // !!!
      // MUTATION ALERT
      const firstWithNestedObjSpreadRoot = firstReduceWithNestedObjSpreadRoot();
      const secondWithNestedObjSpreadRoot =
        secondReduceWithNestedObjSpreadRoot();

      const splitMessage = mainLogger.split();
      const firstMessage = mainLogger.warn(
        "firstReduceWithNestedObjSpreadRoot ->",
        firstWithNestedObjSpreadRoot
      );
      const secondMessage = mainLogger.warn(
        "secondReduceWithNestedObjSpreadRoot ->",
        secondWithNestedObjSpreadRoot
      );

      addLogToDOM(splitMessage);
      addLogToDOM(firstMessage);
      addLogToDOM(secondMessage);
      break;
    }
    case "with-nested-object-spread-root-n-nested": {
      // !!!
      // IDK why and how it works this way.
      const firstWithNestedObjSpreadRootAndNested =
        firstReduceWithNestedObjSpreadRootAndNested();
      const secondWithNestedObjSpreadRootAndNested =
        secondReduceWithNestedObjSpreadRootAndNested();

      const splitMessage = mainLogger.split();
      const firstMessage = mainLogger.warn(
        "firstReduceWithNestedObjSpreadRootAndNested ->",
        firstWithNestedObjSpreadRootAndNested
      );
      const secondMessage = mainLogger.warn(
        "secondReduceWithNestedObjSpreadRootAndNested ->",
        secondWithNestedObjSpreadRootAndNested
      );

      addLogToDOM(splitMessage);
      addLogToDOM(firstMessage);
      addLogToDOM(secondMessage);
      break;
    }

    default: {
      break;
    }
  }
});
