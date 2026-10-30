import { PortfolioProject, SkillItem, EducationEntry, LeetCodeStats, DeveloperActivityData } from '../types';

export const PERSONAL_INFO = {
  name: 'Pradeep Aheri',
  role: 'Aspiring Software Development Engineer',
  subRoles: [
    'Aspiring Software Development Engineer',
    'AI / ML Enthusiast',
    'Algorithmic Problem Solver',
    'B.Tech in AI & ML @ Reva University',
  ],
  educationBrief: 'B.Tech in Artificial Intelligence & Machine Learning',
  university: 'Reva University',
  location: 'Bengaluru, India',
  email: 'pradeepaheri663@gmail.com',
  github: 'https://github.com/PradeepAheri',
  leetcode: 'https://leetcode.com/u/PradeepAheri/',
  careerGoal:
    'Aspiring to become a highly skilled Software Engineer and solve complex, real-world problems through scalable technology, intelligent algorithms, and disciplined engineering.',
  aboutMe:
    'I am a passionate B.Tech student in Artificial Intelligence and Machine Learning at Reva University with strong foundations in C, Python, Data Structures, Algorithms, and modern web technologies. I thrive on translating conceptual ideas into robust hardware and software systems—from developing IoT-driven gas hazard detection devices to engineering modern full-stack subscription tracking platforms. Driven by relentless curiosity, I actively hone my problem-solving skills across LeetCode and open-source GitHub projects.',
};

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'gas-detection-iot',
    title: 'Harmful Gas Detection System',
    tagline: 'IoT-Powered Real-Time Environmental Hazard & Toxic Gas Alerting Device',
    category: 'IoT & Embedded Systems',
    tagColor: 'cyan',
    featured: true,
    summary:
      'An intelligent embedded IoT system engineered with multi-gas sensors (MQ-2 / MQ-135) and microcontrollers to detect hazardous gases (Carbon Monoxide, LPG, Smoke, Methane) in real time with instant audible alarms and cloud alert telemetry.',
    detailedDescription:
      'Engineered an autonomous IoT environmental safety station capable of sampling ambient air composition at high frequency. When toxic gas concentrations breach safe PPM (parts per million) safety thresholds, the system immediately triggers a hardware buzzer/LED alarm matrix, engages automated relay ventilation, and transmits instantaneous telemetry over Wi-Fi/MQTT to a web monitoring dashboard for proactive evacuation and incident mitigation.',
    highlights: [
      { label: 'DETECTION LATENCY', value: '< 200 ms' },
      { label: 'MONITORED GASES', value: 'CO, LPG, Smoke, CH4' },
      { label: 'TELEMETRY PROTOCOL', value: 'MQTT / HTTP REST' },
      { label: 'HARDWARE INTEGRATION', value: 'Microcontroller + Relays' },
    ],
    keyFeatures: [
      'Real-time continuous PPM concentration sampling using calibrated MQ electrochemical sensors',
      'Autonomous multi-stage threshold logic: Warning → Critical Emergency → Auto-Exhaust Fan Relay',
      'Dual alert mechanism: Local high-decibel piezo buzzer + remote cloud alert dispatch',
      'Low power consumption firmware optimized in C/Embedded C with interrupt-driven watchdog protection',
    ],
    techStack: ['C / Embedded C', 'Arduino / ESP8266', 'IoT Gas Sensors', 'Python', 'MQTT', 'HTML/CSS Dashboard', 'Git'],
    githubUrl: 'https://github.com/PradeepAheri',
    liveDemoUrl: '#',
    codeSnippet: {
      language: 'c',
      fileName: 'firmware/gas_detector_core.ino',
      lines: [
        '#define SENSOR_PIN A0',
        '#define BUZZER_PIN 8',
        '#define RELAY_EXHAUST 7',
        '#define THRESHOLD_PPM 400',
        '',
        'void setup() {',
        '    pinMode(BUZZER_PIN, OUTPUT);',
        '    pinMode(RELAY_EXHAUST, OUTPUT);',
        '    Serial.begin(115200);',
        '    calibrateSensorBaseline();',
        '}',
        '',
        'void loop() {',
        '    int sensorValue = analogRead(SENSOR_PIN);',
        '    float ppm = calculatePPM(sensorValue);',
        '    if (ppm > THRESHOLD_PPM) {',
        '        digitalWrite(BUZZER_PIN, HIGH);',
        '        digitalWrite(RELAY_EXHAUST, HIGH); // Engage ventilation',
        '        transmitTelemetryAlert("CRITICAL_GAS_LEVEL", ppm);',
        '    }',
        '    delay(150);',
        '}',
      ],
    },
    architectureFlow: [
      { step: '01', title: 'Atmospheric Ingress', desc: 'MQ sensors continuously ingest ambient air molecules and convert ionization changes to analog voltages.' },
      { step: '02', title: 'Firmware Calibration', desc: 'Embedded C ADC conversion translates raw analog voltages to calibrated PPM values against baseline.' },
      { step: '03', title: 'Safety Logic Core', desc: 'Interrupt-driven threshold comparator checks for hazardous thresholds (CO > 50 PPM, Smoke > 300 PPM).' },
      { step: '04', title: 'Hardware & Cloud Actuation', desc: 'Fires high-decibel audible alarm, switches mechanical relay for ventilation fans, and emits MQTT telemetry.' },
    ],
  },
  {
    id: 'subscription-manager-app',
    title: 'Subscription Management Web Application',
    tagline: 'Comprehensive Expense & Recurring Service Tracker with Automated Renewal Analytics',
    category: 'Full-Stack Web Application',
    tagColor: 'blue',
    featured: true,
    summary:
      'A responsive web application empowering users to monitor recurring software and utility subscriptions, calculate monthly/annual budgets, track upcoming renewal billing dates, and avoid unwanted charges.',
    detailedDescription:
      'Designed and developed a modern subscription management dashboard providing users with clear visibility into recurring financial commitments. Features custom payment cycle scheduling (monthly, quarterly, annual), intelligent renewal reminders, interactive expenditure breakdown by category (Streaming, Cloud, Utilities, Work), and budget threshold warnings to foster financial awareness.',
    highlights: [
      { label: 'UI ARCHITECTURE', value: 'Modular Component SPA' },
      { label: 'EXPENSE TRACKING', value: 'Monthly & Annual Breakdown' },
      { label: 'REMINDER ENGINE', value: 'Renewal Notification Alerts' },
      { label: 'CATEGORY ANALYTICS', value: 'Interactive Spending Charts' },
    ],
    keyFeatures: [
      'Interactive dashboard displaying Total Monthly Burn, Active Subscriptions count, and Next Due Payment',
      'Dynamic subscription management: Add, edit, pause, and categorize memberships with billing cycle logic',
      'Automated renewal warnings alerting users 3 to 7 days prior to card charge deductions',
      'Responsive dark-mode UI with sleek charts, search filters, and local data persistence',
    ],
    techStack: ['JavaScript (ES6+)', 'HTML5', 'CSS3 / Tailwind', 'Python', 'Git & GitHub'],
    githubUrl: 'https://github.com/PradeepAheri',
    liveDemoUrl: '#',
    codeSnippet: {
      language: 'javascript',
      fileName: 'src/services/subscriptionService.js',
      lines: [
        'export function calculateMonthlyBurn(subscriptions) {',
        '    return subscriptions.reduce((total, sub) => {',
        '        if (sub.status !== "active") return total;',
        '        if (sub.billingCycle === "yearly") {',
        '            return total + (sub.amount / 12);',
        '        } else if (sub.billingCycle === "quarterly") {',
        '            return total + (sub.amount / 3);',
        '        }',
        '        return total + Number(sub.amount);',
        '    }, 0);',
        '}',
        '',
        'export function getUpcomingRenewals(subscriptions, daysThreshold = 7) {',
        '    const now = new Date();',
        '    return subscriptions.filter(sub => {',
        '        const renewal = new Date(sub.nextRenewalDate);',
        '        const diffDays = Math.ceil((renewal - now) / (1000 * 60 * 60 * 24));',
        '        return diffDays >= 0 && diffDays <= daysThreshold;',
        '    });',
        '}',
      ],
    },
    architectureFlow: [
      { step: '01', title: 'Data Ingestion & Storage', desc: 'Secure client-side state handling and persistent storage for subscriptions, prices, and recurrence dates.' },
      { step: '02', title: 'Financial Calculation Engine', desc: 'Normalizes varied billing frequencies (weekly, monthly, annual) into consistent monthly burn metrics.' },
      { step: '03', title: 'Renewal Schedule Monitor', desc: 'Continuously monitors local time against renewal deadlines and triggers countdown status badges.' },
      { step: '04', title: 'Analytics & Visualization', desc: 'Renders category distribution, top recurring spenders, and proactive cancellation suggestions.' },
    ],
  },
  {
    id: 'dsa-algorithmic-lab',
    title: 'Data Structures & Algorithms Repository',
    tagline: 'Systematic Problem Solving in C and Python Across LeetCode & Competitive Programming',
    category: 'AI / Machine Learning & Algorithms',
    tagColor: 'violet',
    featured: false,
    summary:
      'Curated repository of optimized data structures, sorting algorithms, dynamic programming solutions, and LeetCode problem writeups written in C and Python with runtime complexity analyses.',
    detailedDescription:
      'A structured engineering repository documenting solutions to algorithmic challenges across LeetCode and competitive programming platforms. Focuses on rigorous time and space complexity optimization, edge-case coverage, and clean memory management in C and expressive implementations in Python.',
    highlights: [
      { label: 'PRIMARY LANGUAGES', value: 'C & Python' },
      { label: 'TOPICS COVERED', value: 'Arrays, Trees, DP, Graphs' },
      { label: 'COMPLEXITY FOCUS', value: 'Optimal O(1) / O(N) Space' },
      { label: 'PLATFORM PROFILE', value: 'Active on LeetCode' },
    ],
    keyFeatures: [
      'Classic Data Structures implemented from scratch in C: Linked Lists, Stacks, Queues, Binary Search Trees, and Heaps',
      'Dynamic Programming and Graph traversal algorithms (BFS, DFS, Dijkstra, Memoization) in Python',
      'Detailed README breakdowns with problem constraints, approach rationale, and complexity proofs',
      'Continuous daily problem-solving practice to master foundational software engineering fundamentals',
    ],
    techStack: ['C', 'Python', 'Algorithms', 'Data Structures', 'LeetCode', 'Git & GitHub'],
    githubUrl: 'https://github.com/PradeepAheri',
    liveDemoUrl: 'https://leetcode.com/u/PradeepAheri/',
    codeSnippet: {
      language: 'c',
      fileName: 'algorithms/binary_search_tree.c',
      lines: [
        '#include <stdio.h>',
        '#include <stdlib.h>',
        '',
        'typedef struct Node {',
        '    int data;',
        '    struct Node *left, *right;',
        '} Node;',
        '',
        'Node* insertNode(Node* root, int val) {',
        '    if (root == NULL) {',
        '        Node* newNode = (Node*)malloc(sizeof(Node));',
        '        newNode->data = val;',
        '        newNode->left = newNode->right = NULL;',
        '        return newNode;',
        '    }',
        '    if (val < root->data) root->left = insertNode(root->left, val);',
        '    else root->right = insertNode(root->right, val);',
        '    return root;',
        '}',
      ],
    },
    architectureFlow: [
      { step: '01', title: 'Problem Deconstruction', desc: 'Analyze input constraints, time limits, and identify edge cases before writing code.' },
      { step: '02', title: 'Optimal Paradigm Selection', desc: 'Determine optimal algorithmic pattern (Two Pointers, Sliding Window, Greedy, DP).' },
      { step: '03', title: 'Memory-Conscious Implementation', desc: 'Write bug-free code with explicit variable scoping and zero memory leaks.' },
      { step: '04', title: 'Benchmark & Edge Testing', desc: 'Validate against comprehensive test suites and document time/space complexities.' },
    ],
  },
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  // Programming Languages
  { name: 'C Programming', category: 'Languages', level: 'Core & Embedded', proficiencyPercent: 88, highlight: 'Pointers, Memory Allocation, Bitwise Ops, Data Structures' },
  { name: 'Python', category: 'Languages', level: 'Proficient', proficiencyPercent: 90, highlight: 'AI/ML Libraries, Scripting, Problem Solving, Automation' },
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 'Proficient', proficiencyPercent: 84, highlight: 'Async/Await, DOM Manipulation, Modern Web Frameworks' },
  { name: 'HTML5', category: 'Web Technologies', level: 'Advanced', proficiencyPercent: 92, highlight: 'Semantic Layouts, Accessibility, Modern Web Standards' },
  { name: 'CSS3 / Modern CSS', category: 'Web Technologies', level: 'Advanced', proficiencyPercent: 88, highlight: 'Flexbox, Grid, Responsive Design, Animations, Tailwind' },
  
  // Tools & Platforms
  { name: 'Git & GitHub', category: 'Tools & Platforms', level: 'Proficient', proficiencyPercent: 90, highlight: 'Version Control, Branching, Pull Requests, Repository Management' },
  { name: 'VS Code & Dev Tools', category: 'Tools & Platforms', level: 'Advanced', proficiencyPercent: 92, highlight: 'Debugging, Extensions, Terminal Integration, Productivity' },
  { name: 'Linux / Shell Basics', category: 'Tools & Platforms', level: 'Proficient', proficiencyPercent: 82, highlight: 'Command Line, Bash Navigation, File Permissions, Scripting' },

  // Core Concepts
  { name: 'Data Structures & Algorithms', category: 'Core Concepts', level: 'Active Practice', proficiencyPercent: 86, highlight: 'Arrays, Strings, Linked Lists, Trees, Search, Sort' },
  { name: 'Artificial Intelligence & ML', category: 'Core Concepts', level: 'Academic & Practical', proficiencyPercent: 84, highlight: 'Supervised Learning, Neural Foundations, Model Training' },
  { name: 'IoT & Microcontrollers', category: 'Core Concepts', level: 'Hands-on Hardware', proficiencyPercent: 82, highlight: 'Sensors (MQ series), Actuators, Serial Communication' },
  { name: 'Problem Solving (LeetCode)', category: 'Core Concepts', level: 'Continuous', proficiencyPercent: 85, highlight: 'Algorithmic Optimization, Pattern Recognition' },
];

