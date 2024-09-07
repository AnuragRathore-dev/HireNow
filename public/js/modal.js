// JavaScript to open modal
document.addEventListener('DOMContentLoaded', function() {
  const applyButtons = document.querySelectorAll('.open-modal');
  applyButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior
          const jobId = this.getAttribute('data-jobid'); // Get job ID from data attribute
          console.log('Apply button clicked for job ID:', jobId);
          document.getElementById("myModal").style.display = "block"; // Open modal
          // Set the form action dynamically based on the job ID
          const form = document.getElementById("myForm");
          form.action = "/applicants/" + jobId;

          // Fetch applicant data for this job and pre-fill the form fields
          fetch('/applicants/' + jobId)
          .then(response => response.json())
          .then(data => {
              document.getElementById('name').value = data.name || "";
              document.getElementById('email').value = data.email || "";
              document.getElementById('contact').value = data.contact || "";
          })
          .catch(error => console.error('Error fetching applicant data:', error));
      });
  });

    // JavaScript to handle form submission
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.action);
        xhr.onload = function() {
            console.log(xhr.responseText);
            document.getElementById("applyModal").style.display = "none";
            // Reload the page to reflect changes after form submission
            window.location.reload();
        };
        xhr.send(formData);
    });

  // JavaScript to close modal
  document.querySelector(".close").addEventListener("click", function() {
      document.getElementById("applyModal").style.display = "none";
  });

  window.addEventListener('click', function(event) {
      if (event.target == document.getElementById('applyModal')) {
          document.getElementById('applyModal').style.display = 'none';
      }
  });
});
