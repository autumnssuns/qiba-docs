---
marp: true
theme: qiba
footer: '**QIBA - Module 4**<br>Tailored Job Application'
---

<!-- 
_class: title
-->


<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10.0.0/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });

window.addEventListener('vscode.markdown.updateContent', function() { mermaid.init() });
</script>

<div class="title-header">

# Personal SWOT Analysis

**By:** *Dan Tran*

</div>

![bg opacity:0.25](https://t3.ftcdn.net/jpg/04/26/06/20/360_F_426062028_4X9WcmpuQTtXnIqldSqffb9ntLINc6TX.jpg)

---

<div style="display: flex">

<div style="flex: 0.5">

# SWOT Matrix

Grouped by:

- Impact (**beneficial** or **harmful**)
- Origin (**internal** or **external** factors)

</div>

<div class="mermaid" style="flex: 0.5">
%%{init: {'theme': 'base',
    'themeVariables': {
      'primaryColor': '#fff',
      'primaryTextColor': '#1f1b30',
      'primaryBorderColor': '#FF2453',
      'lineColor': '#1f1b30',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff',
      'fontFamily':'verdana'
    }, "flowchart" : { "curve" : "basis" } } }%%
quadrantChart
    x-axis Internal Factors --> External Factors
    y-axis Harmful --> Beneficial
    quadrant-2 Strengths
    quadrant-3 Weaknesses
    quadrant-1 Opportunities
    quadrant-4 Threats
    Problem Solving: [0.12,0.9]
    Communication: [0.35,0.88]
    Teamwork: [0.1,0.6]
    Independence: [0.1,0.8]
    Learning: [0.4,0.82]
    Work Ethic: [0.2,0.75]
    Passion: [0.15,0.67]
    Anxiety: [0.4,0.05]
    Setting Boundaries: [0.35,0.12]
    Self-Doubt: [0.4,0.4]
    Work-Life Balance: [0.13,0.09]
    Emotional Intelligence: [0.2,0.35]
    Industry Experience: [0.35,0.25]
    Seeking Opportunities: [0.24,0.2]
    Open Career Paths: [0.63,0.8]
    Networking: [0.6,0.9]
    Further Education: [0.8,0.7]
    Referrals: [0.8,0.9]
    AI Automation: [0.6,0.4]
    Workforce Changes: [0.7,0.3]
    Competition: [0.6,0.2]
    Migration Laws: [0.9,0.1]
</div>

</div>

---

# Strengths

- Strong **problem-solving** skills.
- Excellent **communication** skills.
- Ability to work **independently** and in a **team**.
- **Learning** agility.
- Willingness to take on new **challenges**.
- **Work ethic** and commitment to excellence.
- **Passion** for technology, especially productivity tools and automation.

---

# Weaknesses

- Tendency to overthinking leading to **anxiety**.
- Difficulty saying no and **setting boundaries**.
- **Self-doubt**.
- Struggle with **work-life balance**.
- Low **emotional intelligence** and empathy when occupied with tasks
- Lack of **industry experience**.
- Proactively **seeking** and **acting** on **opportunities** for professional development.

---

# Opportunities

- **Open career paths**: software / web development, data science, machine learning, research, academia.
- **Networking** opportunities via conferences, clubs, and online communities.
- Further **education** (Master's, PhD, professional certifications).
- **Referrals** from colleagues and supervisors.

---

# Threats

- **AI and automation** replacing jobs.
- Rapidly changing **workforce** and **technologies**.
- **Competition** from other professionals.
- Constantly changing **migration laws**.