export const EDUCATION_DATA: EducationEntry = {
  degree: 'Bachelor of Technology (B.Tech)',
  major: 'Artificial Intelligence and Machine Learning',
  institution: 'Reva University',
  location: 'Bengaluru, Karnataka, India',
  duration: 'Present / Undergrad',
  status: 'In Progress',
  description:
    'Pursuing specialized engineering education combining computer science fundamentals with advanced artificial intelligence, machine learning algorithms, deep learning foundations, and modern software development practices.',
  coursework: [
    'Data Structures & Algorithms (C / Python)',
    'Object-Oriented Programming',
    'Machine Learning Foundations & Statistics',
    'Database Management Systems (DBMS)',
    'Computer Organization & Architecture',
    'Operating Systems & Systems Programming',
    'Internet of Things (IoT) & Sensor Networks',
    'Web Development & Software Engineering',
  ],
  highlights: [
    'Spearheading academic and hands-on projects including IoT Environmental Gas Detection and Subscription Management apps',
    'Active participant in coding competitions, tech seminars, and collaborative peer learning circles',
    'Consistently expanding algorithmic mastery through structured LeetCode problem solving and GitHub contributions',
  ],
};

export const LEETCODE_DATA: LeetCodeStats = {
  profileUrl: 'https://leetcode.com/u/PradeepAheri/',
  username: 'PradeepAheri',
  problemSolvingPhilosophy:
    'Dedicated to strengthening algorithmic problem-solving abilities on LeetCode. Focusing on mastering fundamental patterns (Two-Pointer, Sliding Window, Fast/Slow Pointers, Binary Search, Tree Traversals, and Dynamic Programming) to write optimal, clean code with tight asymptotic bounds.',
  badges: ['Active Problem Solver', 'Array & String Specialist', 'DSA Practitioner'],
  topicsMastered: [
    { topic: 'Arrays & Hashing', count: 42, tag: 'FOUNDATION' },
    { topic: 'Two Pointers & Sliding Window', count: 28, tag: 'OPTIMAL' },
    { topic: 'Linked Lists & Stacks', count: 24, tag: 'CORE' },
    { topic: 'Binary Search & Sorting', count: 22, tag: 'LOGARITHMIC' },
    { topic: 'Trees & Recursion', count: 18, tag: 'HIERARCHICAL' },
    { topic: 'Dynamic Programming & Math', count: 15, tag: 'OPTIMIZATION' },
  ],
};

