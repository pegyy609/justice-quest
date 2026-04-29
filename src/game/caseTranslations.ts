import type { Lang } from "./SettingsContext";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Dict = Record<string, string>;

// ============= ENGLISH =============
const EN: Dict = {
  // S1 — Missing Laptop
  "case.s1.title": "The Missing Laptop",
  "case.s1.brief":
    "A Year 10 student, Alex, is accused of stealing a classmate's laptop from the science lab during lunch break. The laptop was later found in Alex's locker.",
  "case.s1.stmt.0.who": "Accuser (Sam)",
  "case.s1.stmt.0.quote": "My laptop was on the bench. Alex was the last one in the lab.",
  "case.s1.stmt.1.who": "Defendant (Alex)",
  "case.s1.stmt.1.quote": "Someone must have planted it. My locker code isn't secret.",
  "case.s1.stmt.2.who": "Teacher",
  "case.s1.stmt.2.quote": "I locked the lab at 12:45. I didn't see who entered before that.",
  "case.s1.ev.cctv.label": "CCTV footage",
  "case.s1.ev.cctv.short": "Hallway camera, lunch break",
  "case.s1.ev.cctv.detail":
    "Shows Alex entering the lab at 12:30 and leaving at 12:38 carrying a backpack. Quality is clear.",
  "case.s1.ev.locker.label": "Locker contents",
  "case.s1.ev.locker.short": "Laptop found in Alex's locker",
  "case.s1.ev.locker.detail":
    "Laptop confirmed as the missing device by serial number. Locker code was known by 3 classmates.",
  "case.s1.ev.rumor.label": "Hallway rumor",
  "case.s1.ev.rumor.short": "'Alex always takes things'",
  "case.s1.ev.rumor.detail":
    "Two students claim Alex 'always takes things' but neither saw the incident. Hearsay only.",
  "case.s1.ev.alibi.label": "Alex's alibi",
  "case.s1.ev.alibi.short": "Claims they were in canteen",
  "case.s1.ev.alibi.detail":
    "Alex says they were in the canteen at 12:30, but no witnesses confirm this. CCTV contradicts it.",
  "case.s1.legal.theft": "Theft",
  "case.s1.legal.theft.r": "Taking property without consent — supported by CCTV and recovered item.",
  "case.s1.legal.misconduct": "General Misconduct",
  "case.s1.legal.misconduct.r": "Too vague — evidence points to a specific act.",
  "case.s1.legal.insufficient": "Insufficient Evidence",
  "case.s1.legal.insufficient.r": "Multiple reliable evidence pieces exist.",
  "case.s1.pun.warning": "Verbal Warning",
  "case.s1.pun.detention": "Detention",
  "case.s1.pun.suspension": "3-Day Suspension",
  "case.s1.realWorld":
    "School policy typically treats theft of valuable property with suspension and parental notification, sometimes police referral.",
  "case.s1.standard": "School discipline: 'balance of probabilities' — more likely than not.",

  // S2 — Cheating
  "case.s2.title": "The Cheating Allegation",
  "case.s2.brief":
    "Jamie is accused of copying answers during a math exam. The teacher noticed Jamie glancing at a neighbor's paper several times.",
  "case.s2.stmt.0.who": "Teacher",
  "case.s2.stmt.0.quote": "I saw Jamie look over at least four times during the test.",
  "case.s2.stmt.1.who": "Defendant (Jamie)",
  "case.s2.stmt.1.quote": "I was just stretching my neck. I studied hard for this.",
  "case.s2.stmt.2.who": "Neighbor",
  "case.s2.stmt.2.quote": "I covered my paper. I don't think they could see anything.",
  "case.s2.ev.answers.label": "Answer comparison",
  "case.s2.ev.answers.short": "70% identical answers",
  "case.s2.ev.answers.detail":
    "Jamie and the neighbor share 14/20 identical answers — including the same wrong answers in the same way.",
  "case.s2.ev.history.label": "Past performance",
  "case.s2.ev.history.short": "Jamie usually scores low",
  "case.s2.ev.history.detail": "Jamie averages 50% — this exam scored 90%. A sudden jump.",
  "case.s2.ev.gossip.label": "Friend gossip",
  "case.s2.ev.gossip.short": "'Jamie always cheats'",
  "case.s2.ev.gossip.detail": "Unverified claim from one student. Not direct evidence.",
  "case.s2.ev.tutor.label": "Tutor note",
  "case.s2.ev.tutor.short": "Jamie had extra tutoring",
  "case.s2.ev.tutor.detail":
    "A tutor confirms Jamie studied for 20 hours. Could explain improvement — but not identical wrong answers.",
  "case.s2.legal.cheating": "Academic Dishonesty",
  "case.s2.legal.cheating.r": "Identical wrong answers + behavior pattern = strong indication.",
  "case.s2.legal.misconduct": "Minor Misconduct",
  "case.s2.legal.misconduct.r": "Understates the integrity violation.",
  "case.s2.legal.insufficient": "Insufficient Evidence",
  "case.s2.legal.insufficient.r": "Statistical pattern is compelling.",
  "case.s2.pun.warning": "Warning + Re-mark",
  "case.s2.pun.retake": "Zero + Retake Exam",
  "case.s2.pun.suspension": "Suspension",
  "case.s2.realWorld":
    "Most schools issue a zero on the assessment and require a retake under supervision.",
  "case.s2.standard": "Academic integrity boards use 'preponderance of evidence'.",

  // S3 — Bullying
  "case.s3.title": "The Bullying Report",
  "case.s3.brief":
    "A junior student reports being shoved in the hallway by an older student, Ravi. There were several bystanders.",
  "case.s3.stmt.0.who": "Victim",
  "case.s3.stmt.0.quote": "Ravi pushed me into the lockers and laughed.",
  "case.s3.stmt.1.who": "Defendant (Ravi)",
  "case.s3.stmt.1.quote": "I bumped into them by accident. The hallway was crowded.",
  "case.s3.stmt.2.who": "Bystander A",
  "case.s3.stmt.2.quote": "I saw Ravi laughing afterward.",
  "case.s3.stmt.3.who": "Bystander B",
  "case.s3.stmt.3.quote": "It looked like an accident to me.",
  "case.s3.ev.bruise.label": "Medical note",
  "case.s3.ev.bruise.short": "Minor bruising on shoulder",
  "case.s3.ev.bruise.detail": "Nurse confirmed bruising consistent with impact against lockers.",
  "case.s3.ev.history.label": "Behavior record",
  "case.s3.ev.history.short": "Ravi has 2 prior warnings",
  "case.s3.ev.history.detail":
    "Two previous warnings for rough behavior, but no formal bullying findings.",
  "case.s3.ev.anon.label": "Anonymous note",
  "case.s3.ev.anon.short": "'Ravi targets juniors'",
  "case.s3.ev.anon.detail": "Unsigned note in the suggestion box. Source unknown.",
  "case.s3.ev.cctv.label": "Hallway CCTV",
  "case.s3.ev.cctv.short": "Partial view",
  "case.s3.ev.cctv.detail":
    "Camera shows contact but angle is obstructed. Cannot confirm intent.",
  "case.s3.legal.bullying": "Bullying / Assault",
  "case.s3.legal.bullying.r": "Intent isn't clearly proven from the footage.",
  "case.s3.legal.misconduct": "Misconduct",
  "case.s3.legal.misconduct.r":
    "Behavior was inappropriate but intent ambiguous — fits misconduct best.",
  "case.s3.legal.insufficient": "Insufficient Evidence",
  "case.s3.legal.insufficient.r": "Bruising + behavior history justify some action.",
  "case.s3.pun.warning": "Formal Warning",
  "case.s3.pun.mediation": "Mediation + Counseling",
  "case.s3.pun.suspension": "Suspension",
  "case.s3.realWorld":
    "Schools often use restorative practices: mediation between parties before escalation.",
  "case.s3.standard": "Disciplinary: balance of probabilities; intent matters for severity.",

  // C1 — Online Fraud
  "case.c1.title": "The Online Fraud Case",
  "case.c1.brief":
    "A small business owner accuses Mr. Tan of operating a fake online store that took 200+ pre-orders without delivering. Mr. Tan claims he was a victim of a supplier scam.",
  "case.c1.stmt.0.who": "Customer Group",
  "case.c1.stmt.0.quote": "We paid. Nothing arrived. The site is gone.",
  "case.c1.stmt.1.who": "Defendant (Mr. Tan)",
  "case.c1.stmt.1.quote": "My supplier ran off with my money. I'm a victim too.",
  "case.c1.stmt.2.who": "Bank",
  "case.c1.stmt.2.quote": "Funds were withdrawn to a personal account within 48 hours.",
  "case.c1.ev.bank.label": "Bank records",
  "case.c1.ev.bank.short": "Funds → personal account",
  "case.c1.ev.bank.detail":
    "Customer payments routed to Mr. Tan's personal account, then withdrawn as cash.",
  "case.c1.ev.supplier.label": "Supplier contract",
  "case.c1.ev.supplier.short": "Unverified contract",
  "case.c1.ev.supplier.detail":
    "Contract document supplied by Mr. Tan, but the supplier company doesn't exist in registry.",
  "case.c1.ev.site.label": "Website forensics",
  "case.c1.ev.site.short": "Site was disabled by owner",
  "case.c1.ev.site.detail":
    "Server logs show the site was intentionally taken down by Mr. Tan, not hacked.",
  "case.c1.ev.social.label": "Social media outrage",
  "case.c1.ev.social.short": "Hundreds of angry posts",
  "case.c1.ev.social.detail":
    "Many emotional posts but mostly opinions, not evidence of intent.",
  "case.c1.ev.history.label": "Prior business",
  "case.c1.ev.history.short": "Two similar closed shops",
  "case.c1.ev.history.detail":
    "Mr. Tan ran two prior online shops that closed under similar complaints.",
  "case.c1.legal.fraud": "Fraud",
  "case.c1.legal.fraud.r":
    "Pattern of intent: routing to personal account + prior history + fabricated supplier.",
  "case.c1.legal.negligence": "Negligence",
  "case.c1.legal.negligence.r": "Underestimates the deliberate pattern of behavior.",
  "case.c1.legal.insufficient": "Insufficient Evidence",
  "case.c1.legal.insufficient.r": "Bank trail + prior pattern is strong.",
  "case.c1.pun.fine": "Fine + Restitution",
  "case.c1.pun.fine_jail": "Restitution + Jail Term",
  "case.c1.pun.max": "Maximum Sentence",
  "case.c1.realWorld":
    "Real cases (e.g., Singapore CDSA) typically result in restitution orders plus imprisonment when intent and pattern are shown.",
  "case.c1.standard": "Criminal: 'beyond reasonable doubt'.",

  // C2 — Public Dispute
  "case.c2.title": "The Public Dispute",
  "case.c2.brief":
    "Two neighbors are in a bitter dispute over a noisy renovation. One claims harassment, the other claims defamation on social media.",
  "case.c2.stmt.0.who": "Neighbor A",
  "case.c2.stmt.0.quote":
    "They've been banging walls at midnight for weeks. I had to post about it.",
  "case.c2.stmt.1.who": "Neighbor B",
  "case.c2.stmt.1.quote":
    "Their post called me a 'criminal contractor.' My business is suffering.",
  "case.c2.stmt.2.who": "Building Manager",
  "case.c2.stmt.2.quote": "We received noise complaints but no permits were violated.",
  "case.c2.ev.decibel.label": "Decibel logs",
  "case.c2.ev.decibel.short": "Above limit at night",
  "case.c2.ev.decibel.detail":
    "Building sensor shows nighttime noise above legal limit on 4 nights.",
  "case.c2.ev.post.label": "Social media post",
  "case.c2.ev.post.short": "Public accusation",
  "case.c2.ev.post.detail":
    "Post calls neighbor a 'criminal contractor' — no evidence of criminal record.",
  "case.c2.ev.screenshots.label": "Edited screenshots",
  "case.c2.ev.screenshots.short": "Possibly altered chats",
  "case.c2.ev.screenshots.detail":
    "Screenshots provided by Neighbor B appear cropped; metadata is missing.",
  "case.c2.ev.permit.label": "Renovation permit",
  "case.c2.ev.permit.short": "Valid daytime permit",
  "case.c2.ev.permit.detail":
    "Valid permit but only for daytime hours. Night work was not authorized.",
  "case.c2.legal.both": "Mutual Liability",
  "case.c2.legal.both.r":
    "Both parties violated norms: one breached noise rules, the other defamed without proof.",
  "case.c2.legal.defamation": "Defamation Only",
  "case.c2.legal.defamation.r": "Ignores the documented noise breach.",
  "case.c2.legal.insufficient": "Insufficient Evidence",
  "case.c2.legal.insufficient.r": "Decibel logs + post are concrete.",
  "case.c2.pun.mediation": "Mediation + Apologies",
  "case.c2.pun.fines": "Fines on Both Parties",
  "case.c2.pun.court": "Civil Court Damages",
  "case.c2.realWorld":
    "Most neighbor disputes are resolved through community mediation centres before reaching civil court.",
  "case.c2.standard":
    "Civil: 'balance of probabilities' — both sides assessed independently.",

  // C3 — Negligence
  "case.c3.title": "The Negligence Dilemma",
  "case.c3.brief":
    "A construction worker fell from scaffolding and was seriously injured. The site supervisor is accused of negligence, but claims the worker ignored safety protocols.",
  "case.c3.stmt.0.who": "Injured Worker",
  "case.c3.stmt.0.quote": "The harness clip was broken. I told them last week.",
  "case.c3.stmt.1.who": "Supervisor",
  "case.c3.stmt.1.quote":
    "Workers are trained to inspect their own gear. He skipped his check.",
  "case.c3.stmt.2.who": "Co-worker",
  "case.c3.stmt.2.quote": "Everyone knew that harness was bad. Nobody wanted to use it.",
  "case.c3.ev.harness.label": "Inspected harness",
  "case.c3.ev.harness.short": "Confirmed faulty clip",
  "case.c3.ev.harness.detail":
    "Forensic inspection confirms the clip was worn and would fail under load.",
  "case.c3.ev.log.label": "Maintenance log",
  "case.c3.ev.log.short": "No check in 60 days",
  "case.c3.ev.log.detail":
    "Required weekly inspection log shows no entries for 60 days. Supervisor's signature missing.",
  "case.c3.ev.training.label": "Worker training record",
  "case.c3.ev.training.short": "Worker was certified",
  "case.c3.ev.training.detail":
    "Worker passed safety training 4 months ago — but training doesn't replace equipment maintenance.",
  "case.c3.ev.anon.label": "Anonymous tip",
  "case.c3.ev.anon.short": "'Supervisor cuts corners'",
  "case.c3.ev.anon.detail":
    "Unsigned message to safety hotline, no specifics. Cannot be verified.",
  "case.c3.legal.negligence": "Criminal Negligence",
  "case.c3.legal.negligence.r":
    "Supervisor's duty of care breached — missing inspections + known fault.",
  "case.c3.legal.shared": "Shared Fault",
  "case.c3.legal.shared.r": "Worker followed training; primary duty rests with supervisor.",
  "case.c3.legal.insufficient": "Insufficient Evidence",
  "case.c3.legal.insufficient.r": "Maintenance log + forensic inspection are strong.",
  "case.c3.pun.warning": "Warning + Retraining",
  "case.c3.pun.fine_ban": "Heavy Fine + License Suspension",
  "case.c3.pun.jail": "Imprisonment",
  "case.c3.realWorld":
    "Workplace safety acts (e.g., WSH Act) commonly impose heavy fines and licence suspensions on negligent supervisors.",
  "case.c3.standard":
    "Criminal negligence: 'beyond reasonable doubt' for intent; civil claims separately.",

  // Feedback / impact UI
  "case.eval": "Court Evaluation",
  "case.sound": "⚖ Sound Judgement",
  "case.reconsider": "⚠ Reconsider Reasoning",
  "case.standardMet": "Your verdict meets the standard of proof.",
  "case.standardNotMet": "Your verdict does not fully meet the standard of proof.",
  "case.score.evidence": "Evidence",
  "case.score.legal": "Legal Fit",
  "case.score.verdict": "Verdict",
  "case.score.punishment": "Punishment",
  "case.impact": "Impact on Society",
  "case.impact.justice": "Justice",
  "case.impact.trust": "Public Trust",
  "case.impact.fairness": "Fairness",
  "case.impact.overall": "Overall",
  "case.realWorld.show": "Compare real-world ▾",
  "case.realWorld.hide": "Hide real-world ▾",
  "case.retry": "↻ Retry",
  "case.continue": "Continue ▶",
  "case.notFound": "Case not found",
  "case.back": "Back",
  "case.reliable.note":
    "Direct, verifiable source. Safe to weigh heavily in your judgement.",
  "case.unreliable.note":
    "Hearsay, contradicted, or unverified. Treat with caution — do not mark as reliable.",
};

