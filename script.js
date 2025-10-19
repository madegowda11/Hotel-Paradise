function scrollToBooking() {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('bookingMessage').textContent = "Thank you for booking! We'll contact you soon.";
  this.reset();
});