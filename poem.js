/* ---------------------------------------------------------
   Home page poem.
   Picks one line of text at random from the Impossibly Awesome
   Nothing posts (text read from the images) and sets it as large
   as possible, packed into the empty space around the page's
   content. Clicking it goes to the Impossibly Awesome Nothing page.
   --------------------------------------------------------- */
(function () {
  var LINES = [
  "Why dont skeletons like parties?",
  "They have no body to dance with.",
  "Political action should become, in my view, synonymous with the analytical venture-and vice versa!",
  "I need the words and language vaccine asap",
  "Back to living Life in my little World of letters And words",
  "I am taking a break from posting poems.",
  "We've heard your demands.",
  "The Impossibly Awesome Protocol is on its way.",
  "Early access for IA+ members.",
  "Sign up, lock in, and never look back.",
  "We love the New You",
  "That thing at the beach, Bath of grey light, Made me sick to my stomach",
  "Images have never been true",
  "Techno, rave, apocalypse",
  "Bereft seagull tines, mound of wet.",
  "It sits on clean ground, one dares not approach.",
  "Bundle of white tubes stretch out of a hidden center, piercing the ground at intervals of a few yards.",
  "Nothing happens here.",
  "Count the entry holes.",
  "I'm on Gods timing not mine.",
  "Common words that can be said simply",
  "SOME DAYS YOU WAKE UP AND IMMEDIATELY START TO SMILE.",
  "NOTHING IN PARTICULAR IS RIGHT IT'S JUST THE SUSPICION THAT FORCES ARE ALIGNING QUIETLY AND THERE WILL BE PEACE.",
  "Agnes Martin collapses tomorrow.",
  "It is not a shopping list when you own everything Deform memory object to taste.",
  "Turn away from objects of no discernible form.",
  "The weapon doesn't make a sound.",
  "Why speak for a shared cigarette",
  "Find an open space for Felix Gonzalez-Torres.",
  "Seeking the discomfort of endings",
  "Your vibe Is being screenshot",
  "So you find yourself drawn inept by factors beyond your control, which existed before you and, importantly, without cause.",
  "But thank God you have writing, and definition, and class at the end of the day.",
  "If you stop writing you will die.",
  "Tomorrow never comes.",
  "Do you understand what I mean by that?",
  "Thank you Steve Jobs sounding board.",
  "Thank you black mirror poem machine.",
  "Tomorrow tastes esperanza.",
  "Today you're Eileen Myles.",
  "Tomorrow who knows.",
  "The last chapter in the history of the world",
  "Text is beauty Image is pain",
  "We all feel what poetry is.",
  "Poetry is one of our foundation stones, but we cannot talk about it.",
  "Poetry leads to the same place as all forms of eroticism- to the blending and fusion of separate objects.",
  "Poetry is eternity; the sun matched with the sea.",
  "Nowadays backyard Cold Guinness.",
  "It's that simple",
  "For something to die, life must find its own closure.",
  "Because it rushes from one sensation to the next, even perception is now incapable of closure.",
  "Only contemplative lingering is capable of closure.",
  "The closure of the eyes is emblematic of contemplative closure.",
  "The flood of images and information makes closure of the eyes impossible.",
  "Today Hi everyone, I'm just writing to say that today felt like the first day of my life.",
  "Energy is Eternal Delight",
  "Poems are like jokes",
  "You must accept that even those private beauties which you hold so close will be seized and sold before your very eyes.",
  "\"Isn't it great: I can enjoy this moment without having to choke myself to death\".",
  "I'll take a personal example.",
  "I steer my strategies along these kinds of lines.",
  "And I'm not a pariah and I'm just me.",
  "Impossibly awesome notes app apology",
  "An Idiom has survived being laid upon the grindstone of history and criticism.",
  "It must fit within ones mouth without notice.",
  "A good idiom need not be articulated correctly, nor with any amount of finesse.",
  "A set of viral words which convey a meaning separate from their literal combination, or in other words, magic.",
  "Would you attend an impossibly awesome dinner",
  "AN EXTRAORDINARY FEELING WHEN PARTS OF YOUR BODY ARE TOUCHED FOR THE FIRST TIME.",
  "IM THINKING OF THE SENSATIONS FROM SEX AND SURGERY.",
  "Inquire via direct message.",
  "Love; Any Truths?",
  "life google map",
  "At what moment did you know you were fierce",
  "The real flex is yourself becoming",
  "In my perfect world, each thing is contained in a hard plastic shell with a hinge, and closes with a satisfying click.",
  "Focus on the tactile ecstasy the next time you pop open your ear plugs case.",
  "Make note of the way the foam feels between your thumb and middle fingers.",
  "HOPE THINGS HAVE BEEN GOING WELL IN MY ABSENCE.",
  "I MUST SAY MY HOPE HAS WANED.",
  "I'M FEARING THE WORST.",
  "PRIVATELY, REGRESSIVE AESTHETICS HAVE BECOME PUNISHABLE BY DEATH I'M HAVING NIGHTMARES ABOUT THE ARROWS AGAIN.",
  "What's your favorite number?",
  "Idea for a house",
  "My life is just like that movie inception from a few years back.",
  "The small fascism of a pomodoro timer, 25 minutes could save you a lifetime.",
  "How can I show work? without instagram.",
  "You want this because you lack direction or perhaps what you thought was direction was really desire, the paper cut, the hangnail.",
  "The important thing is that you have rules for yourself, ones so strict not even a saint could perfectly adhere.",
  "You will not seek perfection, you will be the very definition of perfect, the house.",
  "Two Ativan poem (one to take, one to give it)",
  "the image don't even matter anymore",
  "You Are In Control.",
  "You need to throw your \"Smart\" phone away.",
  "The quotations are to indicate sarcasm, also know as irony.",
  "In fact, there's nothing smart about it, if you know what I mean.",
  "An iPod for music, of which you will need to replace the battery and modify the faceplate.",
  "A kindle for reading you will use calibre to side load books onto the kindle so you do not support Amazon.",
  "Lie back and think of Surgery.",
  "You cant beat that with a stick.",
  "When Australia send its people their not sending their best",
  "If all day you're told what to do, you might find fantasy in giving instruction.",
  "For example, picture a never ending ledger floating on the back of your eyelids.",
  "I'm thinking about buying a bike.",
  "A bike is nice because I can go further and faster than by foot.",
  "Additionally, I don't need to rely on the train or bus, which sometimes arrives late, or not at all!",
  "Furthermore, riding a bike requires me to use my leg muscles, which will make me healthier and stronger.",
  "Finally, a bike is a chic accessory which might help me look cooler to other people.",
  "The word ‘and' is enough, so use it frequently.",
  "English takes only 26 letters to convert its everything.",
  "You treat me better now because my hair is short.",
  "The eternal wet thump Leaves you dull and restless",
  "Please be patient, I'm still new to this",
  "Took a deep breath Counted to 3.",
  "I like when the DJ lets the music stop.",
  "It feels like on a roller coaster.",
  "I become filled with so much adrenaline, I can hardly bring myself to clap, waiting for the music to start again.",
  "My great American novel is simply one beer away",
  "I start my day trading stones; the right-to-left motion calms my nervous system, like standing in wool socks on frozen soil.",
  "It's a new career for me, forcing different materials into contact with one another.",
  "As a geometer, the new shapes shortage affects my bottom line.",
  "Take, for instance, something explosive like a fruiting bramble.",
  "You are perfect.",
  "You will be able to improve your work-life balance.",
  "A new passion will ignite your creativity.",
  "A creature that can do anything Make a machine.",
  "And a machine to make the machine.",
  "And evil that can run itself a thousand years, no need to tend it.",
  "Unfortunately, I already sold that poem.",
  "A sincere thank you to everyone who has believed and trusted in viral poetry.",
  "The definition of insanity is doing the same thing over and over and expecting different results.",
  "DIAGNOSIS: You are an image addict.",
  "No, worse, you have become dependent on Pictures for your survival.",
  "You are on the moodboard",
  "There's blood on some of the keys",
  "Reminder Don't think too hard about something",
  "The girls are doing things that are so deeply traditional and extremely modern.",
  "Later, you hold the black stone between your index and middle fingers.",
  "Up here, the wind don't stop singin'.",
  "looking for the face had, before the world was made...",
  "Impossibly awesome nothing is now a website you can visit at impossiblyaweso.me Right now the site can only display text.",
  "Let me know if you would like to also see images, and I can work to add this feature.",
  "I would also like to have a feature For user submitted poems Thats all for now, Thank you as always!",
  "\"You know what that is?\" he asked, pushing me against the glass enclosure of the bus stop.",
  "But my mental equilibrium had been shattered, Out on the street, I felt vertiginous, only half there.",
  "Tomorrow we will have 80 degrees This line you may use to take a breath.",
  "Rules do not relate to kindness nor grace, nor are you in trouble.",
  "God forbid you give yourself some structure.",
  "You paid for this and will honor that. I hope you know what I mean by rules, and I hope you know you're not in trouble.",
  "Abbreviations are okay in the event that they save time, or convey something more than the totality of the letters they represent.",
  "You would not believe the things I have done to shorten a phrase.",
  "I dare you to combine words differently, which might alienate you, particularly given your new set of rules you are following.",
  "You will find the rules make a lot more sense when we're speaking the same language.",
  "There is no action performed which ignores beauty and truth.",
  "You probably have come to this conclusion on your own."
];

  var layer = document.getElementById("poem");
  var measure = document.getElementById("poem-measure");
  var site = document.querySelector(".wrap");
  if (!layer || !measure || !site) return;

  var MARGIN = 24;      // breathing room at the window edges
  var STEP = 2;         // vertical scan step, px
  var MIN_FONT = 22;
  var INK = 0.90;       // height of the letters (ascender top to descender bottom), in em
  var BASE_TOP = 0.1545; // line-box top to ascender top, in em (line-height: 1)
  var line = "", words = [], widths = [];

  /* every line of text on the page, as tight rectangles */
  function obstacles() {
    var out = [], sx = window.scrollX, sy = window.scrollY;
    var walker = document.createTreeWalker(site, NodeFilter.SHOW_TEXT, null);
    var n, range = document.createRange();
    while ((n = walker.nextNode())) {
      if (!/\S/.test(n.nodeValue)) continue;
      range.selectNodeContents(n);
      var rs = range.getClientRects();
      for (var i = 0; i < rs.length; i++) {
        var r = rs[i];
        if (r.width > 0 && r.height > 0) out.push({ l: r.left + sx, t: r.top + sy, r: r.right + sx, b: r.bottom + sy });
      }
    }
    return out;
  }

  /* free horizontal stretches in the band [y0, y1] */
  function free(ob, y0, y1, left, right) {
    var iv = [], i;
    for (i = 0; i < ob.length; i++) if (ob[i].b > y0 && ob[i].t < y1) iv.push([ob[i].l, ob[i].r]);
    iv.sort(function (a, b) { return a[0] - b[0]; });
    var out = [], x = left;
    for (i = 0; i < iv.length; i++) {
      if (iv[i][0] > x) out.push([x, Math.min(iv[i][0], right)]);
      x = Math.max(x, iv[i][1]);
      if (x >= right) break;
    }
    if (x < right) out.push([x, right]);
    return out.filter(function (a) { return a[1] > a[0]; });
  }

  /* try to set every word at font size f: each goes in the first gap it fits, in reading order */
  function place(f, base, W, H) {
    var pad = 9 + 0.035 * f, inkH = INK * f, gap = 0.04 * f, sp = 0.238 * f;
    var left = MARGIN, right = W - MARGIN, top = MARGIN, bottom = H - MARGIN;
    var ob = base.map(function (o) { return { l: o.l - pad, t: o.t - pad, r: o.r + pad, b: o.b + pad }; });
    var res = [], cy = top, cx = left;
    for (var i = 0; i < widths.length; i++) {
      var w = widths[i] * f / 100, found = false, px = 0, py = 0;
      for (var pass = 0; pass < 2 && !found; pass++) {
        if (pass === 0 && i === 0) continue;
        var y0 = pass === 0 ? cy : (i === 0 ? top : cy + inkH + gap);   // pass 0: same row, to the right; pass 1: next rows down
        for (var y = y0; y + inkH <= bottom; y += STEP) {
          var iv = free(ob, y, y + inkH, left, right);
          var xmin = pass === 0 ? cx : left;
          for (var k = 0; k < iv.length; k++) {
            var a = Math.max(iv[k][0], xmin);
            if (iv[k][1] - a >= w) { px = a; py = y; found = true; break; }
          }
          if (found || pass === 0) break;
        }
      }
      if (!found) return null;
      res.push({ x: px, y: py });
      ob.push({ l: px, t: py, r: px + w, b: py + inkH + gap });
      cy = py; cx = px + w + sp;
    }
    return res;
  }

  function choose() {
    line = LINES[Math.floor(Math.random() * LINES.length)];
    words = line.split(" ");
    measure.textContent = "";
    widths = words.map(function (w) {
      var s = document.createElement("span");
      s.className = "poem-word"; s.style.fontSize = "100px"; s.textContent = w;
      measure.appendChild(s);
      return s.getBoundingClientRect().width;
    });
  }

  function render() {
    var W = document.documentElement.clientWidth, H = window.innerHeight, base = obstacles();
    var best = null, f = 0;
    for (var tries = 0; tries < 60 && !best; tries++) {
      if (!place(MIN_FONT, base, W, H)) { H += 120; continue; }        // phones: the content fills the screen, so the page grows
      var lo = MIN_FONT, hi = 600;
      while (hi - lo > 0.4) { var mid = (lo + hi) / 2; if (place(mid, base, W, H)) lo = mid; else hi = mid; }
      f = lo;
      for (var d = 0.5; d <= 12; d += 0.5) { if (place(lo + d, base, W, H)) f = lo + d; else if (d > 3) break; }
      best = place(f, base, W, H);
    }
    if (!best) return;
    layer.style.height = H + "px";
    document.body.style.minHeight = H + "px";
    layer.textContent = "";
    best.forEach(function (p, i) {
      var s = document.createElement("span");
      s.className = "poem-word";
      s.style.fontSize = f + "px";
      s.style.left = p.x + "px";
      s.style.top = (p.y - BASE_TOP * f) + "px";
      s.textContent = words[i];
      layer.appendChild(s);
    });
  }

  var timer;
  window.addEventListener("resize", function () { clearTimeout(timer); timer = setTimeout(render, 80); });
  choose();
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(render);
})();
