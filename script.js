/* ============================================================
   Quiz Biblique — game logic
   ============================================================ */

(() => {
  'use strict';

  // ── State ──────────────────────────────────────────────────
  let shuffled = [];
  let current  = 0;
  let score    = 0;
  let answered = false;

  // ── DOM refs ───────────────────────────────────────────────
  const progressFill   = document.getElementById('progressFill');
  const progressText   = document.getElementById('progressText');
  const scoreEl        = document.getElementById('scoreDisplay');
  const categoryTag    = document.getElementById('categoryTag');
  const questionNum    = document.getElementById('questionNum');
  const questionText   = document.getElementById('questionText');
  const optionsGrid    = document.getElementById('optionsGrid');
  const feedback       = document.getElementById('feedback');
  const btnNext        = document.getElementById('btnNext');
  const gameArea       = document.getElementById('gameArea');
  const resultsScreen  = document.getElementById('resultsScreen');

  // Results DOM
  const resEmoji   = document.getElementById('resEmoji');
  const resTitle   = document.getElementById('resTitle');
  const resScore   = document.getElementById('resScore');
  const resMessage = document.getElementById('resMessage');
  const resPct     = document.getElementById('resPct');
  const resCorrect = document.getElementById('resCorrect');
  const resTotal   = document.getElementById('resTotal');
  const shareBtn   = document.getElementById('shareBtn');

  // ── Helpers ────────────────────────────────────────────────
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Init ───────────────────────────────────────────────────
  function startGame() {
    shuffled = shuffle(questions).slice(0, 15); // 15 random questions per round
    current  = 0;
    score    = 0;
    answered = false;
    updateScore();
    showQuestion();
  }

  // ── Show question ──────────────────────────────────────────
  function showQuestion() {
    answered = false;
    btnNext.disabled = true;
    feedback.className = 'feedback';

    const q = shuffled[current];
    const total = shuffled.length;

    // Progress
    const pct = Math.round((current / total) * 100);
    progressFill.style.width = pct + '%';
    progressText.textContent = `Question ${current + 1} / ${total}`;

    // Category & question
    categoryTag.textContent  = q.category;
    questionNum.textContent  = `Question ${current + 1}`;
    questionText.textContent = q.question;

    // Build options
    optionsGrid.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleAnswer(idx, q.answer));
      optionsGrid.appendChild(btn);
    });
  }

  // ── Handle answer ──────────────────────────────────────────
  function handleAnswer(selected, correct) {
    if (answered) return;
    answered = true;

    const buttons = optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(b => (b.disabled = true));

    if (selected === correct) {
      score++;
      buttons[selected].classList.add('correct');
      feedback.textContent = '✅ Bonne réponse ! Excellent travail !';
      feedback.className = 'feedback correct show';
    } else {
      buttons[selected].classList.add('wrong');
      buttons[correct].classList.add('reveal-correct');
      feedback.textContent = `❌ Mauvaise réponse. La bonne réponse était : "${shuffled[current].options[correct]}"`;
      feedback.className = 'feedback wrong show';
    }

    updateScore();
    btnNext.disabled = false;
  }

  // ── Next question ──────────────────────────────────────────
  function nextQuestion() {
    current++;
    if (current >= shuffled.length) {
      showResults();
    } else {
      showQuestion();
    }
  }

  // ── Update score display ────────────────────────────────────
  function updateScore() {
    scoreEl.textContent = `⭐ Score : ${score}`;
  }

  // ── Results ────────────────────────────────────────────────
  function showResults() {
    const total = shuffled.length;
    const pct   = Math.round((score / total) * 100);

    progressFill.style.width = '100%';
    progressText.textContent = `Quiz terminé !`;

    gameArea.style.display    = 'none';
    resultsScreen.classList.add('show');

    // Emoji & message based on score
    let emoji, title, message;
    if (pct >= 90) {
      emoji   = '🏆';
      title   = 'Parfait ! Vous êtes un expert biblique !';
      message = 'Félicitations ! Votre connaissance de la Bible est exceptionnelle. Continuez à vous perfectionner !';
    } else if (pct >= 70) {
      emoji   = '🌟';
      title   = 'Très bien ! Bonne connaissance biblique !';
      message = 'Vous avez une très bonne maîtrise de la Bible. Encore un peu d\'étude et vous serez parfait !';
    } else if (pct >= 50) {
      emoji   = '📖';
      title   = 'Bien ! Continuez vos efforts !';
      message = 'Vous avez une connaissance de base de la Bible. Continuez à lire et à étudier la Parole de Dieu !';
    } else {
      emoji   = '🙏';
      title   = 'Encouragement ! La Bible vous attend !';
      message = 'Ne vous découragez pas ! Chaque lecture de la Bible est une opportunité d\'apprendre davantage. Continuez !';
    }

    resEmoji.textContent   = emoji;
    resTitle.textContent   = title;
    resMessage.textContent = message;
    resScore.textContent   = `${score} / ${total}`;
    resPct.textContent     = pct + '%';
    resCorrect.textContent = score;
    resTotal.textContent   = total;

    // WhatsApp share link
    const shareText = encodeURIComponent(
      `🙏 J\'ai fait le Quiz Biblique et j\'ai obtenu ${score}/${total} (${pct}%) !\nTeste tes connaissances bibliques ici : ${window.location.href}`
    );
    shareBtn.href = `https://wa.me/?text=${shareText}`;
  }

  // ── Event listeners ─────────────────────────────────────────
  btnNext.addEventListener('click', nextQuestion);
  document.getElementById('btnRestart').addEventListener('click', () => {
    resultsScreen.classList.remove('show');
    gameArea.style.display = '';
    startGame();
  });

  // ── Start ──────────────────────────────────────────────────
  startGame();
})();
