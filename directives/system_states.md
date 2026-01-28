# AEVIR — System State Directive

## Purpose

This directive defines the finite, authoritative system states AEVIR may occupy and how the system behaves—visually and functionally—within each state.

**AEVIR must always be in exactly one state.**

---

## 1. Core Principle

**State determines behavior.**
**Behavior never implies state.**

The system does not "act busy" unless it is busy.
It does not "feel idle" unless it is idle.

---

## 2. Canonical System States

AEVIR supports the following states only.

**No additional states may be introduced without extending this directive.**

---

### 2.1 IDLE

**Definition**
AEVIR is loaded but not actively ingesting, scanning, or correlating.

**Behavior**
- No animation
- No pulse
- No ambient motion
- Static UI

**Intent**
Idle should feel calm, silent, and confident—not empty.

---

### 2.2 OBSERVING

**Definition**
AEVIR is passively ingesting data or monitoring defined inputs.

**Behavior**
- No pulse
- Optional minimal indicators (textual or static)
- No visible progress indicators

**Intent**
Observation is continuous and uneventful by default.

---

### 2.3 CORRELATING

**Definition**
AEVIR is actively evaluating relationships between signals, time, or sources.

**Behavior**
- No pulse during computation
- No progress theatrics
- Internal activity remains largely invisible

**Intent**
Correlation is internal cognition, not performance.

---

### 2.4 CONFIRMED

**Definition**
A meaningful signal, pattern, or correlation has been established.

**Behavior**
- One cyan pulse (per pulse_events directive)
- Optional concise textual acknowledgment
- No repetition unless state changes again

**Intent**
This is where AEVIR speaks—once.

---

### 2.5 DORMANT

**Definition**
No relevant signals detected over a defined period.

**Behavior**
- Identical to IDLE
- No reassurance messaging
- No "still watching" indicators

**Intent**
Dormancy is not failure. Silence is valid.

---

## 3. State Transitions

**Allowed transitions only:**
- IDLE → OBSERVING
- OBSERVING → CORRELATING
- CORRELATING → CONFIRMED
- CONFIRMED → OBSERVING
- OBSERVING → DORMANT
- DORMANT → OBSERVING

**Any other transition is invalid.**

---

## 4. Enforcement

If UI behavior suggests:
- Activity without state
- Emotion without meaning
- Motion without intent

...the implementation violates this directive.

---

End of Directive
