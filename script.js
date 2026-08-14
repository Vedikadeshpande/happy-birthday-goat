// Passcode configuration
// You can change this to any secret word or PIN you want! (Case-insensitive)
const SECRET_PASSCODE = "papais2great";

// Letters content database
// Feel free to replace these sample letters with your own personal, heartfelt messages!
const lettersDatabase = {
    "happy": {
        title: "Dear Papa,",
        body: `If you're reading this while you're happy, I hope you stop for a moment and really let yourself enjoy. Don't immediately start thinking about what needs to be done next or what could go wrong. Just be happy. You deserve to have moments like this.

I wanted you to have a letter for one of those moments because there are so many things I feel about you that I don't always say out loud.

You've always been one of the biggest sources of support and motivation in my life. No matter what I've wanted to do, you've always pushed me to believe that I could do it. Even when I doubted myself, you believed in me. You've always made me feel like I could figure things out, even when I had no idea what I was doing. I don't think I say thank you enough for that. Knowing that you believe in me has given me confidence more times than you probably realise.

When I think about my childhood, so many of my happiest and safest memories have you somewhere in them. Maybe they weren't always big or special moments, but they're the little things I remember being around you, talking to you, laughing with you, and just knowing that you were there. Those are the things that stay with me.

And Papa, I hope you know that I'm proud of you too. Not just because you're my dad, but because of the person you are. I know you've worked hard, made sacrifices, carried responsibilities, and done your best to take care of all of us. I may not always understand everything you've had to deal with, but I see how much you've done for our family, and I hope you know that it means a lot to me.

So if you're reading this on a day when everything is going right, please don't worry about tomorrow for a little while. Don't think about the next problem or the next responsibility. Sit with your happiness. Laugh a little louder. Enjoy whatever made you happy that day. You've spent so much of your life taking care of everyone else that I hope you remember to enjoy things for yourself too.

I hope there are many, many more days like this for you. And I hope that even when I'm older and life gets busy, we still have our little conversations, our arguments, our jokes, and all the completely random things that make us us.

I love you, Papa. Probably much more than I know how to properly put into words. And no matter how old I get, I'll always be grateful that I got you as my dad.`,
        signature: "Love, goldie"
    },
    "sad": {
        title: "Dear Papa,",
        body: `If you're reading this because you're having a bad day, I'm sorry. I wish I could be there with you right now, even if it was just to sit next to you and not say anything.

I don't know what happened today, and I don't know what might be bothering you. Maybe something went wrong, maybe you're tired, maybe you're worried about something, or maybe you just woke up feeling a little low. Whatever it is, I hope you don't feel like you have to hide it.

You've always been the person who tries to stay strong for everyone else. You worry about us, you take care of things, you try to find solutions, and somehow you still keep going even when things aren't easy. But you don't have to be strong all the time, Papa. You're allowed to have bad days too. You're allowed to be tired. You're allowed to feel sad without having to immediately fix everything.

I just want you to remember that you aren't alone in whatever you're going through. You have me. I might not always know exactly what to say or know how to make things better, but me and mama will always be here. Even if all you need is someone to listen, you can always come to me or mama.

And please don't ever think that you have to carry everything by yourself. I know I can't solve every problem for you, but I hope you know that you don't have to protect me from everything either. I'm your daughter, and I want to be there for you too.

If today was a bad day, let it be a bad day. You don't have to figure everything out tonight. Tomorrow can deal with tomorrow. For now, just take a breath, get some rest, and be a little kinder to yourself.

I hope you remember all the people who love you, especially when you're feeling like nobody understands. I hope you remember how much you mean to me and mama and how much of our life has you in it. So many of the things I am today are because you believed in me, supported me, and pushed me when I needed it.

And one bad day, one bad decision, one difficult phase or one thing going wrong doesn't change who you are. It doesn't take away everything you've done or all the good you've brought into our lives.

I love you, Papa. A lot. And whatever is making you sad right now, I hope it gets a little lighter soon.

And if it doesn't today, that's okay too.

We'll get through it.`,
        signature: "Love, Goldie"
    },
    "proud": {
        title: "Dear Papa,",
        body: `I hope you are taking a moment to feel proud of yourself, because we certainly are! 

Look at everything you have accomplished. You've worked tirelessly, overcome so many hurdles, and built a beautiful life filled with love, laughter, and wisdom. Your strength, honesty, and kindness inspire us every single day to be better human beings.

You are not just a father; you are our role model. We brag about you to our friends all the time because you are truly one of a kind. 

Be proud of the man, the husband, and the father you are. You are an absolute champion!`,
        signature: "Love, Goldie"
    },
    "not-appreciated": {
        title: "Dear Papa,",
        body: `I don't know what happened today, but if you're reading this because you feel like the things you do aren't being noticed, I just want you to know that I notice more than you think I do.

Maybe I don't always say it. Actually, I know I don't. I get busy, I get caught up in my own problems, and sometimes I probably take things for granted because I've grown up with you always being there. But that doesn't mean I don't see you.

I see how much you do for us.

I see how you worry about things even when you don't talk about them. I see how you try to make sure everyone is okay. I see how you keep going even when you're tired. And I know there are probably a lot of things you've done for us that we'll never even know about.

I wish I could go back and thank you for some of those things properly.

Sometimes I think the people we love the most are the people we thank the least, simply because we get so used to having them around. We assume they'll always be there. We assume they'll understand. We assume they'll know we love them.

But I don't want you to have to assume.

I want you to know.

I appreciate you. I appreciate the life you've tried to give us, the things you've sacrificed, the times you've put us before yourself, and all the little things you've done that probably seemed insignificant to you but weren't to me.

And I hope you never measure how much you're loved by how often someone says "thank you." Sometimes people are just bad at saying what they feel. I know I am.

You mean so much more to me than I probably show you on a normal day.

So if today made you feel like your efforts don't matter, please don't let one day convince you of that.

They matter to me.

You matter to me.

And I hope, whenever you forget that, you come back and read this again.

I love you, Papa. More than I say, more than I show, and probably more than you'll ever really know.`,
        signature: "Love, goldie"
    },
    "mom": {
        title: "To my partner in life, my love...",
        body: `My dearest Amol

Happy Birthday to the person who has been such an important part of my life and my journey. We have shared so many moments together happiness, struggles, laughter, disagreements, achievements and countless little memories that only we understand.

Life with you has not always been perfect, but it has been ours, and that is what makes it special.

As your wife, I just want you to know that I truly value everything we have built together. I cherish our memories, our family, and all the simple moments that make our life beautiful.

Happy Birthday, Amol. Here’s to us, to our journey, and to many more birthdays together.`,
        signature: "Your beautiful wife"
    }
};

