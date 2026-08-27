var teamData = {
      james: {
        name: "James Cheng",
        title: "Founder — C.P.O.(c), L.I.P.E.",
        img: "https://ik.imagekit.io/79slpht9b/Hamilton%20Prosthetics/James%20Cheng.avif?updatedAt=1785424470749",
        bio: "Practicing since the 1970s. Certified prosthetist and orthotist, licentiate engineer, and expert in complex fittings."
      },
      shirley: {
        name: "Shirley Cheng",
        title: "C.P.O.(c), B.Kin",
        img: "https://ik.imagekit.io/79slpht9b/Hamilton%20Prosthetics/shirley.avif?updatedAt=1785424470766",
        bio: "Certified prosthetist and orthotist, specializing in bionic and myoelectric upper and lower extremity prosthetics, plus pediatric orthotics."
      },
      doris: {
        name: "Doris Cheng",
        title: "Registered Nurse",
        img: "https://ik.imagekit.io/79slpht9b/Hamilton%20Prosthetics/Doris%20Cheng.avif?updatedAt=1785424470482",
        bio: "Focused on patient comfort and wellbeing, funding assistance, and appointment management."
      },
      joseph: {
        name: "Joseph Griffa",
        title: "Operations & Technical Services Manager",
        img: "https://ik.imagekit.io/79slpht9b/Hamilton%20Prosthetics/joseph%20griffa.avif?updatedAt=1785424470707",
        bio: "Leads the fabrication team, manages funding applications, and oversees materials and production."
      }
    };

    document.addEventListener('DOMContentLoaded', function () {
      var modal = document.getElementById('team-modal');
      var cards = document.querySelectorAll('.team-card');
      cards.forEach(function (card) {
        card.addEventListener('click', function () {
          var data = teamData[card.getAttribute('data-member')];
          if (!data) return;
          document.getElementById('team-modal-img').src = data.img;
          document.getElementById('team-modal-name').textContent = data.name;
          document.getElementById('team-modal-title').textContent = data.title;
          document.getElementById('team-modal-bio').textContent = data.bio;
          modal.classList.add('open');
        });
      });
      document.getElementById('team-modal-close').addEventListener('click', function () {
        modal.classList.remove('open');
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.classList.remove('open');
      });
    });