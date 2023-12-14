function beliProduk() {
  Swal.fire({
    icon: "success",
    title: "Pembelian Berhasil!",
    text: "Terima kasih atas pembelian Anda!",
    confirmButtonColor: "#4CAF50",
    confirmButtonText: "OK",
  });
}

document.getElementById("toggleNav").addEventListener("click", function () {
  document.getElementById("navList").classList.toggle("hidden");
});

const { expect, test } = require("@playwright/test");

test("visit page and take screenshot", async ({ page }) => {
  // If available, we set the target URL to a preview deployment URL provided by the ENVIRONMENT_URL created by Vercel.
  // Otherwise, we use the Production URL.
  const targetUrl =
    process.env.ENVIRONMENT_URL || "https://koesmetikin-aja.vercel.app";

  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto(targetUrl);

  // Test that the response did not fail
  expect(
    response.status(),
    "should respond with correct status code"
  ).toBeLessThan(400);

  // Take a screenshot
  await page.screenshot({ path: "screenshot.jpg" });
});
