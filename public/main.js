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