// Track the unlocked status and pending actions
let isUnlocked = localStorage.getItem("lettersUnlocked") === "true";
let pendingLetterCategory = null;

// Initialize the page on load
document.addEventListener("DOMContentLoaded", () => {
    updateLockStatusUI();
    generateFloatingBackgroundItems();
});

// Update UI lock status badges and header buttons
function updateLockStatusUI() {
    const lockStatusBar = document.getElementById("lock-status-bar");
    const lockBtn = document.getElementById("lock-btn");

    if (isUnlocked) {
        // Update Status Badge
        lockStatusBar.innerHTML = `<span class="status-badge unlocked"><i class="fa-solid fa-lock-open"></i> Letters Unlocked</span>`;
        // Update Footer Lock Button
        lockBtn.style.display = "inline-flex";
    } else {
        // Update Status Badge
        lockStatusBar.innerHTML = `<span class="status-badge locked"><i class="fa-solid fa-lock"></i> Letters Locked</span>`;
        // Hide Footer Lock Button
        lockBtn.style.display = "none";
    }
}

// Open letter or prompt passcode modal
function openLetter(category) {
    if (isUnlocked) {
        loadAndShowLetter(category);
    } else {
        pendingLetterCategory = category;
        openModal("passcode-modal");
        document.getElementById("passcode-input").focus();
    }
}

