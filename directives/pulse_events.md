# AEVIR — Cyan Pulse Event Directive

## Purpose

This directive governs when, why, and how the AEVIR cyan pulse may occur.

The pulse is a semantic signal, not a cosmetic animation.
If misused, it loses meaning and degrades trust.

---

## 1. Fundamental Rule

**AEVIR does not pulse on presence.**
**It pulses on understanding.**

No pulse should ever occur merely because the system has loaded, started, or exists.

---

## 2. Boot & Initialization Behavior (Critical)

### 2.1 Prohibited on Boot

The following must never trigger a cyan pulse:
- Application launch
- System boot
- UI mount
- Initial render
- Loading completion
- Authentication success
- Idle readiness

**Rationale:**
- These are expected states
- Pulsing here trains the user to ignore the signal
- Awareness must be earned, not announced

**AEVIR should feel silent at rest.**

---

### 2.2 Required Delay Window

After boot, AEVIR enters a quiet window.

**Rules:**
- No pulses during this window
- Duration may be fixed or data-dependent
- Window ends only when the system has:
  - Ingested data
  - Performed at least one meaningful evaluation
  - Reached an internal confidence threshold

**Conceptually:**

> AEVIR waits until it knows something worth acknowledging.

---

## 3. First Allowed Pulse (Threshold Event)

The first cyan pulse is special.

It may occur only when:
- A non-trivial signal is detected
- OR a correlation is confirmed
- OR a monitored condition crosses a defined boundary

This pulse communicates:

> "The system is now actively aware."

It must:
- Be singular
- Be clean
- Not repeat unless a new class of signal is found

No text explanation is required.

---

## 4. Authorized Pulse Triggers

A cyan pulse may be emitted only for the following event classes:

### 4.1 Detection Events
- New signal discovery
- Previously unseen pattern
- First appearance of a monitored entity

### 4.2 Correlation Events
- Cross-source confirmation
- Temporal alignment
- Signal-to-history match ("echo")

### 4.3 State Transitions
- Unknown → Known
- Uncorrelated → Correlated
- Dormant → Active

### 4.4 Manual Analyst Actions (Optional)
- Explicit user-initiated scan
- Forced correlation request

Only if the action produces a meaningful result.

---

## 5. Forbidden Pulse Triggers

A cyan pulse must never occur for:
- Errors or failures
- Warnings or alerts
- Empty results
- "No signal found"
- Polling intervals
- Heartbeats or keep-alives
- Cosmetic UI transitions
- User hover, focus, or navigation

**Errors should be silent or textual—never aesthetic.**

---

## 6. Pulse Intensity & Frequency

### 6.1 Intensity

By default:
- One intensity level
- No hierarchy unless operationally required

If multiple intensities exist:
- They must correspond to signal class, not severity emotion
- Differences should be subtle, not dramatic

**No "critical" pulse theatrics.**

---

### 6.2 Frequency Control

**Rules:**
- Pulses must not stack
- Pulses must not queue visually
- Minimum cool-down enforced between pulses
- If multiple events occur simultaneously, emit one pulse

**AEVIR acknowledges awareness, not every detail.**

---

## 7. Visual Form Constraints

Pulse may be:
- Line-based
- Edge-based
- Minimal waveform

Never:
- Full-screen
- Center-dominant
- Accompanied by sound

**The pulse should feel like a measurement artifact, not an alert.**

---

## 8. Failure & Silence States

In the absence of meaningful signals:
- No pulse
- No animation
- No reassurance

**Silence is an intentional state.**

---

## 9. Enforcement

Any implementation that:
- Pulses on boot
- Pulses to "look alive"
- Pulses for attention

...violates this directive and must be corrected.

**AEVIR earns trust through restraint.**

---

## Implementation Notes

### Current app.js Compliance Check
The existing boot sequence skips animation entirely:
```javascript
boot.classList.add("hidden");
app.classList.remove("hidden");
```

This is **compliant** - no pulse on boot.

### Future Implementation Requirements
When pulse events are added:
1. Implement quiet window timer (minimum 3-5 seconds post-boot)
2. Add signal threshold evaluation before first pulse
3. Enforce cool-down between pulses (minimum 2 seconds)
4. Never pulse without a triggering event class from section 4

---

End of Directive
