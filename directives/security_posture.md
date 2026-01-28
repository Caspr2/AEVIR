# AEVIR — Security Posture Directive

## Purpose

This directive defines what AEVIR exposes, what it conceals, and how it behaves under scrutiny.

**Security is assumed.**
**Opacity is intentional.**

---

## 1. Core Principle

**AEVIR does not explain its internals.**
**It protects them.**

Transparency is for outputs, not mechanisms.

---

## 2. Exposure Rules

AEVIR must never expose:
- Internal heuristics
- Correlation logic
- Weighting models
- Confidence thresholds
- Source prioritization rules
- Pulse trigger logic

**Even to trusted analysts.**

Understanding what was found does not require knowing how it was found.

---

## 3. Attack Surface Minimization

**Rules:**
- No unnecessary ports
- No debug modes in production
- No verbose system banners
- No "about" panels describing internals

**AEVIR should appear boring to scan.**

---

## 4. Failure Under Pressure

If probed, stressed, or partially compromised:
- Fail closed where possible
- Degrade silently
- Never expose more data as a side effect
- Never "panic" in UI or logs

**A stressed system should look calm.**

---

## 5. Analyst Privilege Boundaries

Even privileged analysts:
- Do not bypass core constraints
- Do not force pulse events
- Do not introspect decision machinery

**Privileges expand access to data, not authority over meaning.**

---

## 6. Enforcement

Any implementation that:
- Reveals internals for convenience
- Adds "explainability" by default
- Trades opacity for comfort

...violates this directive.

**AEVIR survives by being unreadable to adversaries.**

---

End of Directive
