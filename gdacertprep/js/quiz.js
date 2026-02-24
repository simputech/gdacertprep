/* =============================================
   GDACertPrep.com — Quiz Engine (25 Questions)
   ============================================= */

const QUIZ_DATA = [
  {
    q: "Which SQL clause is used to filter rows AFTER a GROUP BY aggregation?",
    options: ["WHERE", "HAVING", "FILTER", "ORDER BY"],
    answer: 1,
    explanation: "HAVING filters grouped results, while WHERE filters individual rows before grouping."
  },
  {
    q: "In a spreadsheet, what does the VLOOKUP function do?",
    options: [
      "Adds up a range of cells",
      "Looks up a value in a table and returns a value in the same row",
      "Counts cells that match a condition",
      "Finds the average of a column"
    ],
    answer: 1,
    explanation: "VLOOKUP searches the first column of a range for a match and returns a value from a specified column in the same row."
  },
  {
    q: "What does 'data cleaning' primarily involve?",
    options: [
      "Deleting all duplicate rows from a dataset",
      "Identifying and correcting inaccurate, incomplete, or irrelevant data",
      "Creating visualizations from raw data",
      "Exporting data to a CSV file"
    ],
    answer: 1,
    explanation: "Data cleaning ensures data is accurate, complete, consistent, and ready for analysis."
  },
  {
    q: "Which chart type is BEST for showing the distribution of a single numeric variable?",
    options: ["Bar chart", "Pie chart", "Histogram", "Line chart"],
    answer: 2,
    explanation: "Histograms display the frequency distribution of a continuous numeric variable across defined intervals."
  },
  {
    q: "In SQL, what does SELECT DISTINCT do?",
    options: [
      "Selects all rows including duplicates",
      "Returns only unique values",
      "Selects rows sorted alphabetically",
      "Filters NULL values"
    ],
    answer: 1,
    explanation: "SELECT DISTINCT removes duplicate values from the result set, returning only unique rows."
  },
  {
    q: "What is the difference between qualitative and quantitative data?",
    options: [
      "Qualitative data is more accurate than quantitative",
      "Qualitative describes categories/qualities; quantitative is numerical and measurable",
      "Quantitative data is always collected from surveys",
      "There is no meaningful difference"
    ],
    answer: 1,
    explanation: "Qualitative data describes characteristics (e.g., color, opinion), while quantitative data represents measurable numbers."
  },
  {
    q: "In Tableau or data visualization tools, what is a 'dimension'?",
    options: [
      "A calculated metric like sum or average",
      "A categorical field used to segment or group data",
      "The physical size of a chart",
      "A type of SQL join"
    ],
    answer: 1,
    explanation: "Dimensions are categorical variables (like Region or Product Name) used to slice and segment measures."
  },
  {
    q: "What SQL JOIN returns only rows that have matching values in BOTH tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"],
    answer: 3,
    explanation: "INNER JOIN returns only the rows where there is a match in both tables."
  },
  {
    q: "Which of these best describes a 'stakeholder' in a data project?",
    options: [
      "The person who cleans the data",
      "Anyone with an interest in or affected by the project's outcomes",
      "The database administrator",
      "The tool used to visualize data"
    ],
    answer: 1,
    explanation: "Stakeholders are individuals or groups who have an interest in the project — they may sponsor it, use the results, or be impacted by decisions made from it."
  },
  {
    q: "What does the acronym 'RDBMS' stand for?",
    options: [
      "Relational Database Management System",
      "Rapid Data Business Management Software",
      "Row-Defined Big-Data Model System",
      "Referenced Database Migration Script"
    ],
    answer: 0,
    explanation: "RDBMS stands for Relational Database Management System — examples include MySQL, PostgreSQL, and SQL Server."
  },
  {
    q: "In a spreadsheet, what does the formula =COUNTIF(A1:A10, \">50\") do?",
    options: [
      "Sums all values in A1:A10 greater than 50",
      "Counts how many cells in A1:A10 contain a value greater than 50",
      "Averages the values greater than 50",
      "Returns TRUE if any value exceeds 50"
    ],
    answer: 1,
    explanation: "COUNTIF counts cells meeting a specified condition. In this case, it counts cells with values greater than 50."
  },
  {
    q: "Which type of bias occurs when data is collected from a sample that doesn't represent the full population?",
    options: ["Confirmation bias", "Sampling bias", "Availability bias", "Observer bias"],
    answer: 1,
    explanation: "Sampling bias happens when the sample used to collect data doesn't accurately reflect the population, leading to skewed results."
  },
  {
    q: "What does the SQL ORDER BY clause do by default?",
    options: [
      "Sorts results in descending order",
      "Sorts results randomly",
      "Sorts results in ascending order",
      "Groups results by the specified column"
    ],
    answer: 2,
    explanation: "Without specifying ASC or DESC, ORDER BY sorts results in ascending order (A–Z, 0–9, oldest–newest)."
  },
  {
    q: "What is the purpose of a pivot table in data analysis?",
    options: [
      "To create visual charts and graphs",
      "To summarize, reorganize, and aggregate data from a larger table",
      "To import data from external sources",
      "To apply formatting to a spreadsheet"
    ],
    answer: 1,
    explanation: "Pivot tables allow analysts to summarize large datasets, calculate aggregates, and reorganize data without writing formulas manually."
  },
  {
    q: "Which of these is an example of 'dirty data'?",
    options: [
      "A column with consistent date formatting",
      "A spreadsheet with no missing values",
      "A field containing both '25' and 'twenty-five' for the same data type",
      "A table with a clear primary key"
    ],
    answer: 2,
    explanation: "Inconsistent formatting — like mixing numeric and text representations of the same value — is a classic example of dirty data that must be cleaned before analysis."
  },
  {
    q: "In the data analysis process, what happens FIRST?",
    options: [
      "Analyze the data",
      "Ask the right questions and define the problem",
      "Create visualizations",
      "Share findings with stakeholders"
    ],
    answer: 1,
    explanation: "Google's data analysis framework starts with Ask — defining the business problem and the questions analysis needs to answer."
  },
  {
    q: "What is a 'null' value in a dataset?",
    options: [
      "A value of zero",
      "A negative number",
      "The absence of any value — a missing or unknown entry",
      "A text field with no characters"
    ],
    answer: 2,
    explanation: "NULL represents the absence of data, not zero or an empty string. Handling NULLs correctly is critical in SQL and data cleaning."
  },
  {
    q: "Which visualization type is BEST for comparing values across multiple categories?",
    options: ["Scatter plot", "Bar chart", "Line chart", "Area chart"],
    answer: 1,
    explanation: "Bar charts are ideal for comparing discrete categories side-by-side, making differences easy to see at a glance."
  },
  {
    q: "What does the SQL GROUP BY clause do?",
    options: [
      "Sorts rows by a specified column",
      "Groups rows that share the same value so aggregate functions can be applied",
      "Joins two tables together",
      "Filters out NULL values"
    ],
    answer: 1,
    explanation: "GROUP BY collapses rows with the same value in specified columns into single rows, allowing aggregate functions like SUM() and COUNT() to work on each group."
  },
  {
    q: "Which spreadsheet function returns the middle value of a sorted dataset?",
    options: ["AVERAGE", "MODE", "MEDIAN", "MID"],
    answer: 2,
    explanation: "MEDIAN returns the middle value when a dataset is sorted, which is less affected by outliers than the AVERAGE (mean)."
  },
  {
    q: "In data storytelling, what is the PRIMARY goal?",
    options: [
      "To create the most complex visualization possible",
      "To communicate insights clearly so the audience can make informed decisions",
      "To display as much raw data as possible",
      "To demonstrate technical proficiency in tools"
    ],
    answer: 1,
    explanation: "Data storytelling combines data, visuals, and narrative to communicate insights in a way that drives understanding and action — not to showcase technical skill."
  },
  {
    q: "What SQL keyword is used to combine results from two SELECT statements, removing duplicates?",
    options: ["JOIN", "MERGE", "UNION", "CONCAT"],
    answer: 2,
    explanation: "UNION combines results from two queries and removes duplicates. Use UNION ALL if you want to keep duplicates."
  },
  {
    q: "In Tableau, what is the difference between a 'measure' and a 'dimension'?",
    options: [
      "Measures are text fields; dimensions are numeric",
      "Measures are numeric aggregates (e.g., sales); dimensions are categorical labels (e.g., region)",
      "They are interchangeable terms",
      "Dimensions are calculated; measures are raw fields"
    ],
    answer: 1,
    explanation: "Measures are numeric values that can be aggregated (summed, averaged), while dimensions are categorical attributes used to slice the data."
  },
  {
    q: "What is the purpose of a 'data dictionary'?",
    options: [
      "A glossary that defines each column, its data type, and its meaning in a dataset",
      "A tool for converting data formats",
      "A chart that maps relationships between tables",
      "A method for encrypting sensitive data"
    ],
    answer: 0,
    explanation: "A data dictionary documents what each field means, its data type, acceptable values, and relationships — essential for understanding unfamiliar datasets."
  },
  {
    q: "Which of the following BEST describes the role of a junior data analyst?",
    options: [
      "Building machine learning models from scratch",
      "Managing the company's server infrastructure",
      "Collecting, cleaning, and analyzing data to help inform business decisions",
      "Writing front-end code for web applications"
    ],
    answer: 2,
    explanation: "Junior analysts primarily handle data collection, cleaning, basic analysis, and visualization to support business decision-making — exactly the skills covered in the Google Data Analytics Certificate."
  }
];

