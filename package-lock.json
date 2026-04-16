import { useState, useRef, useEffect } from "react";

// ---------------------------------------------------------------------------
// INDUSTRIES
// ---------------------------------------------------------------------------
const INDUSTRIES = [
  {
    id: "real_estate",
    name: "Real Estate",
    subtitle: "Seller acquisitions & wholesaling",
    description: "Motivated seller calls, cold outreach, and negotiation objections",
    available: true
  },
  {
    id: "health_insurance",
    name: "Health Insurance",
    subtitle: "Coming Soon",
    description: "Medicare, ACA, and group benefits objection handling",
    available: false
  }
];

// ---------------------------------------------------------------------------
// FRAMEWORKS — from Results Driven Objection Handling Manual
// Used as grading context so feedback references the right technique.
// ---------------------------------------------------------------------------
const FRAMEWORKS = {
  deflect_redirect: {
    name: "Deflect & Redirect",
    description: "Justify the prospect's concern, overcome it with that justification, then redirect the dialogue by posing a question. Keeps the conversation moving back toward the sales process instead of stalling on their concern."
  },
  go_for_no: {
    name: "Go For No",
    description: "When a prospect stalls ('let me think about it', 'I need to talk to someone'), label it as a polite no. This uses reverse psychology — the prospect either confirms it's a no (and you save time), corrects you by stating the real objection, or corrects you by closing themselves."
  },
  boxing: {
    name: "Boxing Objections",
    description: "Uncover the real objection by categorizing it into one of four buckets: (1) the idea of working with you, (2) the process, (3) the price, (4) other offers. Work through each until you land on the true concern."
  },
  multiple_offers: {
    name: "Multiple Offers",
    description: "When the seller has competing offers, aim for a premium price first ('Is there a price you have in mind that would make you choose us?'). If they won't commit, options are: offer significantly higher, play the timing game (be last), or make your absolute best offer."
  },
  discovery: {
    name: "Discovery",
    description: "Use probing questions to uncover the seller's real motivation. A motivated seller is always a qualified opportunity regardless of their stated price."
  },
  rapport: {
    name: "Rapport & Trust",
    description: "Acknowledge the seller's concern as reasonable before responding. Position collaboratively, not adversarially. Don't attack agents, family, or prior advisors — that triggers loyalty and shuts down the conversation."
  }
};

