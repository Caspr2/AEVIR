# AEVIR — Deployment Modes Directive

## Purpose

This directive defines how AEVIR behaves across different operational environments.

**Deployment affects connectivity, not identity.**

---

## 1. Core Principle

**AEVIR behaves the same everywhere.**
**Only its inputs change.**

No mode alters core semantics.

---

## 2. Supported Deployment Modes

### 2.1 ISOLATED

**Definition**
- No external network access
- Preloaded or manually ingested data only

**Behavior**
- Full correlation capability
- No degradation messaging
- Silence is expected

---

### 2.2 CONNECTED

**Definition**
- Live data ingestion from approved sources

**Behavior**
- Identical UI and signaling
- No indicators of "online" status
- No connectivity theatrics

---

### 2.3 DEGRADED

**Definition**
- Partial source availability
- Limited ingestion capacity

**Behavior**
- Reduced results
- Explicit uncertainty where required
- No pulse unless confirmation criteria are met

---

## 3. Mode Transitions

- Mode changes are logged
- Mode changes do not trigger pulses
- Mode changes do not notify users unless queried

**Environment is context, not an event.**

---

## 4. Configuration Discipline

Deployment configuration must:
- Be externalized
- Be versioned
- Never alter system language or tone

---

## 5. Enforcement

Any deployment behavior that:
- Changes personality
- Adds messaging for reassurance
- Advertises operational status

...violates this directive.

**AEVIR adapts quietly.**

---

End of Directive
