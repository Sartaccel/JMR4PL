(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();
      
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const mobileNumber = document.getElementById("mobileNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const specialNote = document.getElementById("specialNote").value.trim();
      
        if (firstName && lastName && mobileNumber && email && specialNote) {
          alert("Form submitted successfully!", "success");
        } else {
          alert("Please fill in all fields.", "error");
        }
      });
      
      function showToast(message, type) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.className = `toast show ${type}`;
      
        setTimeout(() => {
          toast.className = "toast";
        }, 3000); // Hide toast after 3 seconds
      }

    

      document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
    
        if (name && email && subject && message) {
            alert("Form submitted successfully!", "success");
            this.reset(); // Reset form after successful submission
        } else {
            alert("Please fill in all fields.", "error");
        }
    });
    
    function showToast(message, type) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.className = `toast show ${type}`;
    
        setTimeout(() => {
            toast.className = "toast";
        }, 3000); // Hide toast after 3 seconds
    }
    
    
})(jQuery);




        

  