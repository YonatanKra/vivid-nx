import { Tree } from '@nrwl/devkit';
import karmaProjectGenerator from "./karma-project";

export default async function (tree: Tree, options: any) {
  return karmaProjectGenerator(tree, options);
}
