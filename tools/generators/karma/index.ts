import { Tree } from '@nrwl/devkit';
import karmaGenerator from "./karma";

export default async function (tree: Tree) {
  return karmaGenerator(tree);
}
