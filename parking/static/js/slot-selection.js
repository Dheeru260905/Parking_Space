document.addEventListener("DOMContentLoaded", () => {
    const slotBoxes = document.querySelectorAll(".slot-box:not(.booked)");
    const totalSlotsEl = document.getElementById("total-slots");
    const totalPriceEl = document.getElementById("total-price");
    const ratePerHour = 30;
  
    slotBoxes.forEach((box) => {
      box.addEventListener("click", () => {
        if (!box.classList.contains("selected")) {
          box.classList.add("selected");
          box.querySelector("select").disabled = false;
        } else {
          box.classList.remove("selected");
          const select = box.querySelector("select");
          select.value = "";
          select.disabled = true;
        }
        updateSummary();
      });
  
      box.querySelector("select").addEventListener("change", updateSummary);
    });
  
    function updateSummary() {
      let total = 0;
      let count = 0;
  
      slotBoxes.forEach((box) => {
        if (box.classList.contains("selected")) {
          const duration = parseFloat(box.querySelector("select").value);
          if (!isNaN(duration)) {
            count++;
            let price = ratePerHour * duration;
  
            // Discount logic
            if (duration >= 4) {
              price *= 0.85; // 15% off
            } else if (duration >= 2) {
              price *= 0.9; // 10% off
            }
  
            total += price;
          }
        }
      });
  
      totalSlotsEl.textContent = `Total Selected Slots: ${count}`;
      totalPriceEl.textContent = `Total Price: ₹${total.toFixed(2)}`;
    }
  });
  