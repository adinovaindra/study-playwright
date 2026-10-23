import { test, expect } from "@playwright/test";

test("My First Test", async ({ page }) => {
  expect(12).toBe(12);
});

test.skip("My Second Test", async ({ page }) => {
  expect(100).toBe(101);
});

test("My Third Test", async ({ page }) => {
  expect(2.0).toBe(2.0);
});

test("My Fourth Test", async ({ page }) => {
  expect("Adinova Indra Permana").toContain("Adinova");
  expect(true).toBeTruthy();
});

test("My Fifth Test", async ({ page }) => {
  expect("Adinova Indra Permana").toContain("Adinova");
  expect(false).toBeFalsy();
});

test("My Sixth Test", async ({ page }) => {
  expect("Adinova Indra Permana".includes("Adinova")).toBeTruthy()
});
