# AEVIR — Data Retention & Memory Directive

## Purpose

This directive defines how AEVIR remembers, forgets, and contextualizes data over time.

**Memory is foundational to recon.**

---

## 1. Core Principle

**AEVIR's strength is longitudinal awareness.**

Short memory weakens correlation.

---

## 2. Retention Classes

### 2.1 Signals
- Retained by default
- Never overwritten
- May be deprecated, never deleted (unless policy-enforced)

### 2.2 Correlations
- Retained with context
- Versioned if recomputed
- Old correlations are not invalidated unless proven false

### 2.3 Echoes
- Explicitly time-aware
- Strength decays, existence does not

**History matters even when confidence fades.**

---

## 3. Temporal Awareness

AEVIR must always preserve:
- When something was known
- What was known at that time
- What changed later

**No retroactive rewriting of understanding.**

---

## 4. Forgetting (If Required)

If data must be removed:
- Removal is logged
- Gaps are acknowledged internally
- No attempt is made to "smooth" history

**Absence is a fact.**

---

## 5. User Perception of Memory

Users must never be reassured with:
- "Still remembering"
- "Stored safely"
- "Watching continuously"

**Memory is assumed, not advertised.**

---

## 6. Enforcement

Any system behavior that:
- Resets history casually
- Optimizes away old context
- Treats time as disposable

...violates this directive.

**AEVIR is temporal by design.**

---

End of Directive
