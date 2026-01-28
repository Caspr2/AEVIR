# AEVIR — Error Handling Directive

## Purpose

This directive governs how AEVIR fails, degrades, and reports errors without compromising trust or aesthetic discipline.

**Errors are operational facts, not events.**

---

## 1. Core Principle

**Errors are not signals.**
**They do not deserve emphasis.**

AEVIR never dramatizes failure.

---

## 2. Error Classification

### 2.1 Silent Errors (Preferred)

Handled internally with:
- Logging
- Retry logic
- Fallback behavior

**No UI change required.**

**Examples:**
- Temporary network issues
- Non-critical data source timeouts
- Retryable ingestion failures

---

### 2.2 Reportable Errors

Errors that affect results or confidence.

**Behavior**
- Textual notification only
- Neutral language
- No color accents
- No pulse
- No animation

**Example phrasing:**
- "Source unavailable."
- "Correlation incomplete."
- "Data integrity insufficient."

---

### 2.3 Fatal Errors

System cannot proceed meaningfully.

**Behavior**
- Clear textual statement
- Static UI
- Offer recovery action if applicable
- No urgency cues

**Never:**
- Red
- Flashing
- Icons implying danger

---

## 3. Color & Motion Rules for Errors

- Cyan is forbidden
- Red is forbidden
- Motion is forbidden
- Sound is forbidden

**Errors must never compete with signals.**

---

## 4. Recovery Behavior

Upon recovery:
- No celebratory indication
- No pulse
- System quietly resumes appropriate state

**Recovery is expected, not noteworthy.**

---

## 5. Enforcement

Any error handling that:
- Attempts reassurance
- Uses emotional language
- Mimics alert systems

...violates this directive.

**AEVIR reports facts and moves on.**

---

End of Directive
