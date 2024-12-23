"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AnimatedContainer: () => AnimatedContainer,
  fadeIn: () => fadeIn,
  fadeInUp: () => fadeInUp,
  scaleInHover: () => scaleInHover,
  scaleUp: () => scaleUp,
  useScrollAnimation: () => useScrollAnimation
});
module.exports = __toCommonJS(src_exports);

// src/animations/fade.ts
var fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
var fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// src/animations/scale.ts
var scaleUp = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};
var scaleInHover = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

// src/hooks/useScrollAnimation.ts
var import_framer_motion = require("framer-motion");
var import_react = require("react");
var useScrollAnimation = (threshold = 0.2) => {
  const ref = (0, import_react.useRef)(null);
  const isInView = (0, import_framer_motion.useInView)(ref, { once: true, amount: threshold });
  return { ref, isInView };
};

// src/components/AnimatedContainer.tsx
var import_react2 = __toESM(require("react"));
var import_framer_motion2 = require("framer-motion");
var animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  scaleUp: {
    hidden: { scale: 0 },
    visible: { scale: 1 }
  }
};
var AnimatedContainer = ({
  children,
  animation = "fadeIn",
  ...props
}) => {
  return /* @__PURE__ */ import_react2.default.createElement(
    import_framer_motion2.motion.div,
    {
      initial: "hidden",
      animate: "visible",
      variants: animations[animation],
      ...props
    },
    children
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedContainer,
  fadeIn,
  fadeInUp,
  scaleInHover,
  scaleUp,
  useScrollAnimation
});