export const DEVELOPER_ACTIVITY: DeveloperActivityData = {
  githubUrl: 'https://github.com/PradeepAheri',
  leetcodeUrl: 'https://leetcode.com/u/PradeepAheri/',
  username: 'PradeepAheri',
  repositories: [
    {
      name: 'Harmful-Gas-Detection-System',
      description: 'IoT-based toxic and hazardous gas monitoring station using MQ-2/135 sensors and microcontrollers with audible & cloud alerts.',
      language: 'C / Embedded C',
      url: 'https://github.com/PradeepAheri',
      topics: ['iot', 'embedded-c', 'sensors', 'safety', 'arduino'],
    },
    {
      name: 'Subscription-Management-Web-App',
      description: 'Modern web application for tracking active recurring memberships, payment cycles, monthly burn rates, and renewal alerts.',
      language: 'JavaScript / HTML / CSS',
      url: 'https://github.com/PradeepAheri',
      topics: ['javascript', 'web-app', 'expense-tracker', 'tailwind', 'productivity'],
    },
    {
      name: 'DSA-LeetCode-Solutions',
      description: 'Clean, annotated algorithmic problem solutions in C and Python with comprehensive time and space complexity breakdowns.',
      language: 'C / Python',
      url: 'https://github.com/PradeepAheri',
      topics: ['leetcode', 'algorithms', 'data-structures', 'python', 'c-programming'],
    },
  ],
};
