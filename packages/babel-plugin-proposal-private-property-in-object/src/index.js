/* eslint-disable @babel/development/plugin-name */

import { declare } from "@babel/helper-plugin-utils";
import {
  createClassFeaturePlugin,
  FEATURES,
} from "@babel/helper-create-class-features-plugin";

export default declare((api, options) => {
  api.assertVersion(7);

  return createClassFeaturePlugin({
    name: "proposal-class-properties",

    feature: FEATURES.privateIn,
    loose: options.loose,

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("privateIn");
    },
  });
});
