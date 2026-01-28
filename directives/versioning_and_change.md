# AEVIR — Versioning & Change Directive

## Purpose

This directive defines how AEVIR evolves, records updates, and manages configuration changes.

**All change is explicit, traceable, and non-disruptive.**

---

## 1. Core Principle

**Change must never alter identity.**

Behavior is fixed; only inputs, sources, and modules evolve.

---

## 2. Versioning Rules

- Every system release is uniquely numbered
- Changes must be logged and immutable
- Configuration files are versioned separately from code
- Pulse logic, state behavior, and module taxonomy cannot be altered retroactively

---

## 3. Change Classification

### Minor Changes
- Bug fixes
- Source additions
- Logging enhancements

### Major Changes
- Module additions
- State modifications (requires directive update)
- Pulse logic refinement (requires directive update)

**All changes are documented in audit logs and linked to directives.**

---

## 4. Deployment Consistency

- Code, configuration, and directives are synchronized
- System identity remains constant across versions
- Backward compatibility is enforced unless explicitly deprecated

---

## 5. Enforcement

Any change that:
- Alters pulse semantics without directive update
- Alters state transitions without approval
- Alters module definitions silently

...violates this directive.

**AEVIR evolves responsibly.**

---

End of Directive
