import init, { run_metapixel_app } from './pkg/metapixel.js';
async function main() {
   await init('/pkg/twopattern_bg.wasm');
   run_metapixel_app();
}
main()