// ============= 中文 =============
const ZH: Dict = {
  "case.s1.title": "失踪的笔记本电脑",
  "case.s1.brief":
    "十年级学生Alex被指控在午休期间从科学实验室偷走同学的笔记本电脑。该笔记本电脑后来在Alex的储物柜中被发现。",
  "case.s1.stmt.0.who": "原告(Sam)",
  "case.s1.stmt.0.quote": "我的笔记本电脑就放在桌上。Alex是最后一个在实验室的人。",
  "case.s1.stmt.1.who": "被告(Alex)",
  "case.s1.stmt.1.quote": "一定是有人栽赃。我的储物柜密码不是秘密。",
  "case.s1.stmt.2.who": "老师",
  "case.s1.stmt.2.quote": "我在12:45锁了实验室的门,在那之前我没看到谁进去。",
  "case.s1.ev.cctv.label": "监控录像",
  "case.s1.ev.cctv.short": "走廊摄像头,午休时段",
  "case.s1.ev.cctv.detail":
    "显示Alex在12:30进入实验室,12:38背着背包离开。画质清晰。",
  "case.s1.ev.locker.label": "储物柜内容",
  "case.s1.ev.locker.short": "在Alex储物柜中找到笔记本电脑",
  "case.s1.ev.locker.detail":
    "笔记本电脑通过序列号确认为失物。储物柜密码有3位同学知道。",
  "case.s1.ev.rumor.label": "走廊传言",
  "case.s1.ev.rumor.short": "“Alex总是拿别人东西”",
  "case.s1.ev.rumor.detail":
    "两位同学声称Alex“总是拿东西”,但都没目击事件。仅为传闻。",
  "case.s1.ev.alibi.label": "Alex的不在场证明",
  "case.s1.ev.alibi.short": "声称当时在食堂",
  "case.s1.ev.alibi.detail":
    "Alex说12:30在食堂,但无人证实,且监控录像与之矛盾。",
  "case.s1.legal.theft": "盗窃",
  "case.s1.legal.theft.r": "未经同意拿走他人财物 — 监控和找回的物品支持这一指控。",
  "case.s1.legal.misconduct": "一般违规",
  "case.s1.legal.misconduct.r": "过于笼统 — 证据指向具体行为。",
  "case.s1.legal.insufficient": "证据不足",
  "case.s1.legal.insufficient.r": "存在多项可靠证据。",
  "case.s1.pun.warning": "口头警告",
  "case.s1.pun.detention": "留堂",
  "case.s1.pun.suspension": "停学3天",
  "case.s1.realWorld":
    "校规通常对盗窃贵重物品施以停学和通知家长,有时移交警方。",
  "case.s1.standard": "学校纪律:“可能性权衡” — 比不存在更可能存在。",

  "case.s2.title": "作弊指控",
  "case.s2.brief":
    "Jamie被指控在数学考试中抄袭答案。老师注意到Jamie多次瞄向邻座的试卷。",
  "case.s2.stmt.0.who": "老师",
  "case.s2.stmt.0.quote": "我看到Jamie在考试中至少看了四次邻座。",
  "case.s2.stmt.1.who": "被告(Jamie)",
  "case.s2.stmt.1.quote": "我只是伸了下脖子。我为这次考试努力学习了。",
  "case.s2.stmt.2.who": "邻座",
  "case.s2.stmt.2.quote": "我遮住了试卷。我觉得他们什么也看不到。",
  "case.s2.ev.answers.label": "答案对比",
  "case.s2.ev.answers.short": "70%答案相同",
  "case.s2.ev.answers.detail":
    "Jamie与邻座有14/20道相同答案 — 包括以相同方式答错的题目。",
  "case.s2.ev.history.label": "过去成绩",
  "case.s2.ev.history.short": "Jamie通常分数较低",
  "case.s2.ev.history.detail": "Jamie平均分50%,这次考了90%。突飞猛进。",
  "case.s2.ev.gossip.label": "朋友闲谈",
  "case.s2.ev.gossip.short": "“Jamie总是作弊”",
  "case.s2.ev.gossip.detail": "一位同学的未经证实的说法,非直接证据。",
  "case.s2.ev.tutor.label": "家教记录",
  "case.s2.ev.tutor.short": "Jamie参加了额外辅导",
  "case.s2.ev.tutor.detail":
    "家教确认Jamie学习了20小时。可解释进步,但无法解释相同的错题。",
  "case.s2.legal.cheating": "学术不端",
  "case.s2.legal.cheating.r": "相同错题+行为模式 = 强烈指示。",
  "case.s2.legal.misconduct": "轻微违规",
  "case.s2.legal.misconduct.r": "低估了诚信违规的严重性。",
  "case.s2.legal.insufficient": "证据不足",
  "case.s2.legal.insufficient.r": "统计模式具有说服力。",
  "case.s2.pun.warning": "警告并复评",
  "case.s2.pun.retake": "零分并重考",
  "case.s2.pun.suspension": "停学",
  "case.s2.realWorld": "多数学校给予零分并要求在监督下重考。",
  "case.s2.standard": "学术诚信委员会采用“证据优势”标准。",

  "case.s3.title": "校园欺凌报告",
  "case.s3.brief":
    "一位低年级学生举报在走廊被高年级学生Ravi推搡,现场有数名旁观者。",
  "case.s3.stmt.0.who": "受害者",
  "case.s3.stmt.0.quote": "Ravi把我推向储物柜然后大笑。",
  "case.s3.stmt.1.who": "被告(Ravi)",
  "case.s3.stmt.1.quote": "我是不小心撞到的,走廊很拥挤。",
  "case.s3.stmt.2.who": "旁观者A",
  "case.s3.stmt.2.quote": "我看到Ravi事后在笑。",
  "case.s3.stmt.3.who": "旁观者B",
  "case.s3.stmt.3.quote": "在我看来像是意外。",
  "case.s3.ev.bruise.label": "医疗记录",
  "case.s3.ev.bruise.short": "肩部轻微淤青",
  "case.s3.ev.bruise.detail": "护士确认淤青与撞击储物柜一致。",
  "case.s3.ev.history.label": "行为记录",
  "case.s3.ev.history.short": "Ravi有2次先前警告",
  "case.s3.ev.history.detail":
    "因粗鲁行为有两次警告,但无正式欺凌定性。",
  "case.s3.ev.anon.label": "匿名信",
  "case.s3.ev.anon.short": "“Ravi针对低年级”",
  "case.s3.ev.anon.detail": "意见箱中的匿名信,来源未知。",
  "case.s3.ev.cctv.label": "走廊监控",
  "case.s3.ev.cctv.short": "视野受限",
  "case.s3.ev.cctv.detail": "录像显示有接触但角度受阻,无法确认意图。",
  "case.s3.legal.bullying": "欺凌/伤害",
  "case.s3.legal.bullying.r": "录像未能清楚证明意图。",
  "case.s3.legal.misconduct": "违规",
  "case.s3.legal.misconduct.r":
    "行为不当但意图模糊 — 最适合按违规处理。",
  "case.s3.legal.insufficient": "证据不足",
  "case.s3.legal.insufficient.r": "淤青+行为记录足以采取一定行动。",
  "case.s3.pun.warning": "正式警告",
  "case.s3.pun.mediation": "调解+辅导",
  "case.s3.pun.suspension": "停学",
  "case.s3.realWorld":
    "学校常采用恢复性做法:在升级前进行双方调解。",
  "case.s3.standard": "纪律:可能性权衡;意图影响严重程度。",

  "case.c1.title": "网络诈骗案",
  "case.c1.brief":
    "一位小企业主指控陈先生经营假冒网店,收取了200多笔预订款却未发货。陈先生声称自己也是供应商诈骗的受害者。",
  "case.c1.stmt.0.who": "顾客群体",
  "case.c1.stmt.0.quote": "我们付了钱,什么也没收到,网站也消失了。",
  "case.c1.stmt.1.who": "被告(陈先生)",
  "case.c1.stmt.1.quote": "我的供应商卷款而逃,我也是受害者。",
  "case.c1.stmt.2.who": "银行",
  "case.c1.stmt.2.quote": "资金在48小时内被提取至个人账户。",
  "case.c1.ev.bank.label": "银行记录",
  "case.c1.ev.bank.short": "资金 → 个人账户",
  "case.c1.ev.bank.detail":
    "顾客付款汇入陈先生的个人账户后被提取为现金。",
  "case.c1.ev.supplier.label": "供应商合同",
  "case.c1.ev.supplier.short": "未经核实的合同",
  "case.c1.ev.supplier.detail":
    "陈先生提供合同文件,但供应商公司在工商登记中不存在。",
  "case.c1.ev.site.label": "网站取证",
  "case.c1.ev.site.short": "网站由所有者关闭",
  "case.c1.ev.site.detail":
    "服务器日志显示网站是被陈先生主动关闭,而非黑客入侵。",
  "case.c1.ev.social.label": "社交媒体声讨",
  "case.c1.ev.social.short": "数百条愤怒帖子",
  "case.c1.ev.social.detail":
    "情绪化帖子众多,但多为意见,而非意图证据。",
  "case.c1.ev.history.label": "过往经营",
  "case.c1.ev.history.short": "两家类似已关闭店铺",
  "case.c1.ev.history.detail":
    "陈先生此前经营过两家网店,均因类似投诉关闭。",
  "case.c1.legal.fraud": "欺诈",
  "case.c1.legal.fraud.r":
    "意图模式明显:转入个人账户+前科+伪造供应商。",
  "case.c1.legal.negligence": "过失",
  "case.c1.legal.negligence.r": "低估了行为的故意性模式。",
  "case.c1.legal.insufficient": "证据不足",
  "case.c1.legal.insufficient.r": "银行记录+历史模式很强。",
  "case.c1.pun.fine": "罚款+赔偿",
  "case.c1.pun.fine_jail": "赔偿+监禁",
  "case.c1.pun.max": "最高刑罚",
  "case.c1.realWorld":
    "实际案件(如新加坡CDSA)在意图与模式明显时通常判处赔偿与监禁。",
  "case.c1.standard": "刑事:“排除合理怀疑”。",

  "case.c2.title": "公共纠纷",
  "case.c2.brief":
    "两位邻居因装修噪音激烈争执。一方声称受到骚扰,另一方声称在社交媒体上被诽谤。",
  "case.c2.stmt.0.who": "邻居A",
  "case.c2.stmt.0.quote":
    "他们连续几周深夜砸墙。我不得不发帖反映。",
  "case.c2.stmt.1.who": "邻居B",
  "case.c2.stmt.1.quote":
    "他们的帖子称我为“黑心承包商”,我的生意受到了影响。",
  "case.c2.stmt.2.who": "物业经理",
  "case.c2.stmt.2.quote": "我们收到噪音投诉,但没有违反许可。",
  "case.c2.ev.decibel.label": "分贝记录",
  "case.c2.ev.decibel.short": "夜间超标",
  "case.c2.ev.decibel.detail": "楼宇传感器显示有4个夜晚噪音超过法定上限。",
  "case.c2.ev.post.label": "社交媒体帖子",
  "case.c2.ev.post.short": "公开指控",
  "case.c2.ev.post.detail":
    "帖子称邻居为“黑心承包商”,但无犯罪记录证据。",
  "case.c2.ev.screenshots.label": "编辑过的截图",
  "case.c2.ev.screenshots.short": "可能被改动的聊天",
  "case.c2.ev.screenshots.detail":
    "邻居B提供的截图似乎被裁剪,缺少元数据。",
  "case.c2.ev.permit.label": "装修许可证",
  "case.c2.ev.permit.short": "有效的日间许可",
  "case.c2.ev.permit.detail":
    "许可证有效但仅限白天,夜间施工未获授权。",
  "case.c2.legal.both": "双方责任",
  "case.c2.legal.both.r":
    "双方均有违规:一方违反噪音规定,另一方无证据诽谤。",
  "case.c2.legal.defamation": "仅诽谤",
  "case.c2.legal.defamation.r": "忽视了已记录的噪音违规。",
  "case.c2.legal.insufficient": "证据不足",
  "case.c2.legal.insufficient.r": "分贝记录+帖子均为具体证据。",
  "case.c2.pun.mediation": "调解+道歉",
  "case.c2.pun.fines": "双方罚款",
  "case.c2.pun.court": "民事法庭赔偿",
  "case.c2.realWorld":
    "大多数邻里纠纷在进入民事法庭前会通过社区调解中心解决。",
  "case.c2.standard": "民事:“可能性权衡” — 双方独立评估。",

  "case.c3.title": "过失困境",
  "case.c3.brief":
    "一名建筑工人从脚手架上摔落严重受伤。工地主管被指控过失,但声称工人忽视了安全规程。",
  "case.c3.stmt.0.who": "受伤工人",
  "case.c3.stmt.0.quote": "安全带卡扣坏了,我上周就告诉过他们。",
  "case.c3.stmt.1.who": "主管",
  "case.c3.stmt.1.quote":
    "工人受过培训自行检查装备,他没做检查。",
  "case.c3.stmt.2.who": "同事",
  "case.c3.stmt.2.quote":
    "大家都知道那条安全带不行,没人愿意用。",
  "case.c3.ev.harness.label": "已检测的安全带",
  "case.c3.ev.harness.short": "确认卡扣有缺陷",
  "case.c3.ev.harness.detail":
    "司法鉴定确认卡扣磨损,负重时会失效。",
  "case.c3.ev.log.label": "维护日志",
  "case.c3.ev.log.short": "60天无检查",
  "case.c3.ev.log.detail":
    "应每周检查的日志60天无记录,缺失主管签名。",
  "case.c3.ev.training.label": "工人培训记录",
  "case.c3.ev.training.short": "工人已认证",
  "case.c3.ev.training.detail":
    "工人4个月前通过安全培训 — 但培训不能取代设备维护。",
  "case.c3.ev.anon.label": "匿名举报",
  "case.c3.ev.anon.short": "“主管偷工减料”",
  "case.c3.ev.anon.detail":
    "向安全热线发送的匿名信息,无具体内容,无法核实。",
  "case.c3.legal.negligence": "刑事过失",
  "case.c3.legal.negligence.r":
    "主管违反了注意义务 — 缺失检查+已知缺陷。",
  "case.c3.legal.shared": "共同过失",
  "case.c3.legal.shared.r": "工人遵循培训;主要责任在于主管。",
  "case.c3.legal.insufficient": "证据不足",
  "case.c3.legal.insufficient.r": "维护日志+司法鉴定均很有力。",
  "case.c3.pun.warning": "警告+再培训",
  "case.c3.pun.fine_ban": "高额罚款+吊销执照",
  "case.c3.pun.jail": "监禁",
  "case.c3.realWorld":
    "职场安全法(如WSH法)通常对失职主管处以高额罚款和吊销执照。",
  "case.c3.standard":
    "刑事过失:意图须“排除合理怀疑”;民事索赔另行处理。",

  "case.eval": "法庭评估",
  "case.sound": "⚖ 判决合理",
  "case.reconsider": "⚠ 请重新考虑推理",
  "case.standardMet": "您的判决符合证明标准。",
  "case.standardNotMet": "您的判决未完全符合证明标准。",
  "case.score.evidence": "证据",
  "case.score.legal": "法律契合",
  "case.score.verdict": "判决",
  "case.score.punishment": "处罚",
  "case.impact": "对社会的影响",
  "case.impact.justice": "正义",
  "case.impact.trust": "公众信任",
  "case.impact.fairness": "公平",
  "case.impact.overall": "总体",
  "case.realWorld.show": "对照现实 ▾",
  "case.realWorld.hide": "隐藏现实 ▾",
  "case.retry": "↻ 重试",
  "case.continue": "继续 ▶",
  "case.notFound": "未找到案件",
  "case.back": "返回",
  "case.reliable.note": "直接、可核实的来源,可在判决中重要权衡。",
  "case.unreliable.note": "传闻、矛盾或未经证实,请谨慎对待 — 不要标记为可靠。",
  // ===== 证据 — 来源与注意事项 =====
  "case.s1.ev.cctv.detail.more":
    "来源：学校走廊摄像头（CCTV-04）。时间戳由IT管理员核实。证据链：录像于13:10导出并封存。注意事项：摄像头未覆盖实验室后门。",
  "case.s1.ev.locker.detail.more":
    "来源：校长与教师在场进行的储物柜检查。序列号与学校采购记录一致。注意事项：3名同学知道储物柜密码，可能被人栽赃。",
  "case.s1.ev.rumor.detail.more":
    "来源：食堂里的两名学生（不在现场）。属传闻。注意事项：传闻不应作为主要证据；存在偏见风险。",
  "case.s1.ev.alibi.detail.more":
    "来源：仅被告陈述。无证人或食堂收据。注意事项：与CCTV录像相矛盾。",
  "case.s2.ev.answers.detail.more":
    "来源：监考教师提交。10题中有7题答案相同，包括同一处错误。注意事项：学生可能使用相同笔记。",
  "case.s2.ev.tutor.detail.more":
    "来源：合格的私人补习老师。已用付款收据核实。注意事项：补习老师不在考场。",
  "case.s2.ev.gossip.detail.more":
    "来源：匿名同学群聊。注意事项：仅为揣测，无直接证据。",
  "case.s2.ev.history.detail.more":
    "来源：正式学业记录。注意事项：过往行为不能证明此次行为。",
  "case.s3.ev.cctv.detail.more":
    "来源：走廊CCTV（视角有限）。注意事项：推搡发生在镜头之外，仅初次冲突可见。",
  "case.s3.ev.bruise.detail.more":
    "来源：校医报告附带带日期的照片。注意事项：瘀伤可能由其他原因造成。",
  "case.s3.ev.anon.detail.more":
    "来源：投入意见箱的匿名信。注意事项：无法核实作者或动机。",
  "case.s3.ev.history.detail.more":
    "来源：正式纪律记录。注意事项：行为模式，并非本次事件的直接证据。",
  "case.c1.ev.bank.detail.more":
    "来源：银行出具的正式对账单。注意事项：账户持有人可能并非真正诈骗者（傀儡账户）。",
  "case.c1.ev.site.detail.more":
    "来源：网站存档缓存 + SSL证书。注意事项：网站可能随时下线。",
  "case.c1.ev.history.detail.more":
    "来源：消费者保护数据库。注意事项：以往投诉不能证明本次具体交易。",
  "case.c1.ev.social.detail.more":
    "来源：举报人提供的截图。注意事项：可被编辑；请求原始版本。",
  "case.c1.ev.supplier.detail.more":
    "来源：被指控供应商的来信。注意事项：供应商可能存在利益冲突。",
  "case.c2.ev.decibel.detail.more":
    "来源：市政厅官方分贝仪读数。注意事项：仅在一个夜晚测量。",
  "case.c2.ev.permit.detail.more":
    "来源：市政许可办公室。注意事项：许可证可能附有被违反的噪音限制条件。",
  "case.c2.ev.post.detail.more":
    "来源：公开社交媒体帖子。注意事项：视频中观众未必代表所有夜晚。",
  "case.c2.ev.screenshots.detail.more":
    "来源：居民截图。注意事项：单一信息——请求录音佐证。",
  "case.c3.ev.log.detail.more":
    "来源：施工现场电子设备日志。注意事项：若系统未锁定，日志可能被修改。",
  "case.c3.ev.harness.detail.more":
    "来源：合格安全工程师检查。注意事项：事故后证据可能被破坏。",
  "case.c3.ev.training.detail.more":
    "来源：HR正式培训记录。注意事项：出勤不等于理解。",
  "case.c3.ev.anon.detail.more":
    "来源：匿名举报热线电话。注意事项：举报人动机不明。",
};

