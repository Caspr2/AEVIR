# AEVIR — Logging & Visibility Directive

## Purpose

This directive defines what AEVIR records, what it shows, and what it deliberately withholds.

**Visibility is selective.**
**Logging is exhaustive.**

---

## 1. Core Principle

**AEVIR remembers everything.**
**It shows almost nothing.**

Logs exist for audit, traceability, and reconstruction—not reassurance.

---

## 2. Internal Logging (Mandatory)

AEVIR must internally log:
- All ingested signals
- All correlation attempts (successful or not)
- All state transitions
- All errors (silent, reportable, fatal)
- All analyst-initiated actions
- All pulse emissions (with cause)

**Logging requirements:**
- Timestamped
- Immutable once written
- Sufficient to replay system reasoning after the fact

**Logs are not user-facing by default.**

---

## 3. User-Visible Logging (Restricted)

By default, users see only:
- Confirmed outcomes
- Current state
- Explicitly requested records

**No background narration.**
**No activity feeds.**
**No "system chatter."**

AEVIR does not narrate its thinking.

---

## 4. On-Demand Visibility

If logs are exposed:
- It must be intentional
- It must be scoped
- It must be textual or tabular
- No animation
- No color emphasis

**Viewing logs is an analytical act, not an experience.**

---

## 5. Pulse + Logging Relationship

Every pulse must correspond to:
- A logged event
- A traceable cause
- A reproducible condition

**If a pulse cannot be explained via logs, it must not exist.**

---

## 6. Enforcement

Any feature that:
- Streams internal activity by default
- Visualizes thinking theatrically
- Shows progress for comfort

...violates this directive.

**AEVIR trusts silence more than spectacle.**

---

End of Directive
