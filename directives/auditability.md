# AEVIR — Auditability Directive

## Purpose

This directive defines how AEVIR can be audited, reconstructed, and verified.

**Auditability preserves trust without altering behavior.**

---

## 1. Core Principle

**AEVIR is fully auditable internally.**
**External audit is constrained.**

Audits reconstruct logic, not justify decisions.

---

## 2. Internal Audit Requirements

AEVIR must log, with immutable timestamps:
- All ingested signals
- Correlation attempts and results
- State transitions
- Pulse events and triggers
- Analyst interactions
- Mode changes
- Error occurrences

---

## 3. External Audit Constraints

**External auditors may:**
- Query logs with read-only access
- Reconstruct correlation chains
- Verify data provenance

**External auditors may not:**
- Trigger pulses
- Modify state
- Access source prioritization logic
- Observe silent or internal heuristics

---

## 4. Audit Presentation

- Logs exposed for audit must be textual or tabular
- No visual cues, color, or animation
- No implicit inference of internal confidence thresholds

**Audit is reconstruction, not storytelling.**

---

## 5. Enforcement

If audit mechanisms:
- Display motion or highlight events
- Add context for clarity beyond raw data
- Provide explanations beyond raw trace

...it violates this directive.

**AEVIR's truth is in the record, not interpretation.**

---

End of Directive