// Topic mapping for study guide personalization
const TOPIC_MAP = {
  0:  'SQL',   1:  'Spreadsheets', 2:  'Data Cleaning',
  3:  'Visualization', 4: 'SQL',  5:  'Data Types',
  6:  'Visualization', 7: 'SQL',  8:  'Stakeholders',
  9:  'SQL',   10: 'Spreadsheets', 11: 'Data Bias',
  12: 'SQL',   13: 'Spreadsheets', 14: 'Data Cleaning',
  15: 'Analysis Process', 16: 'Data Cleaning', 17: 'Visualization',
  18: 'SQL',   19: 'Spreadsheets', 20: 'Data Storytelling',
  21: 'SQL',   22: 'Visualization', 23: 'Data Documentation',
  24: 'Career Skills'
};

// ---- QUIZ STATE ----
let current = 0;
let score = 0;
let answered = false;
let wrongTopics = [];
let userAnswers = [];

// ---- DOM REFS ----
const quizWrapper   = document.getElementById('quiz-wrapper');
if (!quizWrapper) { /* not on quiz page */ }
else {
  const progressFill  = document.getElementById('quiz-progress');
  const counterEl     = document.getElementById('quiz-counter');
  const questionEl    = document.getElementById('quiz-question');
  const optionsEl     = document.getElementById('quiz-options');
  const explanationEl = document.getElementById('quiz-explanation');
  const nextBtn       = document.getElementById('quiz-next');
  const scoreDisplay  = document.getElementById('quiz-score-display');
  const resultsSection = document.getElementById('quiz-results');
  const quizSection    = document.getElementById('quiz-main');

  function renderQuestion() {
    const q = QUIZ_DATA[current];
    const pct = (current / QUIZ_DATA.length) * 100;
    progressFill.style.width = pct + '%';
    counterEl.textContent = `Question ${current + 1} of ${QUIZ_DATA.length}`;
    questionEl.textContent = q.q;
    scoreDisplay.textContent = `Score: ${score}/${current}`;
    explanationEl.classList.remove('show');
    explanationEl.textContent = '';
    nextBtn.style.display = 'none';
    answered = false;

    optionsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.innerHTML = `<span class="quiz-option-letter">${String.fromCharCode(65+i)}</span> ${opt}`;
      btn.addEventListener('click', () => selectAnswer(i));
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(idx) {
    if (answered) return;
    answered = true;
    const q = QUIZ_DATA[current];
    userAnswers.push({ q: current, chosen: idx, correct: q.answer });
    const options = optionsEl.querySelectorAll('.quiz-option');
    options[idx].classList.add(idx === q.answer ? 'correct' : 'incorrect');
    options[q.answer].classList.add('correct');
    if (idx === q.answer) {
      score++;
    } else {
      wrongTopics.push(TOPIC_MAP[current]);
    }
    scoreDisplay.textContent = `Score: ${score}/${current + 1}`;
    explanationEl.textContent = q.explanation;
    explanationEl.classList.add('show');
    nextBtn.style.display = 'inline-block';
    nextBtn.textContent = current === QUIZ_DATA.length - 1 ? 'See My Results →' : 'Next Question →';
  }

  nextBtn.addEventListener('click', () => {
    if (!answered) return;
    current++;
    if (current >= QUIZ_DATA.length) {
      showResults();
    } else {
      renderQuestion();
    }
  });

  function showResults() {
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';

    const pct = Math.round((score / QUIZ_DATA.length) * 100);
    document.getElementById('result-score').textContent = score;
    document.getElementById('result-total').textContent = QUIZ_DATA.length;
    document.getElementById('result-pct').textContent = pct + '%';

    // Score circle
    const circle = document.getElementById('score-circle');
    circle.style.setProperty('--pct', pct + '%');

    // Performance message
    const msgEl = document.getElementById('result-message');
    if (pct >= 80) msgEl.textContent = "Excellent work! You're well-prepared for the certificate. Our study guide can help you ace the remaining gaps.";
    else if (pct >= 60) msgEl.textContent = "Good foundation! A few topic areas need strengthening before your exam.";
    else msgEl.textContent = "You've identified your key focus areas — that's exactly what this quiz is for. Our personalized study guide will help you close the gaps fast.";

    // Weak topics
    const uniqueWeak = [...new Set(wrongTopics)];
    const weakEl = document.getElementById('weak-topics');
    if (uniqueWeak.length > 0) {
      weakEl.innerHTML = '<p><strong>Your focus areas:</strong> ' + uniqueWeak.map(t => `<span class="badge badge-navy">${t}</span>`).join(' ') + '</p>';
    } else {
      weakEl.innerHTML = '<p><strong>Impressive!</strong> No major weak areas detected.</p>';
    }
  }

  // Email results form
  const emailResultsForm = document.getElementById('email-results-form');
  if (emailResultsForm) {
    emailResultsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name  = this.querySelector('#result-name').value;
      const email = this.querySelector('#result-email').value;
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email.', '⚠️');
        return;
      }
      const btn = this.querySelector('button');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // ---- REPLACE WITH YOUR EMAIL SERVICE INTEGRATION ----
      // Payload to send to your backend / Mailchimp / ConvertKit:
      const uniqueWeak = [...new Set(wrongTopics)];
      const payload = {
        name,
        email,
        score,
        total: QUIZ_DATA.length,
        pct: Math.round((score / QUIZ_DATA.length) * 100),
        weakTopics: uniqueWeak,
        answers: userAnswers
      };
      console.log('Quiz results payload:', payload);
      // fetch('/api/quiz-results', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })

      setTimeout(() => {
        this.innerHTML = `
          <div style="background:var(--teal-lt);border-radius:10px;padding:24px;text-align:center;">
            <div style="font-size:2rem;margin-bottom:8px;">📬</div>
            <p style="font-family:var(--font-d);font-weight:700;color:var(--teal-dk);font-size:1.1rem;margin-bottom:4px;">Results sent to ${email}</p>
            <p style="color:var(--gray);font-size:0.88rem;">Your personalized study guide is on its way — check your inbox within a few minutes.</p>
          </div>`;
      }, 1500);
    });
  }

  // Start quiz
  renderQuestion();
}