// Load letter text and trigger modal animation
function loadAndShowLetter(category) {
    const letter = lettersDatabase[category];
    if (!letter) return;

    document.getElementById("letter-title").innerText = letter.title;
    document.getElementById("letter-body").innerText = letter.body;
    document.getElementById("letter-signature").innerText = letter.signature;

    openModal("letter-modal");
    
    // Confetti effect when reading dad letters
    confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ff758f', '#ffd166', '#a2d2ff', '#83c5be']
    });
}

// Passcode verification logic
function verifyPasscode() {
    const inputField = document.getElementById("passcode-input");
    const enteredCode = inputField.value.trim().toLowerCase();
    const errorMsg = document.getElementById("passcode-error");
    const lockIcon = document.querySelector(".animated-lock");

    if (enteredCode === SECRET_PASSCODE) {
        // Success
        isUnlocked = true;
        localStorage.setItem("lettersUnlocked", "true");
        updateLockStatusUI();
        
        // Hide error and reset input
        errorMsg.style.display = "none";
        inputField.value = "";

        // Celebratory Full-Screen Confetti!
        var duration = 2 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Close passcode modal
        closeModal("passcode-modal");

        // Open pending letter after a slight delay
        if (pendingLetterCategory) {
            setTimeout(() => {
                loadAndShowLetter(pendingLetterCategory);
                pendingLetterCategory = null;
            }, 400);
        }
    } else {
        // Fail animation & error
        lockIcon.classList.add("shake");
        errorMsg.style.display = "block";
        inputField.value = "";
        
        // Remove shake class after animation completes
        setTimeout(() => {
            lockIcon.classList.remove("shake");
        }, 500);
    }
}

// Trigger passcode check on press Enter
function checkPasscodeOnEnter(event) {
    if (event.key === "Enter") {
        verifyPasscode();
    }
}

// Toggle Lock State manually from footer
function toggleLockState() {
    isUnlocked = false;
    localStorage.removeItem("lettersUnlocked");
    updateLockStatusUI();
    
    // Wholesome lock alert
    confetti({
        particleCount: 20,
        spread: 30,
        origin: { y: 0.8 },
        colors: ['#9a8c98']
    });
}

// Modal Toggle Helpers
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
    if (modalId === "passcode-modal") {
        document.getElementById("passcode-error").style.display = "none";
        document.getElementById("hint-text").classList.add("hidden");
    }
}

// Hint Toggle logic
function toggleHint() {
    const hintText = document.getElementById("hint-text");
    hintText.classList.toggle("hidden");
}

// Polaroid Gallery Lightbox Logic
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");

    img.src = imageSrc;

    openModal("lightbox-modal");
}

function closeLightboxOverlay(event) {
    // Closes lightbox if clicked outside the image card
    if (event.target.id === "lightbox-modal") {
        closeModal("lightbox-modal");
    }
}

// Boredom Buster Random Hobby Selector
let isSelectingHobby = false;
function pickRandomHobby() {
    if (isSelectingHobby) return;
    isSelectingHobby = true;

    const cards = document.querySelectorAll(".hobby-card");
    const resultDiv = document.getElementById("picked-result");
    resultDiv.style.opacity = "0";

    // Clear previous selection
    cards.forEach(card => card.classList.remove("selected-hobby"));

    let cycleCount = 0;
    const maxCycles = 15; // Number of ticks before stopping
    let intervalTime = 80;

    function cycle() {
        // Randomly select index
        const randomIndex = Math.floor(Math.random() * cards.length);
        
        // Temporarily highlight card
        cards.forEach(c => c.classList.remove("selected-hobby"));
        cards[randomIndex].classList.add("selected-hobby");

        cycleCount++;

        if (cycleCount < maxCycles) {
            // Speed up or slow down cycling slightly for suspense
            if (cycleCount > maxCycles - 5) {
                intervalTime += 60;
            }
            setTimeout(cycle, intervalTime);
        } else {
            // Final Selection
            const chosenCard = cards[randomIndex];
            const hobbyName = chosenCard.getAttribute("data-hobby");

            resultDiv.innerHTML = `🎉 You should try: <strong>${hobbyName}</strong>!`;
            resultDiv.style.opacity = "1";

            // Explode target confetti!
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            isSelectingHobby = false;
        }
    }

    cycle();
}

