import type { Plugin } from "obsidian";

interface CounterData {
  counter: number;
}

const DEFAULT_COUNTER: CounterData = { counter: 0 };

export async function readCounter(plugin: Plugin): Promise<number> {
  const current = (await plugin.loadData()) as Partial<CounterData> | null;
  return current?.counter ?? DEFAULT_COUNTER.counter;
}

export async function writeCounter(plugin: Plugin, next: number): Promise<void> {
  await plugin.saveData({ counter: next });
}