// ============= Bahasa Melayu =============
const MS: Dict = {
  "case.s1.title": "Komputer Riba Yang Hilang",
  "case.s1.brief":
    "Seorang pelajar Tingkatan 4, Alex, dituduh mencuri komputer riba rakan sekelas dari makmal sains semasa rehat. Komputer riba itu kemudiannya dijumpai dalam loker Alex.",
  "case.s1.stmt.0.who": "Pendakwa (Sam)",
  "case.s1.stmt.0.quote":
    "Komputer riba saya di atas meja. Alex orang terakhir di makmal.",
  "case.s1.stmt.1.who": "Defendan (Alex)",
  "case.s1.stmt.1.quote":
    "Mesti ada orang letak. Kod loker saya bukan rahsia.",
  "case.s1.stmt.2.who": "Guru",
  "case.s1.stmt.2.quote":
    "Saya kunci makmal pukul 12:45. Saya tidak nampak siapa masuk sebelum itu.",
  "case.s1.ev.cctv.label": "Rakaman CCTV",
  "case.s1.ev.cctv.short": "Kamera koridor, waktu rehat",
  "case.s1.ev.cctv.detail":
    "Menunjukkan Alex masuk makmal pukul 12:30 dan keluar 12:38 membawa beg. Kualiti jelas.",
  "case.s1.ev.locker.label": "Kandungan loker",
  "case.s1.ev.locker.short": "Komputer riba dalam loker Alex",
  "case.s1.ev.locker.detail":
    "Komputer riba disahkan melalui nombor siri. Kod loker diketahui 3 rakan sekelas.",
  "case.s1.ev.rumor.label": "Khabar angin koridor",
  "case.s1.ev.rumor.short": "'Alex selalu ambil barang'",
  "case.s1.ev.rumor.detail":
    "Dua pelajar mendakwa Alex 'selalu ambil barang' tetapi tidak menyaksikan. Hanya khabar angin.",
  "case.s1.ev.alibi.label": "Alibi Alex",
  "case.s1.ev.alibi.short": "Mendakwa berada di kantin",
  "case.s1.ev.alibi.detail":
    "Alex kata berada di kantin pukul 12:30, tetapi tiada saksi. CCTV bercanggah.",
  "case.s1.legal.theft": "Kecurian",
  "case.s1.legal.theft.r":
    "Mengambil harta tanpa izin — disokong CCTV dan barang yang ditemui.",
  "case.s1.legal.misconduct": "Salah Laku Umum",
  "case.s1.legal.misconduct.r":
    "Terlalu kabur — bukti menunjukkan perbuatan khusus.",
  "case.s1.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.s1.legal.insufficient.r":
    "Terdapat beberapa keping bukti yang boleh dipercayai.",
  "case.s1.pun.warning": "Amaran Lisan",
  "case.s1.pun.detention": "Tahanan",
  "case.s1.pun.suspension": "Gantung 3 Hari",
  "case.s1.realWorld":
    "Polisi sekolah biasanya mengenakan gantung dan memberitahu ibu bapa, kadang dirujuk kepada polis.",
  "case.s1.standard":
    "Disiplin sekolah: 'imbangan kebarangkalian' — lebih berkemungkinan berlaku.",

  "case.s2.title": "Tuduhan Meniru",
  "case.s2.brief":
    "Jamie dituduh meniru jawapan semasa peperiksaan matematik. Guru perasan Jamie melihat ke arah jiran beberapa kali.",
  "case.s2.stmt.0.who": "Guru",
  "case.s2.stmt.0.quote":
    "Saya nampak Jamie melihat sekurang-kurangnya empat kali.",
  "case.s2.stmt.1.who": "Defendan (Jamie)",
  "case.s2.stmt.1.quote":
    "Saya cuma regangkan leher. Saya belajar bersungguh-sungguh.",
  "case.s2.stmt.2.who": "Jiran",
  "case.s2.stmt.2.quote":
    "Saya tutup kertas saya. Rasanya mereka tak nampak apa-apa.",
  "case.s2.ev.answers.label": "Perbandingan jawapan",
  "case.s2.ev.answers.short": "70% jawapan serupa",
  "case.s2.ev.answers.detail":
    "Jamie dan jiran kongsi 14/20 jawapan serupa — termasuk jawapan salah yang sama.",
  "case.s2.ev.history.label": "Prestasi lalu",
  "case.s2.ev.history.short": "Jamie biasanya rendah",
  "case.s2.ev.history.detail":
    "Purata Jamie 50% — peperiksaan ini 90%. Lonjakan mendadak.",
  "case.s2.ev.gossip.label": "Gosip rakan",
  "case.s2.ev.gossip.short": "'Jamie sentiasa meniru'",
  "case.s2.ev.gossip.detail":
    "Dakwaan tidak disahkan dari seorang pelajar. Bukan bukti langsung.",
  "case.s2.ev.tutor.label": "Nota tutor",
  "case.s2.ev.tutor.short": "Jamie ada tuisyen tambahan",
  "case.s2.ev.tutor.detail":
    "Tutor sahkan Jamie belajar 20 jam. Boleh menerangkan peningkatan — tetapi bukan jawapan salah serupa.",
  "case.s2.legal.cheating": "Ketidakjujuran Akademik",
  "case.s2.legal.cheating.r":
    "Jawapan salah yang sama + corak tingkah laku = petunjuk kuat.",
  "case.s2.legal.misconduct": "Salah Laku Kecil",
  "case.s2.legal.misconduct.r":
    "Memandang ringan pelanggaran integriti.",
  "case.s2.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.s2.legal.insufficient.r": "Corak statistik amat menyakinkan.",
  "case.s2.pun.warning": "Amaran + Tanda Semula",
  "case.s2.pun.retake": "Sifar + Ulang Peperiksaan",
  "case.s2.pun.suspension": "Gantung",
  "case.s2.realWorld":
    "Kebanyakan sekolah memberi sifar dan memerlukan ulangan dengan pengawasan.",
  "case.s2.standard":
    "Lembaga integriti akademik menggunakan 'keutamaan bukti'.",

  "case.s3.title": "Laporan Buli",
  "case.s3.brief":
    "Pelajar junior melaporkan ditolak di koridor oleh pelajar senior, Ravi. Terdapat beberapa saksi.",
  "case.s3.stmt.0.who": "Mangsa",
  "case.s3.stmt.0.quote": "Ravi tolak saya ke loker dan ketawa.",
  "case.s3.stmt.1.who": "Defendan (Ravi)",
  "case.s3.stmt.1.quote":
    "Saya terlanggar tanpa sengaja. Koridor sesak.",
  "case.s3.stmt.2.who": "Saksi A",
  "case.s3.stmt.2.quote": "Saya nampak Ravi ketawa selepas itu.",
  "case.s3.stmt.3.who": "Saksi B",
  "case.s3.stmt.3.quote": "Bagi saya nampak macam tak sengaja.",
  "case.s3.ev.bruise.label": "Nota perubatan",
  "case.s3.ev.bruise.short": "Lebam ringan di bahu",
  "case.s3.ev.bruise.detail":
    "Jururawat sahkan lebam selari dengan hentakan ke loker.",
  "case.s3.ev.history.label": "Rekod tingkah laku",
  "case.s3.ev.history.short": "Ravi ada 2 amaran terdahulu",
  "case.s3.ev.history.detail":
    "Dua amaran sebelum ini untuk perangai kasar, tiada penemuan buli rasmi.",
  "case.s3.ev.anon.label": "Nota tanpa nama",
  "case.s3.ev.anon.short": "'Ravi sasarkan junior'",
  "case.s3.ev.anon.detail":
    "Nota tanpa tandatangan dalam peti cadangan. Sumber tidak diketahui.",
  "case.s3.ev.cctv.label": "CCTV koridor",
  "case.s3.ev.cctv.short": "Pandangan separa",
  "case.s3.ev.cctv.detail":
    "Kamera tunjuk sentuhan tetapi sudut terhalang. Niat tidak boleh disahkan.",
  "case.s3.legal.bullying": "Buli / Serangan",
  "case.s3.legal.bullying.r":
    "Niat tidak terbukti dengan jelas dari rakaman.",
  "case.s3.legal.misconduct": "Salah Laku",
  "case.s3.legal.misconduct.r":
    "Tingkah laku tidak wajar tetapi niat kabur — paling sesuai sebagai salah laku.",
  "case.s3.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.s3.legal.insufficient.r":
    "Lebam + sejarah tingkah laku mewajarkan tindakan.",
  "case.s3.pun.warning": "Amaran Rasmi",
  "case.s3.pun.mediation": "Pengantaraan + Kaunseling",
  "case.s3.pun.suspension": "Gantung",
  "case.s3.realWorld":
    "Sekolah selalunya guna amalan restoratif: pengantaraan sebelum diperingkatkan.",
  "case.s3.standard":
    "Disiplin: imbangan kebarangkalian; niat penting untuk keterukan.",

  "case.c1.title": "Kes Penipuan Dalam Talian",
  "case.c1.brief":
    "Seorang peniaga kecil menuduh En. Tan mengendalikan kedai dalam talian palsu yang menerima 200+ tempahan tanpa penghantaran. En. Tan dakwa dia juga mangsa penipuan pembekal.",
  "case.c1.stmt.0.who": "Kumpulan Pelanggan",
  "case.c1.stmt.0.quote":
    "Kami bayar. Tiada apa sampai. Laman web hilang.",
  "case.c1.stmt.1.who": "Defendan (En. Tan)",
  "case.c1.stmt.1.quote":
    "Pembekal saya larikan duit. Saya juga mangsa.",
  "case.c1.stmt.2.who": "Bank",
  "case.c1.stmt.2.quote":
    "Dana dikeluarkan ke akaun peribadi dalam 48 jam.",
  "case.c1.ev.bank.label": "Rekod bank",
  "case.c1.ev.bank.short": "Dana → akaun peribadi",
  "case.c1.ev.bank.detail":
    "Bayaran pelanggan dimasukkan ke akaun peribadi En. Tan, kemudian dikeluarkan tunai.",
  "case.c1.ev.supplier.label": "Kontrak pembekal",
  "case.c1.ev.supplier.short": "Kontrak tidak disahkan",
  "case.c1.ev.supplier.detail":
    "Dokumen kontrak diberi En. Tan, tetapi syarikat pembekal tiada dalam pendaftaran.",
  "case.c1.ev.site.label": "Forensik laman web",
  "case.c1.ev.site.short": "Laman ditutup pemilik",
  "case.c1.ev.site.detail":
    "Log pelayan menunjukkan laman ditutup oleh En. Tan, bukan digodam.",
  "case.c1.ev.social.label": "Kemarahan media sosial",
  "case.c1.ev.social.short": "Ratusan pos marah",
  "case.c1.ev.social.detail":
    "Banyak pos emosi tetapi kebanyakannya pendapat, bukan bukti niat.",
  "case.c1.ev.history.label": "Perniagaan terdahulu",
  "case.c1.ev.history.short": "Dua kedai serupa ditutup",
  "case.c1.ev.history.detail":
    "En. Tan mengendalikan dua kedai dalam talian terdahulu yang ditutup atas aduan serupa.",
  "case.c1.legal.fraud": "Penipuan",
  "case.c1.legal.fraud.r":
    "Corak niat: ke akaun peribadi + sejarah + pembekal palsu.",
  "case.c1.legal.negligence": "Kecuaian",
  "case.c1.legal.negligence.r": "Memandang rendah corak sengaja.",
  "case.c1.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.c1.legal.insufficient.r": "Jejak bank + sejarah amat kuat.",
  "case.c1.pun.fine": "Denda + Gantirugi",
  "case.c1.pun.fine_jail": "Gantirugi + Penjara",
  "case.c1.pun.max": "Hukuman Maksimum",
  "case.c1.realWorld":
    "Kes sebenar (cth., CDSA Singapura) selalunya mengarahkan gantirugi serta penjara apabila niat dan corak terbukti.",
  "case.c1.standard": "Jenayah: 'tanpa keraguan munasabah'.",

  "case.c2.title": "Pertikaian Awam",
  "case.c2.brief":
    "Dua jiran bertelagah hebat tentang pengubahsuaian bising. Seorang dakwa diganggu, seorang lagi dakwa difitnah di media sosial.",
  "case.c2.stmt.0.who": "Jiran A",
  "case.c2.stmt.0.quote":
    "Mereka mengetuk dinding tengah malam selama berminggu. Saya terpaksa pos.",
  "case.c2.stmt.1.who": "Jiran B",
  "case.c2.stmt.1.quote":
    "Pos mereka panggil saya 'kontraktor jenayah'. Bisnes saya terjejas.",
  "case.c2.stmt.2.who": "Pengurus Bangunan",
  "case.c2.stmt.2.quote":
    "Kami terima aduan bunyi tetapi tiada permit dilanggar.",
  "case.c2.ev.decibel.label": "Log desibel",
  "case.c2.ev.decibel.short": "Melebihi had pada waktu malam",
  "case.c2.ev.decibel.detail":
    "Sensor bangunan tunjuk bunyi malam melebihi had undang-undang pada 4 malam.",
  "case.c2.ev.post.label": "Pos media sosial",
  "case.c2.ev.post.short": "Tuduhan awam",
  "case.c2.ev.post.detail":
    "Pos panggil jiran 'kontraktor jenayah' — tiada bukti rekod jenayah.",
  "case.c2.ev.screenshots.label": "Tangkap layar disunting",
  "case.c2.ev.screenshots.short": "Mungkin diubah",
  "case.c2.ev.screenshots.detail":
    "Tangkap layar dari Jiran B nampak dipotong; metadata hilang.",
  "case.c2.ev.permit.label": "Permit pengubahsuaian",
  "case.c2.ev.permit.short": "Permit siang sah",
  "case.c2.ev.permit.detail":
    "Permit sah tetapi waktu siang sahaja. Kerja malam tidak dibenarkan.",
  "case.c2.legal.both": "Liabiliti Bersama",
  "case.c2.legal.both.r":
    "Kedua pihak melanggar norma: satu langgar bunyi, satu memfitnah tanpa bukti.",
  "case.c2.legal.defamation": "Fitnah Sahaja",
  "case.c2.legal.defamation.r":
    "Mengabaikan pelanggaran bunyi yang direkodkan.",
  "case.c2.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.c2.legal.insufficient.r": "Log desibel + pos adalah konkrit.",
  "case.c2.pun.mediation": "Pengantaraan + Permohonan Maaf",
  "case.c2.pun.fines": "Denda Kedua Pihak",
  "case.c2.pun.court": "Ganti Rugi Mahkamah Sivil",
  "case.c2.realWorld":
    "Kebanyakan pertikaian jiran diselesaikan melalui pusat pengantaraan komuniti sebelum ke mahkamah sivil.",
  "case.c2.standard":
    "Sivil: 'imbangan kebarangkalian' — kedua pihak dinilai berasingan.",

  "case.c3.title": "Dilema Kecuaian",
  "case.c3.brief":
    "Seorang pekerja binaan jatuh dari perancah dan cedera parah. Penyelia tapak dituduh cuai, tetapi dakwa pekerja abaikan protokol keselamatan.",
  "case.c3.stmt.0.who": "Pekerja Tercedera",
  "case.c3.stmt.0.quote":
    "Klip abah-abah rosak. Saya beritahu mereka minggu lepas.",
  "case.c3.stmt.1.who": "Penyelia",
  "case.c3.stmt.1.quote":
    "Pekerja dilatih untuk periksa peralatan sendiri. Dia tidak buat semakan.",
  "case.c3.stmt.2.who": "Rakan Sekerja",
  "case.c3.stmt.2.quote":
    "Semua tahu abah-abah itu rosak. Tiada siapa nak guna.",
  "case.c3.ev.harness.label": "Abah-abah diperiksa",
  "case.c3.ev.harness.short": "Sahkan klip rosak",
  "case.c3.ev.harness.detail":
    "Pemeriksaan forensik mengesahkan klip haus dan akan gagal di bawah beban.",
  "case.c3.ev.log.label": "Log penyelenggaraan",
  "case.c3.ev.log.short": "Tiada semakan 60 hari",
  "case.c3.ev.log.detail":
    "Log pemeriksaan mingguan tiada catatan 60 hari. Tandatangan penyelia hilang.",
  "case.c3.ev.training.label": "Rekod latihan pekerja",
  "case.c3.ev.training.short": "Pekerja telah disahkan",
  "case.c3.ev.training.detail":
    "Pekerja lulus latihan keselamatan 4 bulan lalu — tetapi latihan tidak menggantikan penyelenggaraan.",
  "case.c3.ev.anon.label": "Maklumat tanpa nama",
  "case.c3.ev.anon.short": "'Penyelia ambil jalan mudah'",
  "case.c3.ev.anon.detail":
    "Mesej tanpa tandatangan ke talian keselamatan, tiada butiran. Tidak boleh disahkan.",
  "case.c3.legal.negligence": "Kecuaian Jenayah",
  "case.c3.legal.negligence.r":
    "Kewajipan jagaan penyelia dilanggar — pemeriksaan tiada + kerosakan diketahui.",
  "case.c3.legal.shared": "Kesalahan Bersama",
  "case.c3.legal.shared.r":
    "Pekerja ikut latihan; tanggungjawab utama pada penyelia.",
  "case.c3.legal.insufficient": "Bukti Tidak Mencukupi",
  "case.c3.legal.insufficient.r":
    "Log penyelenggaraan + pemeriksaan forensik amat kuat.",
  "case.c3.pun.warning": "Amaran + Latihan Semula",
  "case.c3.pun.fine_ban": "Denda Berat + Gantung Lesen",
  "case.c3.pun.jail": "Penjara",
  "case.c3.realWorld":
    "Akta keselamatan tempat kerja (cth., Akta WSH) selalunya mengenakan denda berat dan gantung lesen kepada penyelia cuai.",
  "case.c3.standard":
    "Kecuaian jenayah: 'tanpa keraguan munasabah' untuk niat; tuntutan sivil berasingan.",

  "case.eval": "Penilaian Mahkamah",
  "case.sound": "⚖ Penghakiman Wajar",
  "case.reconsider": "⚠ Pertimbangkan Semula",
  "case.standardMet": "Penghakiman anda memenuhi piawaian bukti.",
  "case.standardNotMet":
    "Penghakiman anda tidak sepenuhnya memenuhi piawaian bukti.",
  "case.score.evidence": "Bukti",
  "case.score.legal": "Kesesuaian Undang",
  "case.score.verdict": "Penghakiman",
  "case.score.punishment": "Hukuman",
  "case.impact": "Kesan ke atas Masyarakat",
  "case.impact.justice": "Keadilan",
  "case.impact.trust": "Kepercayaan Awam",
  "case.impact.fairness": "Kesaksamaan",
  "case.impact.overall": "Keseluruhan",
  "case.realWorld.show": "Bandingkan dunia sebenar ▾",
  "case.realWorld.hide": "Sembunyikan ▾",
  "case.retry": "↻ Cuba Lagi",
  "case.continue": "Teruskan ▶",
  "case.notFound": "Kes tidak dijumpai",
  "case.back": "Kembali",
  "case.reliable.note":
    "Sumber langsung & boleh disahkan. Selamat ditimbang berat dalam penghakiman.",
  "case.unreliable.note":
    "Khabar angin, bercanggah, atau tidak disahkan. Berhati-hati — jangan tanda sebagai dipercayai.",
  // ===== Evidence — Source & Caveats (extended detail) =====
  "case.s1.ev.cctv.detail.more":
    "Sumber: Kamera koridor sekolah (CCTV-04). Cap masa disahkan oleh pentadbir IT. Rantaian penjagaan: rakaman dieksport pada 13:10 dan dimeterai. Peringatan: kamera tidak meliputi pintu belakang makmal.",
  "case.s1.ev.locker.detail.more":
    "Sumber: Pemeriksaan loker oleh pengetua dan saksi guru. Nombor siri sepadan dengan rekod pembelian sekolah. Peringatan: kod loker diketahui oleh 3 rakan sekelas — kemungkinan diletakkan oleh orang lain.",
  "case.s1.ev.rumor.detail.more":
    "Sumber: Dua pelajar di kantin (tidak hadir di tempat kejadian). Hanya cakap-cakap. Peringatan: dengar khabar tidak boleh diterima sebagai bukti utama; risiko berat sebelah.",
  "case.s1.ev.alibi.detail.more":
    "Sumber: Kenyataan defendan sahaja. Tiada saksi atau resit kantin. Peringatan: bercanggah dengan rakaman CCTV.",
  "case.s2.ev.answers.detail.more":
    "Sumber: Diserahkan oleh pengawas peperiksaan. 7 daripada 10 jawapan akhir sepadan, termasuk satu kesilapan yang sama. Peringatan: pelajar boleh belajar daripada nota yang sama.",
  "case.s2.ev.tutor.detail.more":
    "Sumber: Tutor swasta yang bertauliah. Disahkan dengan resit pembayaran. Peringatan: tutor tidak hadir semasa peperiksaan.",
  "case.s2.ev.gossip.detail.more":
    "Sumber: Mesej kumpulan rakan sebaya tanpa nama. Peringatan: spekulasi sahaja, tiada bukti langsung.",
  "case.s2.ev.history.detail.more":
    "Sumber: Rekod akademik rasmi. Peringatan: kelakuan masa lalu tidak membuktikan perbuatan kali ini.",
  "case.s3.ev.cctv.detail.more":
    "Sumber: CCTV koridor (sudut terhad). Peringatan: tolakan berlaku di luar bingkai; hanya konfrontasi awal kelihatan.",
  "case.s3.ev.bruise.detail.more":
    "Sumber: Laporan jururawat sekolah dengan foto bertarikh. Peringatan: lebam mungkin disebabkan oleh sebab lain.",
  "case.s3.ev.anon.detail.more":
    "Sumber: Surat tanpa nama dimasukkan ke kotak aduan. Peringatan: tiada cara untuk mengesahkan pengarang atau motif.",
  "case.s3.ev.history.detail.more":
    "Sumber: Rekod disiplin rasmi. Peringatan: corak kelakuan, bukan bukti langsung untuk insiden ini.",
  "case.c1.ev.bank.detail.more":
    "Sumber: Penyata bank rasmi yang dikeluarkan oleh bank. Peringatan: pemilik akaun mungkin bukan penipu sebenar (akaun keldai).",
  "case.c1.ev.site.detail.more":
    "Sumber: Cache laman web yang diarkibkan + sijil SSL. Peringatan: laman boleh ditutup pada bila-bila masa.",
  "case.c1.ev.history.detail.more":
    "Sumber: Pangkalan data perlindungan pengguna. Peringatan: aduan terdahulu tidak membuktikan transaksi khusus ini.",
  "case.c1.ev.social.detail.more":
    "Sumber: Tangkapan skrin daripada pelapor. Peringatan: boleh diedit; minta versi asal.",
  "case.c1.ev.supplier.detail.more":
    "Sumber: Surat daripada pembekal yang didakwa. Peringatan: pembekal mungkin mempunyai konflik kepentingan.",
  "case.c2.ev.decibel.detail.more":
    "Sumber: Bacaan meter dB rasmi majlis perbandaran. Peringatan: bacaan dilakukan pada satu malam sahaja.",
  "case.c2.ev.permit.detail.more":
    "Sumber: Pejabat lesen majlis. Peringatan: permit mungkin dengan syarat had bunyi yang dilanggar.",
  "case.c2.ev.post.detail.more":
    "Sumber: Hantaran media sosial awam. Peringatan: penonton di video mungkin tidak mewakili semua malam.",
  "case.c2.ev.screenshots.detail.more":
    "Sumber: Tangkapan skrin daripada penduduk. Peringatan: pesanan tunggal — minta sokongan rakaman audio.",
  "case.c3.ev.log.detail.more":
    "Sumber: Log peralatan elektronik tapak. Peringatan: log boleh diubah jika sistem tidak terkunci.",
  "case.c3.ev.harness.detail.more":
    "Sumber: Pemeriksaan jurutera keselamatan bertauliah. Peringatan: bukti boleh diganggu selepas kemalangan.",
  "case.c3.ev.training.detail.more":
    "Sumber: Rekod latihan HR rasmi. Peringatan: kehadiran tidak menjamin pemahaman.",
  "case.c3.ev.anon.detail.more":
    "Sumber: Panggilan tanpa nama ke talian aduan. Peringatan: motif pemberi maklumat tidak diketahui.",
};

export const CASE_DICT: Record<Lang, Dict> = { en: EN, zh: ZH, ms: MS };