// =====================================================
// Everything that touches the DOM runs after it's ready
// =====================================================
document.addEventListener('DOMContentLoaded', function () {

    // --- Vanta fog background ---
    if (typeof VANTA !== 'undefined') {
        VANTA.FOG({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xffffff,
            midtoneColor: 0x309ad4,
            lowlightColor: 0x32c7d1,
            baseColor: 0xdbfffe,
            speed: 2.50,
            blurFactor: 0.70
        });
    }

    // --- Hero scroll effect ---
    const hero = document.querySelector(".hero-section");
    const letters = document.querySelector(".letters-section");

    if (hero) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    hero.classList.remove("scrolled-away");
                } else {
                    hero.classList.add("scrolled-away");
                }
            });
        }, { threshold: 0.35 });
        heroObserver.observe(hero);
    }

    if (letters) {
        const lettersObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    letters.classList.add("letters-visible");
                    lettersObserver.unobserve(letters);
                }
            });
        }, { threshold: 0.15 });
        lettersObserver.observe(letters);
    }

    // --- Escape key closes scrapbook ---
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeScrapbook();
    });
});

// =====================================================
// SCRAPBOOK — cover + paginated notebook
// (functions stay global so onclick="" attributes work)
// =====================================================

const SB_TOTAL_PAGES = 6;
let sbCurrentPage = 0;

function openScrapbook() {
    const overlay = document.getElementById('scrapbook-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    showCover();
}

function closeScrapbook() {
    const overlay = document.getElementById('scrapbook-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(showCover, 400);
}

function showCover() {
    const cover = document.getElementById('sb-cover');
    const notebook = document.getElementById('sb-notebook');
    if (!cover || !notebook) return;
    cover.classList.remove('sb-screen--hidden');
    notebook.classList.add('sb-screen--hidden');
    sbCurrentPage = 0;
}

function sbGoToPage(pageNum) {
    const cover = document.getElementById('sb-cover');
    const notebook = document.getElementById('sb-notebook');
    if (!cover || !notebook) return;
    cover.classList.add('sb-screen--hidden');
    notebook.classList.remove('sb-screen--hidden');
    sbCurrentPage = pageNum;
    renderPage(sbCurrentPage);
}

function renderPage(pageNum) {
    const pages = document.querySelectorAll('.sb-nb-page');
    pages.forEach(p => {
        p.classList.remove('active', 'slide-out-left');
        p.classList.add('sb-hidden');
    });

    const target = document.querySelector(`.sb-nb-page[data-page="${pageNum}"]`);
    if (target) {
        target.classList.remove('sb-hidden');
        requestAnimationFrame(() => target.classList.add('active'));
        target.scrollTop = 0;
    }

    const counter = document.getElementById('sb-counter');
    if (counter) counter.textContent = `${pageNum} / ${SB_TOTAL_PAGES}`;

    const prevBtn = document.getElementById('sb-prev');
    const nextBtn = document.getElementById('sb-next');
    if (prevBtn) prevBtn.disabled = (pageNum <= 1);
    if (nextBtn) nextBtn.disabled = (pageNum >= SB_TOTAL_PAGES);
}

function sbPrev() {
    if (sbCurrentPage <= 1) return;
    sbCurrentPage--;
    renderPage(sbCurrentPage);
}

function sbNext() {
    if (sbCurrentPage >= SB_TOTAL_PAGES) return;
    sbCurrentPage++;
    renderPage(sbCurrentPage);
}