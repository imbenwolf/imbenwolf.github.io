$(document).ready(function () {
  $('.scrollspy').scrollSpy({
    scrollOffset: 150
  });

  Particles.init({
    selector: '.particles',
    speed: 0.25,
    maxParticles: 50,
    color: '9e9e9e',
    connectParticles: true
  });

  $('.sidenav').sidenav();
  $('.parallax').parallax();

  setupSkills();

  setupScrollfire();

  $('html, body').animate({scrollTop: 0}, 500);

}); // end of document ready

function setupSkills() {
  window.sr = ScrollReveal({reset: true});
  sr.reveal('.whyme-reasons .reason', {
    origin: 'right',
    distance: '100%',
    duration: 500
  });

  setupCircleSkills();
  setupBarSkills();
}

function setupCircleSkills() {
  var circleSkillOptions = {
    color: '#00695c',
    strokeWidth: 4,
    trailWidth: 2,
    from: {color: '#4db6ac', width: 1},
    to: {color: '#00695c', width: 4},
    duration: 1000,
    easing: 'easeInOut',
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
    }
  };

  var germanSkill = new ProgressBar.Circle('#german-skill', circleSkillOptions);
  var englishSkill = new ProgressBar.Circle('#english-skill', circleSkillOptions);
  var frenchSkill = new ProgressBar.Circle('#french-skill', circleSkillOptions);
  var hebrewSkill = new ProgressBar.Circle('#hebrew-skill', circleSkillOptions);

  sr.reveal('.skill-circle', {
    duration: 400,
    afterReveal: function (domElement) {
      switch (domElement.id) {
        case 'german-skill':
          germanSkill.animate(1);
          break;
        case 'english-skill':
          englishSkill.animate(1);
          break;
        case 'french-skill':
          frenchSkill.animate(0.75);
          break;
        case 'hebrew-skill':
          hebrewSkill.animate(0.85);
          break;
      }
    },
    afterReset: function (domElement) {
      switch (domElement.id) {
        case 'german-skill':
          germanSkill.animate(0, {duration: 0});
          break;
        case 'english-skill':
          englishSkill.animate(0, {duration: 0});
          break;
        case 'french-skill':
          frenchSkill.animate(0, {duration: 0});
          break;
        case 'hebrew-skill':
          hebrewSkill.animate(0, {duration: 0});
          break;
      }
    }
  });
}

function setupBarSkills() {
  var barSkillOptions = {
    color: '#00695c',
    strokeWidth: 2,
    trailWidth: 1,
    text: {
      style: {
        position: 'absolute',
        right: '0',
        top: '40px',
        padding: 0,
        margin: 0
      }
    },
    from: {color: '#4db6ac', width: 1},
    to: {color: '#00695c', width: 4},
    duration: 800,
    easing: 'easeInOut',
    step: function (state, bar) {
      bar.path.setAttribute('stroke', state.color);
      bar.path.setAttribute('stroke-width', state.width);

      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
      }
    }
  };

  var htmlCssSkill = new ProgressBar.Line('#htmlcss-skill', barSkillOptions);
  var jsSkill = new ProgressBar.Line('#js-skill', barSkillOptions);
  var phpSkill = new ProgressBar.Line('#php-skill', barSkillOptions);
  var databaseSkill = new ProgressBar.Line('#database-skill', barSkillOptions);
  var pythonSkill = new ProgressBar.Line('#python-skill', barSkillOptions);
  var javaSkill = new ProgressBar.Line('#java-skill', barSkillOptions);
  var csharpSkill = new ProgressBar.Line('#csharp-skill', barSkillOptions);
  var scriptingSkill = new ProgressBar.Line('#scripting-skill', barSkillOptions);

  sr.reveal('.skill-bar', {
    duration: 400,
    afterReveal: function (domElement) {
      switch (domElement.id) {
        case 'htmlcss-skill':
          htmlCssSkill.animate(0.9);
          break;
        case 'js-skill':
          jsSkill.animate(0.9);
          break;
        case 'php-skill':
          phpSkill.animate(0.75);
          break;
        case 'database-skill':
          databaseSkill.animate(0.8);
          break;
        case 'python-skill':
          pythonSkill.animate(0.8);
          break;
        case 'java-skill':
          javaSkill.animate(0.85);
          break;
        case 'csharp-skill':
          csharpSkill.animate(0.75);
          break;
        case 'scripting-skill':
          scriptingSkill.animate(0.9);
          break;
      }
    },
    afterReset: function (domElement) {
      switch (domElement.id) {
        case 'htmlcss-skill':
          htmlCssSkill.animate(0, {duration: 0});
          break;
        case 'js-skill':
          jsSkill.animate(0, {duration: 0});
          break;
        case 'php-skill':
          phpSkill.animate(0, {duration: 0});
          break;
        case 'database-skill':
          databaseSkill.animate(0, {duration: 0});
          break;
        case 'python-skill':
          pythonSkill.animate(0, {duration: 0});
          break;
        case 'java-skill':
          javaSkill.animate(0, {duration: 0});
          break;
        case 'csharp-skill':
          csharpSkill.animate(0, {duration: 0});
          break;
        case 'scripting-skill':
          scriptingSkill.animate(0, {duration: 0});
          break;
      }
    }
  });
}

function setupScrollfire() {
  $('#contact').scrollfire({
    // Offsets
    offset: 0,
    topOffset: 250,
    bottomOffset: 0,

    onBottomIn: function () {
      setActive("contact");
    }
  });

  $('#skills').scrollfire({
    // Offsets
    offset: 0,
    topOffset: 200,
    bottomOffset: -250,

    onTopOut: function () {
      setActive("skills");
    },
    onTopIn: function () {
      setActive("skills");
    }
  });

  $('#whyme').scrollfire({
    // Offsets
    offset: 0,
    topOffset: 200,
    bottomOffset: -1200,

    onTopOut: function () {
      setActive("whyme");
    },
    onTopIn: function () {
      setActive("whyme");
    }
  });

  $('#benatblockchain').scrollfire({
    // Offsets
    offset: 0,
    topOffset: 200,
    bottomOffset: -50,

    onTopOut: function () {
      setActive("benatblockchain");
    },
    onTopIn: function () {
      setActive("benatblockchain");
    }
  });

  $('#intro').scrollfire({
    // Offsets
    offset: 0,
    topOffset: -50,
    bottomOffset: 400,

    onTopOut: function () {
      changeNavbarStyle('white')
    },
    onTopIn: function () {
      resetActive();
      changeNavbarStyle('transparent')
    }
  });
}

function changeNavbarStyle(style) {
  switch (style) {
    case 'transparent':
      $('nav').removeClass('white').addClass('transparent');
      $('#logo').removeClass('small-logo').addClass('big-logo');
      break;
    case 'white':
      $('nav').removeClass('transparent').addClass('white');
      $('#logo').removeClass('big-logo').addClass('small-logo');
      break;
  }
}

function resetActive() {
  $('.link').removeClass('active');
}

function setActive(section) {
  resetActive();
  $('.' + section + '.link').addClass('active');
}