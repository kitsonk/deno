new Worker(new URL("./worker1.ts", import.meta.url), {
  type: "module",
});
new Worker(new URL("./worker2.ts", import.meta.url), {
  type: "module",
});
new Worker(new URL("./worker3.ts", import.meta.url), {
  type: "module",
});
new Worker(new URL("./worker4.ts", import.meta.url), {
  type: "module",
});
