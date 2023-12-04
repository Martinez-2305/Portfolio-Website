// NavBar stick on scroll function
/*let isSticky = false; 

  window.addEventListener("scroll", function() {
    let navBar = document.querySelector(".nav-bar");
    if (window.scrollY > 400 && !isSticky) { 
      setTimeout(function() {
        navBar.classList.add("sticky");
        isSticky = true; 
      }, 300);
    } else if (window.scrollY <= 10 && isSticky) { 
      navBar.classList.remove("sticky");
      isSticky = false; 
    }
  });*/

  // Read More button function/expanding paragraph 
    const paragraph = document.getElementById('paragraph');
  const toggleButton = document.getElementById('toggleButton');
  const additionalContent =
    "<br><br>Outside of work and coding, my personal interests are as varied as my journey. I'm an avid football player and watcher, finding both playing on the field and cheering from the stands incredibly electrifying. You'll also often find me at the gym, a place where I channel my energy and stay motivated. I have a penchant for reading self-improvement books backed by psychological studies, constantly seeking ways to grow and develop. And to add a touch of the unconventional, I'm an enthusiastic viewer of Japanese anime, finding their narratives and artistry truly captivating. While my initial goal is to establish myself as a Frontend Developer, I'm truly thrilled about any exciting projects that come my way. Adapting and learning new tech stacks is something I thrive on.";
  let expanded = false;

  toggleButton.addEventListener('click', function() {
    if (expanded) {
      paragraph.innerHTML = "My name is Martin Kaminski, a 23-year-old with a rather intriguing journey so far. Originally from Poland, I uprooted to the UK at the age of 13, not knowing a word of English and with no choice but to learn a new language and adapt to a different culture. This was my first ever personal challenge which I handled quite well.<br><br>Before delving into my current pursuits, I earned a bachelor's degree in Sports & Exercise Science, a testament to my diverse interests. My career kicked off as a Technology Recruitment consultant, an experience that opened my eyes to the world of technology. After a year, I found myself increasingly drawn to the tech field, prompting me to embark on a new direction. The past few months have been an exhilarating ride- I successfully completed a 3-month coding bootcamp with JustIT and have been self-studying as well as working on my own personal projects.";
      toggleButton.textContent = 'Read More';
    } else {
      paragraph.innerHTML = "My name is Martin Kaminski, a 23-year-old with a rather intriguing journey so far. Originally from Poland, I uprooted to the UK at the age of 13, not knowing a word of English and with no choice but to learn a new language and adapt to a different culture. This was my first ever personal challenge which I handled quite well.<br><br>Before delving into my current pursuits, I earned a bachelor's degree in Sports & Exercise Science, a testament to my diverse interests. My career kicked off as a Technology Recruitment consultant, an experience that opened my eyes to the world of technology. After a year, I found myself increasingly drawn to the tech field, prompting me to embark on a new direction. The past few months have been an exhilarating ride- I successfully completed a 3-month coding bootcamp with JustIT and have been self-studying as well as working on my own personal projects." + additionalContent;
      toggleButton.textContent = 'Close';
    }

    expanded = !expanded; 
  });