// ---------------------------------------------------------------------------
// OBJECTIONS BY INDUSTRY
// ---------------------------------------------------------------------------
const OBJECTIONS_BY_INDUSTRY = {
  real_estate: [
    // ===== OPENING & INFO =====
    {
      id: "re_1",
      text: "Who are you with?",
      context: "Seller wants to vet you. If you name a company they don't know, they may disengage. Position yourself as an independent buyer exploring the area, then redirect to their selling intent.",
      category: "Opening & Info",
      framework: "deflect_redirect"
    },
    {
      id: "re_2",
      text: "How did you get my information?",
      context: "Seller is defensive about being cold-called. Don't just name the source and stop. Justify briefly (public records / marketing team) and redirect to whether they've thought about selling.",
      category: "Opening & Info",
      framework: "deflect_redirect"
    },
    {
      id: "re_3",
      text: "Why are you calling me?",
      context: "Direct, guarded opener. Keep your answer short and immediately redirect to their potential selling interest. Long explanations here trigger more pushback.",
      category: "Opening & Info",
      framework: "deflect_redirect"
    },
    {
      id: "re_4",
      text: "How did you get my number? I didn't ask for this call.",
      context: "Persona scenario (Foreclosure Frank). Seller feels exposed that you pulled their number from public records. Be transparent, acknowledge it's unsolicited, earn the right to stay on the line.",
      category: "Opening & Info",
      framework: "rapport",
      persona: "Frank"
    },
    {
      id: "re_5",
      text: "Do you have my address?",
      context: "For direct mail leads, you often don't have the address tied to the inbound number. Be honest, ask for it, and use it to frame the conversation around their property specifically.",
      category: "Opening & Info",
      framework: "deflect_redirect"
    },
    {
      id: "re_6",
      text: "How did you get my address?",
      context: "Same as info/number — a 3rd party marketing team pulls from public record. Keep the justification short, redirect to whether they've considered selling.",
      category: "Opening & Info",
      framework: "deflect_redirect"
    },
    {
      id: "re_7",
      text: "Why do you want to buy my house? Why do you think my house is for sale?",
      context: "Seller is testing whether you actually know their situation. Admit you don't know yet — marketing team pulled the area, you're checking interest. Then redirect with a question about selling.",
      category: "Opening & Info",
      framework: "deflect_redirect"
    },

    // ===== PROPERTY & ACCESS =====
    {
      id: "re_8",
      text: "You have all the information you need online. You can pull everything from public records.",
      context: "Partially true — but public records miss property condition details like roof age, furnace, AC, foundation. Justify the need for your questions around condition, then redirect to get permission to ask them.",
      category: "Property & Access",
      framework: "deflect_redirect"
    },
    {
      id: "re_9",
      text: "Just drive by it. Just come walk it.",
      context: "Seller wants to skip discovery and get you on-site. But walking every property costs you money. Justify why you need questions first, explain your process gets them an accurate number without the visit, then see if a walkthrough makes sense after discovery.",
      category: "Property & Access",
      framework: "deflect_redirect"
    },
    {
      id: "re_10",
      text: "I want you to walk the house and waive inspection.",
      context: "Seller wants certainty and is asking you to take all the risk. You have a discovery process built to give an accurate offer over the phone. You can't walk every property before an agreement — explain why, offer the agreement-first path.",
      category: "Property & Access",
      framework: "deflect_redirect"
    },
    {
      id: "re_11",
      text: "No inspection contingencies allowed.",
      context: "Multiple-offer scenario common. Ask if every offer has waived inspection. If you have contractors or buyers, you might waive with earnest money + their chosen close date, contingent on clear title.",
      category: "Property & Access",
      framework: "multiple_offers"
    },

    // ===== PRICE & OFFER =====
    {
      id: "re_12",
      text: "What's your offer?",
      context: "Giving a number now without context will always feel like a lowball. Explain the difference between a quick price and a best price — best price depends on condition, which is why you need to ask specific questions first.",
      category: "Price & Offer",
      framework: "deflect_redirect"
    },
    {
      id: "re_13",
      text: "How do you come up with your offer?",
      context: "Seller is trying to understand your math. Keep it simple — case-by-case, depends on condition, different strategies (fix and flip, rental). Don't walk them through your full formula.",
      category: "Price & Offer",
      framework: "deflect_redirect"
    },
    {
      id: "re_14",
      text: "You sent me a check for $XX,XXX. I want that number.",
      context: "Check mailer amounts assume minor repairs and current market condition. Justify the variability, ask permission to do a 5-10 minute discovery so you can give an accurate number for their property specifically.",
      category: "Price & Offer",
      framework: "deflect_redirect"
    },
    {
      id: "re_15",
      text: "Can you do more than what's on the check?",
      context: "Same framework as above. The check amount depends on property condition. Don't commit to higher — justify the process, get discovery done, then you can position the actual number.",
      category: "Price & Offer",
      framework: "deflect_redirect"
    },
    {
      id: "re_16",
      text: "Can you drop the price? Will you drop the price?",
      context: "Seller is testing your number. Explain your thorough process — you asked detailed questions so the offer is accurate. If something unexpected came up during inspection (roof, foundation), you'd call and renegotiate or terminate. Don't drop just because they asked.",
      category: "Price & Offer",
      framework: "deflect_redirect"
    },
    {
      id: "re_17",
      text: "You can't give me what I want.",
      context: "Don't defend the offer yet. Ask what they're looking to get. You need the number before you can negotiate. This could be discovery or it could open multiple-offer territory.",
      category: "Price & Offer",
      framework: "discovery"
    },
    {
      id: "re_18",
      text: "I want to sell to make the most money.",
      context: "Everyone wants the most money — that's not a real objection. Ask what price they have in mind, then probe for why they're thinking of selling at all. Motivated sellers with high asking prices can still become deals.",
      category: "Price & Offer",
      framework: "discovery"
    },
    {
      id: "re_19",
      text: "Zillow says my house is worth $287,000. You're not going to offer me anywhere near that, are you?",
      context: "Persona scenario. Seller anchored to Zillow. Reframe from list price to net proceeds — what they actually walk away with after fees, time on market, repairs, agent commission. Don't fight the Zillow number directly.",
      category: "Price & Offer",
      framework: "deflect_redirect",
      persona: "Frank"
    },

    // ===== STALLS & DELAYS =====
    {
      id: "re_20",
      text: "I need to think about it. I want to think it over. I want to pray on it.",
      context: "Classic stall. Go For No: 'Usually when someone tells me they need to think about it, it's a polite way of saying no.' Then Box Objections — is it you, the process, the price, or other offers?",
      category: "Stalls & Delays",
      framework: "go_for_no"
    },
    {
      id: "re_21",
      text: "I want to talk to my [spouse/son/sister] about it.",
      context: "Could be real, could be a stall. Go For No first: 'usually when someone says they need to talk to someone, it's a polite way of saying no.' If they correct you, ask what exactly they need to discuss, then offer to be on the call with them.",
      category: "Stalls & Delays",
      framework: "go_for_no"
    },
    {
      id: "re_22",
      text: "I want to talk to my attorney first.",
      context: "Appreciate the concern. Offer to send the agreement to the attorney directly. If they insist on sending it themselves, ask 4 timing questions: when you'll get it to them, when they'll review, when you'll discuss, when you two will reconnect. Wishy-washy answers = Go For No territory.",
      category: "Stalls & Delays",
      framework: "go_for_no"
    },
    {
      id: "re_23",
      text: "I want my attorney to review the agreement before I sign.",
      context: "Respect it. But set a clear offer window (24-48 hours), then ask the four timing questions so you stay on their timeline. Don't let the offer sit indefinitely.",
      category: "Stalls & Delays",
      framework: "boxing"
    },
    {
      id: "re_24",
      text: "I want to talk to my CPA / finance person first.",
      context: "Same pattern — acknowledge, then Go For No: 'usually when someone says they want to run it by someone else, it's a polite way of saying no.' If they correct you, ask specifically what they want to discuss.",
      category: "Stalls & Delays",
      framework: "go_for_no"
    },
    {
      id: "re_25",
      text: "Just send the offer to my email.",
      context: "Don't let the deal die in their inbox. Company policy: you can't leave open offers floating — you're required to review it together and walk through the key pieces. If they push back, surface the real concern: 'sounds like you're not 100% comfortable with this right now.'",
      category: "Stalls & Delays",
      framework: "go_for_no"
    },
    {
      id: "re_26",
      text: "Just send me something in writing. I don't do business over the phone.",
      context: "Same category — if you just send something, it dies. Respect the preference but keep the conversation going. Explain you're required to review it together, or surface what they're really uncomfortable with.",
      category: "Stalls & Delays",
      framework: "go_for_no"
    },
    {
      id: "re_27",
      text: "I just... I don't know. I'm not ready to make a decision right now.",
      context: "Persona scenario (Passive Patty). Seller is overwhelmed and shutting down. Pushing harder causes full withdrawal. Back off, validate the difficulty, give them space to re-engage. This is NOT a Go For No moment — it's a rapport moment.",
      category: "Stalls & Delays",
      framework: "rapport",
      persona: "Patty"
    },

    // ===== TRUST & CREDIBILITY =====
    {
      id: "re_28",
      text: "My cousin Danny is a Realtor. He said he can list it and probably get me close to what Zillow says.",
      context: "Persona scenario (Frank). Don't trash Danny or agents — triggers loyalty and kills the deal. Ask what Danny's plan looks like, what the listing timeline would be. Let the seller realize 60-90 days doesn't fit their situation.",
      category: "Trust & Credibility",
      framework: "rapport",
      persona: "Frank"
    },
    {
      id: "re_29",
      text: "My sister said I shouldn't talk to investors. She said you guys are all scammers.",
      context: "Third-party influence. Don't attack the sister. Acknowledge the concern as reasonable — there ARE scammers. Position yourself through actions (transparency, no pressure) rather than claims.",
      category: "Trust & Credibility",
      framework: "rapport",
      persona: "Patty"
    },
    {
      id: "re_30",
      text: "How do I know you're not going to lowball me and flip it for twice as much?",
      context: "Persona scenario (Sam). Seller understands the investor model. Be transparent about how you make money. Don't be defensive. Explain the risk you take on (repairs, carrying costs, timing).",
      category: "Trust & Credibility",
      framework: "rapport",
      persona: "Sam"
    },
    {
      id: "re_31",
      text: "I'm not just going to give my house away to some random person who called me out of the blue.",
      context: "Acknowledge the power imbalance — you found them, they didn't find you. Reposition the call as a conversation, not a pitch. No pressure, no commitment to anything today.",
      category: "Trust & Credibility",
      framework: "rapport",
      persona: "Frank"
    },
    {
      id: "re_32",
      text: "The last investor I talked to wasted three weeks of my time and then ghosted me.",
      context: "Gift, not obstacle. They're telling you exactly what matters: follow-through and honesty. Acknowledge how common that experience is, commit specifically to what you'll do differently.",
      category: "Trust & Credibility",
      framework: "rapport"
    },
    {
      id: "re_33",
      text: "I am not interested in selling, BUT...",
      context: "The 'but' is the opening. Reference how they got on the list (direct mail, website form, PPC). Ask what made them engage with your outreach at all. There's motivation under there.",
      category: "Trust & Credibility",
      framework: "discovery"
    },

    // ===== COMPETITION & OTHER OFFERS =====
    {
      id: "re_34",
      text: "I'm taking offers.",
      context: "Non-committal language — often a polite 'no' or a stall. Go For No: 'sounds like you're looking at options but not ready to decide.' Also an obvious multiple-offer scenario. Initiate the multiple-offer framework: ask how many offers, how long, when they'll decide.",
      category: "Competition & Other Offers",
      framework: "multiple_offers"
    },
    {
      id: "re_35",
      text: "I already talked to two other investors today. One of them offered me $240,000.",
      context: "Competing offer — real or bluff. Don't match blindly. Aim for premium price first: 'Is there a price that would make you award us the opportunity right now?' If they won't commit, play the timing game — be the last offer in.",
      category: "Competition & Other Offers",
      framework: "multiple_offers",
      persona: "Heather"
    },
    {
      id: "re_36",
      text: "I got mailers from three other investors this week. What makes you different?",
      context: "Seller sees all investors as interchangeable. Don't differentiate through claims about your company — differentiate through the conversation itself. How you ask, how you listen, how you respect their time.",
      category: "Competition & Other Offers",
      framework: "rapport",
      persona: "Sam"
    },

    // ===== DISCOVERY =====
    {
      id: "re_37",
      text: "I'm not motivated to sell. I'm just curious what you'd offer.",
      context: "Persona scenario (Sam). They claim no motivation but stayed on the line. There's a reason. Don't call them out — explore what made them curious. Most 'just curious' sellers have underlying motivation they haven't surfaced yet.",
      category: "Discovery",
      framework: "discovery",
      persona: "Sam"
    },
    {
      id: "re_38",
      text: "It's not that bad. I've got time to figure this out.",
      context: "Persona scenario (Frank). Seller in denial about urgency. Don't use scare tactics or threats. Create honest urgency by walking through the foreclosure timeline reality — patience and facts, not pressure.",
      category: "Discovery",
      framework: "discovery",
      persona: "Frank"
    },
    {
      id: "re_39",
      text: "Look, I don't have a lot of time. Just tell me what you'd give me for the house.",
      context: "Persona scenario (Heather). Giving a number now without context will feel like a lowball every time. Respect the time pressure but earn the right to make an offer — brief discovery, then number.",
      category: "Discovery",
      framework: "deflect_redirect",
      persona: "Heather"
    }
  ],

  health_insurance: [] // Coming soon
};

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const DRILL_SIZE = 8;

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------
export default function ObjectionLab() {
  const [phase, setPhase] = useState("industry");
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [objections, setObjections] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isGrading, setIsGrading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [results, setResults] = useState([]);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showTranscriptEdit, setShowTranscriptEdit] = useState(false);
  const [manualInput, setManualInput] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [speechSupported, setSpeechSupported] = useState(true);
  const [drillCategory, setDrillCategory] = useState("all");

  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const accumulatedTranscript = useRef("");

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) setSpeechSupported(false);
  }, []);

  const industryObjections = selectedIndustry
    ? OBJECTIONS_BY_INDUSTRY[selectedIndustry] || []
    : [];
  const categories = ["all", ...Array.from(new Set(industryObjections.map(o => o.category)))];

  function selectIndustry(industryId) {
    const ind = INDUSTRIES.find(i => i.id === industryId);
    if (!ind || !ind.available) return;
    setSelectedIndustry(industryId);
    setPhase("start");
  }

  function startDrill() {
    const pool = drillCategory === "all"
      ? industryObjections
      : industryObjections.filter(o => o.category === drillCategory);
    const shuffled = shuffleArray(pool).slice(0, Math.min(DRILL_SIZE, pool.length));
    setObjections(shuffled);
    setCurrentIndex(0);
    setResults([]);
    setFeedback(null);
    setTranscript("");
    setPhase("drill");
  }

  function startRecording() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setManualInput(true); return; }

    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    accumulatedTranscript.current = "";

    recognition.onresult = (e) => {
      let interim = "";
      let final = "";
      for (let i = 0; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t + " ";
        else interim += t;
      }
      accumulatedTranscript.current = final;
      setTranscript((final + interim).trim());
    };

    recognition.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-available") {
        setManualInput(true);
        setIsRecording(false);
      }
    };

    recognition.onend = () => {
      setTranscript(accumulatedTranscript.current.trim());
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
    setRecordingTime(0);
    timerRef.current = setInterval(() => setRecordingTime(p => p + 1), 1000);
  }

  function stopRecording() {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    clearInterval(timerRef.current);
    setIsRecording(false);
    setTimeout(() => {
      setTranscript(t => t || accumulatedTranscript.current.trim());
    }, 300);
  }

  async function submitResponse(responseText) {
    const obj = objections[currentIndex];
    const fw = FRAMEWORKS[obj.framework];
    setIsGrading(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are an expert real estate sales coach grading a student drilling objection handling for motivated seller acquisition calls. Your coaching is based on the Results Driven methodology and four core frameworks: Deflect & Redirect, Go For No, Boxing Objections, and Multiple Offers.

THE SELLER'S OBJECTION: "${obj.text}"

COACHING CONTEXT (student does not see this):
${obj.context}

PRIMARY FRAMEWORK FOR THIS OBJECTION: ${fw.name}
${fw.description}

THE STUDENT'S RESPONSE: "${responseText}"

Grade the response 1-10 based on:
- Did they apply the right framework (or a valid alternative)?
- Did they avoid the common mistake described in the coaching context?
- Did they keep the conversation moving forward toward discovery or the next step?
- Did they sound like a real person, not a script?
- Did they position themselves collaboratively, not adversarially?

In the feedback, explicitly reference the framework name when relevant so the student learns to recognize which framework applies to which objection.

Return ONLY this JSON, no other text, no markdown, no code fences:
{"score": <number 1-10>, "framework_used": "<name of the framework the student actually used, or 'None / unclear' if they didn't apply one>", "worked": "<one sentence on what they did well — always find something>", "improve": "<one sentence on the single most important thing to change, referencing the correct framework by name>", "example": "<1-2 sentence example of a strong response that demonstrates the ${fw.name} framework>"}`
          }]
        })
      });
      const data = await res.json();
      const raw = data.content[0].text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(raw);
      setFeedback({ ...parsed, expected_framework: fw.name });
      setResults(prev => [...prev, { objection: obj, response: responseText, feedback: { ...parsed, expected_framework: fw.name } }]);
    } catch (err) {
      setFeedback({ score: 0, worked: "Grading error — try again.", improve: "", example: "", framework_used: "", expected_framework: fw.name });
    }
    setIsGrading(false);
  }

  function nextObjection() {
    if (currentIndex + 1 >= objections.length) {
      setPhase("summary");
    } else {
      setCurrentIndex(prev => prev + 1);
      setFeedback(null);
      setTranscript("");
      setTextInput("");
      setShowTranscriptEdit(false);
    }
  }

  const currentObj = objections[currentIndex];
  const avgScore = results.length > 0
    ? (results.reduce((s, r) => s + r.feedback.score, 0) / results.length).toFixed(1)
    : 0;

  function ScoreRing({ score, size = 80 }) {
    const r = (size - 8) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (score / 10) * circ;
    const color = score >= 7 ? "#5cb85c" : score >= 4 ? "#d4a853" : "#c44d4d";
    return (
      <svg width={size} height={size} style={{ display: "block" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#2a2a2a" strokeWidth="5" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: "strokeDashoffset 0.8s ease" }} />
        <text x={size/2} y={size/2 + 1} textAnchor="middle" dominantBaseline="central"
          fill={color} fontSize={size * 0.32} fontWeight="700" fontFamily="'Archivo', sans-serif">
          {score}
        </text>
      </svg>
    );
  }

  // =========================================================================
  // INDUSTRY SELECTION SCREEN
  // =========================================================================
  if (phase === "industry") {
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
        <div style={styles.industryInner}>
          <div style={styles.badge}>OBJECTION LAB</div>
          <h1 style={styles.title}>Choose Your Industry</h1>
          <p style={styles.subtitle}>
            Rapid-fire objection drills built around real scenarios you'll face on the phone.
          </p>

          <div style={styles.industryGrid}>
            {INDUSTRIES.map(ind => (
              <button
                key={ind.id}
                onClick={() => selectIndustry(ind.id)}
                disabled={!ind.available}
                style={{
                  ...styles.industryCard,
                  ...(ind.available ? {} : styles.industryCardDisabled)
                }}>
                {!ind.available && <div style={styles.comingSoonBadge}>COMING SOON</div>}
                <div style={styles.industryName}>{ind.name}</div>
                <div style={styles.industrySub}>{ind.subtitle}</div>
                <div style={styles.industryDesc}>{ind.description}</div>
                {ind.available && (
                  <div style={styles.industryCta}>
                    Select →
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // START / CATEGORY SELECT SCREEN
  // =========================================================================
  if (phase === "start") {
    const ind = INDUSTRIES.find(i => i.id === selectedIndustry);
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
        <div style={styles.startInner}>
          <button onClick={() => { setSelectedIndustry(null); setPhase("industry"); }} style={styles.backBtn}>
            ← Change industry
          </button>
          <div style={styles.badge}>{ind.name.toUpperCase()} · DRILL MODE</div>
          <h1 style={styles.title}>Objection Lab</h1>
          <p style={styles.subtitle}>
            Rapid-fire seller objections. Respond out loud. Get graded instantly against the four frameworks.
            {" "}{Math.min(DRILL_SIZE, industryObjections.length)} objections per round.
          </p>

          <div style={styles.categoryWrap}>
            <label style={styles.catLabel}>Focus area</label>
            <div style={styles.catPills}>
              {categories.map(c => (
                <button key={c} onClick={() => setDrillCategory(c)}
                  style={{
                    ...styles.catPill,
                    ...(drillCategory === c ? styles.catPillActive : {})
                  }}>
                  {c === "all" ? "All Objections" : c}
                </button>
              ))}
            </div>
          </div>

          {!speechSupported && (
            <p style={styles.warning}>
              Voice input not supported in this browser. You'll type responses instead.
            </p>
          )}

          <button onClick={startDrill} style={styles.startBtn}>
            Start Drill
          </button>

          <div style={styles.howItWorks}>
            <div style={styles.stepRow}>
              <div style={styles.stepNum}>1</div>
              <span style={styles.stepText}>Read the objection a seller just threw at you</span>
            </div>
            <div style={styles.stepRow}>
              <div style={styles.stepNum}>2</div>
              <span style={styles.stepText}>Hit the mic and respond like you're on a live call</span>
            </div>
            <div style={styles.stepRow}>
              <div style={styles.stepNum}>3</div>
              <span style={styles.stepText}>Get scored with framework-based coaching on what to change</span>
            </div>
          </div>

          <div style={styles.frameworkHint}>
            <div style={styles.frameworkHintLabel}>The Four Frameworks</div>
            <div style={styles.frameworkList}>
              <span style={styles.frameworkItem}>Deflect & Redirect</span>
              <span style={styles.frameworkItem}>Go For No</span>
              <span style={styles.frameworkItem}>Boxing Objections</span>
              <span style={styles.frameworkItem}>Multiple Offers</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SUMMARY SCREEN
  // =========================================================================
  if (phase === "summary") {
    const sorted = [...results].sort((a, b) => a.feedback.score - b.feedback.score);
    const weakest = sorted[0];
    const strongest = sorted[sorted.length - 1];
    return (
      <div style={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
        <div style={styles.summaryInner}>
          <div style={styles.badge}>DRILL COMPLETE</div>
          <h2 style={styles.summaryTitle}>Round Summary</h2>

          <div style={styles.summaryScoreWrap}>
            <ScoreRing score={parseFloat(avgScore)} size={120} />
            <div style={styles.summaryScoreLabel}>Average Score</div>
          </div>

          <div style={styles.summaryCards}>
            <div style={styles.summaryCard}>
              <div style={{ ...styles.summaryCardTag, color: "#5cb85c" }}>STRONGEST</div>
              <p style={styles.summaryCardText}>"{strongest?.objection.text.slice(0, 80)}..."</p>
              <div style={styles.summaryCardScore}>Score: {strongest?.feedback.score}/10</div>
            </div>
            <div style={styles.summaryCard}>
              <div style={{ ...styles.summaryCardTag, color: "#c44d4d" }}>NEEDS WORK</div>
              <p style={styles.summaryCardText}>"{weakest?.objection.text.slice(0, 80)}..."</p>
              <div style={styles.summaryCardScore}>Score: {weakest?.feedback.score}/10</div>
              <p style={styles.summaryCardTip}>{weakest?.feedback.improve}</p>
            </div>
          </div>

          <div style={styles.allResults}>
            <h3 style={styles.allResultsTitle}>All Responses</h3>
            {results.map((r, i) => (
              <div key={i} style={styles.resultRow}>
                <div style={styles.resultLeft}>
                  <ScoreRing score={r.feedback.score} size={44} />
                </div>
                <div style={styles.resultRight}>
                  <p style={styles.resultObjText}>"{r.objection.text.slice(0, 70)}..."</p>
                  <div style={styles.resultFrameworkRow}>
                    <span style={styles.resultFrameworkLabel}>Framework:</span>
                    <span style={styles.resultFrameworkName}>{r.feedback.expected_framework}</span>
                  </div>
                  <p style={styles.resultFeedback}>{r.feedback.improve}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summaryButtonRow}>
            <button onClick={() => { setPhase("start"); setFeedback(null); }} style={styles.startBtn}>
              New Round
            </button>
            <button onClick={() => { setSelectedIndustry(null); setPhase("industry"); setResults([]); setFeedback(null); }} style={styles.secondaryBtn}>
              Change Industry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DRILL SCREEN
  // =========================================================================
  return (
    <div style={styles.container}>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
      <div style={styles.drillInner}>
        <div style={styles.drillHeader}>
          <div style={styles.drillProgress}>
            {objections.map((_, i) => (
              <div key={i} style={{
                ...styles.progressDot,
                backgroundColor: i < currentIndex ? "#5cb85c"
                  : i === currentIndex ? "#d4a853" : "#2a2a2a"
              }} />
            ))}
          </div>
          <div style={styles.drillCount}>
            {currentIndex + 1} / {objections.length}
          </div>
        </div>

        <div style={styles.metaRow}>
          {currentObj.persona && <span style={styles.personaTag}>{currentObj.persona}</span>}
          <span style={styles.categoryTag}>{currentObj.category}</span>
        </div>

        <div style={styles.objectionCard} key={currentObj.id}>
          <div style={styles.objQuote}>"</div>
          <p style={styles.objText}>{currentObj.text}</p>
        </div>

        {!feedback && !isGrading && (
          <div style={styles.inputArea}>
            {manualInput || !speechSupported ? (
              <div style={styles.textInputWrap}>
                <textarea
                  value={textInput}
                  onChange={e => setTextInput(e.target.value)}
                  placeholder="Type your response to this objection..."
                  style={styles.textArea}
                  rows={3}
                />
                <button
                  onClick={() => { if (textInput.trim()) submitResponse(textInput.trim()); }}
                  disabled={!textInput.trim()}
                  style={{
                    ...styles.submitBtn,
                    opacity: textInput.trim() ? 1 : 0.4
                  }}>
                  Grade My Response
                </button>
                {speechSupported && (
                  <button onClick={() => setManualInput(false)} style={styles.switchBtn}>
                    Switch to voice
                  </button>
                )}
              </div>
            ) : !isRecording && !transcript ? (
              <div style={styles.micWrap}>
                <button onClick={startRecording} style={styles.micBtn}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </button>
                <span style={styles.micLabel}>Tap to respond</span>
                <button onClick={() => setManualInput(true)} style={styles.switchBtn}>
                  or type instead
                </button>
              </div>
            ) : isRecording ? (
              <div style={styles.recordingWrap}>
                <div style={styles.recordingPulse}>
                  <div style={styles.pulseRing} />
                  <button onClick={stopRecording} style={styles.stopBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="6" width="12" height="12" rx="2" />
                    </svg>
                  </button>
                </div>
                <div style={styles.recordingTime}>{recordingTime}s</div>
                <div style={styles.liveTranscript}>{transcript || "Listening..."}</div>
              </div>
            ) : transcript ? (
              <div style={styles.reviewWrap}>
                <div style={styles.reviewLabel}>Your response:</div>
                {showTranscriptEdit ? (
                  <textarea
                    value={transcript}
                    onChange={e => setTranscript(e.target.value)}
                    style={styles.textArea}
                    rows={3}
                  />
                ) : (
                  <p style={styles.reviewText}>{transcript}</p>
                )}
                <div style={styles.reviewActions}>
                  <button onClick={() => submitResponse(transcript)} style={styles.submitBtn}>
                    Grade My Response
                  </button>
                  <button onClick={() => setShowTranscriptEdit(!showTranscriptEdit)} style={styles.editBtn}>
                    {showTranscriptEdit ? "Done editing" : "Edit transcript"}
                  </button>
                  <button onClick={() => { setTranscript(""); accumulatedTranscript.current = ""; }} style={styles.editBtn}>
                    Re-record
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {isGrading && (
          <div style={styles.gradingWrap}>
            <div style={styles.spinner} />
            <span style={styles.gradingText}>Grading your response...</span>
          </div>
        )}

        {feedback && feedback.score > 0 && (
          <div style={styles.feedbackCard}>
            <div style={styles.feedbackTop}>
              <ScoreRing score={feedback.score} />
              <div style={styles.feedbackSections}>
                <div style={styles.frameworkBadgeRow}>
                  <span style={styles.frameworkBadgeLabel}>FRAMEWORK</span>
                  <span style={styles.frameworkBadgeName}>{feedback.expected_framework}</span>
                </div>
                <div style={styles.fbSection}>
                  <div style={{ ...styles.fbLabel, color: "#5cb85c" }}>What worked</div>
                  <p style={styles.fbText}>{feedback.worked}</p>
                </div>
                <div style={styles.fbSection}>
                  <div style={{ ...styles.fbLabel, color: "#c44d4d" }}>Try instead</div>
                  <p style={styles.fbText}>{feedback.improve}</p>
                </div>
              </div>
            </div>
            {feedback.example && (
              <div style={styles.exampleWrap}>
                <div style={styles.exampleLabel}>Stronger response</div>
                <p style={styles.exampleText}>"{feedback.example}"</p>
              </div>
            )}
            <button onClick={nextObjection} style={styles.nextBtn}>
              {currentIndex + 1 >= objections.length ? "See Results" : "Next Objection →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const keyframes = `
@keyframes pulseRing { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.8); opacity: 0; } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
`;
if (typeof document !== "undefined" && !document.getElementById("objlab-keyframes")) {
  const s = document.createElement("style");
  s.id = "objlab-keyframes";
  s.textContent = keyframes;
  document.head.appendChild(s);
}

const styles = {
  container: { minHeight: "100vh", background: "#111", color: "#e8e4df", fontFamily: "'Source Sans 3', sans-serif", display: "flex", justifyContent: "center", padding: "24px 16px", boxSizing: "border-box" },
  industryInner: { maxWidth: 680, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 48, animation: "fadeUp 0.5s ease" },
  industryGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, width: "100%", marginTop: 20 },
  industryCard: { position: "relative", background: "#1a1a1a", border: "1px solid #252525", borderRadius: 12, padding: "28px 24px 24px", textAlign: "left", cursor: "pointer", color: "#e8e4df", fontFamily: "'Source Sans 3', sans-serif", transition: "all 0.2s" },
  industryCardDisabled: { opacity: 0.5, cursor: "not-allowed" },
  comingSoonBadge: { position: "absolute", top: 12, right: 12, fontSize: 10, fontWeight: 800, fontFamily: "'Archivo', sans-serif", letterSpacing: "0.1em", color: "#9a958e", background: "#252525", borderRadius: 4, padding: "3px 8px" },
  industryName: { fontFamily: "'Archivo', sans-serif", fontSize: 22, fontWeight: 800, color: "#e8e4df", marginBottom: 4 },
  industrySub: { fontSize: 13, fontWeight: 600, color: "#d4a853", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" },
  industryDesc: { fontSize: 14, color: "#9a958e", lineHeight: 1.5, marginBottom: 16 },
  industryCta: { fontFamily: "'Archivo', sans-serif", fontSize: 13, fontWeight: 700, color: "#d4a853", textTransform: "uppercase", letterSpacing: "0.08em" },
  startInner: { maxWidth: 560, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 32, animation: "fadeUp 0.5s ease", position: "relative" },
  backBtn: { alignSelf: "flex-start", background: "none", border: "none", color: "#7a756e", fontSize: 13, fontWeight: 500, cursor: "pointer", padding: "4px 0", marginBottom: 12, fontFamily: "'Source Sans 3', sans-serif" },
  badge: { fontFamily: "'Archivo', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", color: "#d4a853", border: "1px solid #d4a853", borderRadius: 4, padding: "4px 14px", marginBottom: 20 },
  title: { fontFamily: "'Archivo', sans-serif", fontSize: 42, fontWeight: 900, margin: "0 0 12px", letterSpacing: "-0.02em", textAlign: "center", lineHeight: 1.1 },
  subtitle: { fontSize: 16, color: "#9a958e", textAlign: "center", lineHeight: 1.6, margin: "0 0 32px", maxWidth: 480 },
  categoryWrap: { width: "100%", marginBottom: 32 },
  catLabel: { fontSize: 12, fontWeight: 600, color: "#7a756e", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, display: "block", textAlign: "center" },
  catPills: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" },
  catPill: { background: "#1e1e1e", border: "1px solid #2a2a2a", borderRadius: 20, padding: "7px 16px", fontSize: 13, fontWeight: 500, color: "#9a958e", cursor: "pointer", transition: "all 0.2s", fontFamily: "'Source Sans 3', sans-serif" },
  catPillActive: { borderColor: "#d4a853", color: "#d4a853", background: "rgba(212,168,83,0.08)" },
  warning: { color: "#c44d4d", fontSize: 14, textAlign: "center", marginBottom: 16 },
  startBtn: { fontFamily: "'Archivo', sans-serif", fontSize: 16, fontWeight: 700, color: "#111", background: "#d4a853", border: "none", borderRadius: 8, padding: "14px 48px", cursor: "pointer", letterSpacing: "0.02em", marginBottom: 40, transition: "transform 0.15s, background 0.2s" },
  secondaryBtn: { fontFamily: "'Archivo', sans-serif", fontSize: 14, fontWeight: 600, color: "#9a958e", background: "transparent", border: "1px solid #2a2a2a", borderRadius: 8, padding: "12px 24px", cursor: "pointer", marginBottom: 40 },
  summaryButtonRow: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" },
  howItWorks: { display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 380, marginBottom: 32 },
  stepRow: { display: "flex", alignItems: "center", gap: 14 },
  stepNum: { fontFamily: "'Archivo', sans-serif", width: 32, height: 32, borderRadius: "50%", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#d4a853", flexShrink: 0 },
  stepText: { fontSize: 14, color: "#7a756e", lineHeight: 1.4 },
  frameworkHint: { width: "100%", maxWidth: 420, textAlign: "center", paddingTop: 8, borderTop: "1px solid #1e1e1e" },
  frameworkHintLabel: { fontFamily: "'Archivo', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#7a756e", textTransform: "uppercase", marginTop: 12, marginBottom: 8 },
  frameworkList: { display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" },
  frameworkItem: { fontSize: 12, color: "#5a564f", fontWeight: 500 },
  drillInner: { maxWidth: 600, width: "100%", animation: "fadeUp 0.4s ease" },
  drillHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  drillProgress: { display: "flex", gap: 6 },
  progressDot: { width: 10, height: 10, borderRadius: "50%", transition: "background-color 0.3s" },
  drillCount: { fontFamily: "'Archivo', sans-serif", fontSize: 13, fontWeight: 700, color: "#7a756e", letterSpacing: "0.05em" },
  metaRow: { display: "flex", gap: 8, marginBottom: 16, alignItems: "center" },
  personaTag: { fontSize: 11, fontWeight: 700, fontFamily: "'Archivo', sans-serif", color: "#d4a853", letterSpacing: "0.08em", textTransform: "uppercase" },
  categoryTag: { fontSize: 11, fontWeight: 600, color: "#5a564f", letterSpacing: "0.05em", textTransform: "uppercase" },
  objectionCard: { background: "#1a1a1a", border: "1px solid #252525", borderRadius: 12, padding: "28px 28px 24px", marginBottom: 24, position: "relative", animation: "fadeUp 0.35s ease" },
  objQuote: { fontFamily: "'Archivo', sans-serif", fontSize: 64, fontWeight: 900, color: "#252525", position: "absolute", top: 4, left: 16, lineHeight: 1, userSelect: "none" },
  objText: { fontSize: 20, fontWeight: 500, lineHeight: 1.55, margin: 0, position: "relative", zIndex: 1, fontStyle: "italic" },
  inputArea: { animation: "fadeUp 0.3s ease" },
  micWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "20px 0" },
  micBtn: { width: 72, height: 72, borderRadius: "50%", background: "#1e1e1e", border: "2px solid #d4a853", color: "#d4a853", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" },
  micLabel: { fontSize: 14, color: "#7a756e", fontWeight: 500 },
  switchBtn: { background: "none", border: "none", color: "#5a564f", fontSize: 13, cursor: "pointer", textDecoration: "underline", fontFamily: "'Source Sans 3', sans-serif", padding: 0 },
  recordingWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "20px 0" },
  recordingPulse: { position: "relative", width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center" },
  pulseRing: { position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid #c44d4d", animation: "pulseRing 1.5s ease-out infinite" },
  stopBtn: { width: 72, height: 72, borderRadius: "50%", background: "#c44d4d", border: "none", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative", zIndex: 2 },
  recordingTime: { fontFamily: "'Archivo', sans-serif", fontSize: 18, fontWeight: 700, color: "#c44d4d" },
  liveTranscript: { fontSize: 14, color: "#7a756e", fontStyle: "italic", textAlign: "center", maxWidth: 400, minHeight: 20 },
  reviewWrap: { background: "#1a1a1a", borderRadius: 10, padding: 20, marginBottom: 8 },
  reviewLabel: { fontSize: 12, fontWeight: 600, color: "#7a756e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 },
  reviewText: { fontSize: 15, lineHeight: 1.5, color: "#c8c3bc", margin: "0 0 16px" },
  reviewActions: { display: "flex", gap: 10, flexWrap: "wrap" },
  submitBtn: { fontFamily: "'Archivo', sans-serif", fontSize: 14, fontWeight: 700, color: "#111", background: "#d4a853", border: "none", borderRadius: 6, padding: "10px 24px", cursor: "pointer", transition: "opacity 0.2s" },
  editBtn: { background: "none", border: "1px solid #2a2a2a", borderRadius: 6, color: "#7a756e", fontSize: 13, padding: "8px 16px", cursor: "pointer", fontFamily: "'Source Sans 3', sans-serif" },
  textInputWrap: { display: "flex", flexDirection: "column", gap: 12 },
  textArea: { width: "100%", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, color: "#e8e4df", fontSize: 15, padding: "12px 16px", fontFamily: "'Source Sans 3', sans-serif", resize: "vertical", lineHeight: 1.5, boxSizing: "border-box", outline: "none" },
  gradingWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "36px 0" },
  spinner: { width: 36, height: 36, border: "3px solid #2a2a2a", borderTopColor: "#d4a853", borderRadius: "50%", animation: "spin 0.8s linear infinite" },
  gradingText: { fontSize: 14, color: "#7a756e", fontWeight: 500 },
  feedbackCard: { background: "#1a1a1a", border: "1px solid #252525", borderRadius: 12, padding: 24, animation: "fadeUp 0.4s ease" },
  feedbackTop: { display: "flex", gap: 20, marginBottom: 16 },
  feedbackSections: { flex: 1, display: "flex", flexDirection: "column", gap: 12 },
  frameworkBadgeRow: { display: "flex", alignItems: "center", gap: 8, paddingBottom: 8, borderBottom: "1px solid #252525" },
  frameworkBadgeLabel: { fontSize: 10, fontWeight: 700, fontFamily: "'Archivo', sans-serif", letterSpacing: "0.12em", color: "#7a756e" },
  frameworkBadgeName: { fontSize: 13, fontWeight: 700, fontFamily: "'Archivo', sans-serif", color: "#d4a853" },
  fbSection: {},
  fbLabel: { fontSize: 11, fontWeight: 700, fontFamily: "'Archivo', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 },
  fbText: { fontSize: 14, lineHeight: 1.5, color: "#c8c3bc", margin: 0 },
  exampleWrap: { background: "#151515", borderRadius: 8, padding: "14px 16px", marginBottom: 16 },
  exampleLabel: { fontSize: 11, fontWeight: 700, fontFamily: "'Archivo', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", color: "#d4a853", marginBottom: 6 },
  exampleText: { fontSize: 14, lineHeight: 1.5, color: "#9a958e", margin: 0, fontStyle: "italic" },
  nextBtn: { fontFamily: "'Archivo', sans-serif", fontSize: 14, fontWeight: 700, color: "#111", background: "#d4a853", border: "none", borderRadius: 6, padding: "12px 32px", cursor: "pointer", width: "100%" },
  summaryInner: { maxWidth: 600, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 32, animation: "fadeUp 0.5s ease" },
  summaryTitle: { fontFamily: "'Archivo', sans-serif", fontSize: 32, fontWeight: 900, margin: "0 0 28px", letterSpacing: "-0.02em" },
  summaryScoreWrap: { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32 },
  summaryScoreLabel: { fontSize: 13, color: "#7a756e", fontWeight: 600, marginTop: 8, textTransform: "uppercase", letterSpacing: "0.06em" },
  summaryCards: { display: "flex", gap: 16, width: "100%", marginBottom: 32, flexWrap: "wrap" },
  summaryCard: { flex: "1 1 240px", background: "#1a1a1a", border: "1px solid #252525", borderRadius: 10, padding: 18 },
  summaryCardTag: { fontSize: 11, fontWeight: 800, fontFamily: "'Archivo', sans-serif", letterSpacing: "0.1em", marginBottom: 8 },
  summaryCardText: { fontSize: 14, color: "#9a958e", fontStyle: "italic", lineHeight: 1.5, margin: "0 0 8px" },
  summaryCardScore: { fontSize: 13, fontWeight: 700, color: "#e8e4df", fontFamily: "'Archivo', sans-serif" },
  summaryCardTip: { fontSize: 13, color: "#7a756e", margin: "8px 0 0", lineHeight: 1.5 },
  allResults: { width: "100%", marginBottom: 32 },
  allResultsTitle: { fontFamily: "'Archivo', sans-serif", fontSize: 16, fontWeight: 700, color: "#7a756e", marginBottom: 16 },
  resultRow: { display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #1e1e1e" },
  resultLeft: { flexShrink: 0 },
  resultRight: { flex: 1 },
  resultObjText: { fontSize: 13, color: "#9a958e", fontStyle: "italic", margin: "0 0 4px" },
  resultFrameworkRow: { display: "flex", gap: 6, alignItems: "center", margin: "4px 0" },
  resultFrameworkLabel: { fontSize: 10, fontWeight: 700, color: "#5a564f", fontFamily: "'Archivo', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" },
  resultFrameworkName: { fontSize: 11, fontWeight: 700, color: "#d4a853", fontFamily: "'Archivo', sans-serif" },
  resultFeedback: { fontSize: 13, color: "#7a756e", margin: 0, lineHeight: 1.5 }
};
