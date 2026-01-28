// State
let systemState = 'IDLE';
let signals = [];
let echoes = [];
let scanActive = false;

// Initialize
document.getElementById('bootTime').textContent = getCurrentTime();

// Core Functions
function setState(state) {
  systemState = state;
  const pill = document.getElementById('statusPill');
  pill.textContent = state;
  pill.className = 'status-pill ' + state.toLowerCase();
  logEvent('STATE', state);
}

function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().slice(0, 8);
}

function triggerPulse() {
  const pulse = document.createElement('div');
  pulse.className = 'pulse';
  document.body.appendChild(pulse);
  setTimeout(() => pulse.remove(), 800);
}

function logEvent(type, detail) {
  const timeline = document.getElementById('timelineList');
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <span class="timeline-type">${type}</span>
    <span class="signal-time">[${getCurrentTime()}]</span>
    ${detail}
  `;
  timeline.insertBefore(item, timeline.firstChild);
}

// Scan Simulation
function initiateScan() {
  if (scanActive) return;
  scanActive = true;
  
  setState('OBSERVING');
  document.getElementById('scanBtn').disabled = true;
  logEvent('SCAN', 'Initiated');

  // Simulate signal detection
  setTimeout(() => {
    detectSignal('Anomalous TCP pattern on port 8443');
  }, 1200);

  setTimeout(() => {
    detectSignal('Certificate mismatch detected: CN mismatch');
  }, 2400);

  setTimeout(() => {
    detectSignal('Temporal cluster: 3 events within 120s');
    setState('CORRELATING');
  }, 3600);

  setTimeout(() => {
    // Correlation complete
    echoes.push('Pattern match: Historical echo from 2024-11-14');
    document.getElementById('echoCount').textContent = echoes.length;
    document.getElementById('echoesStatus').textContent = 'Correlation confirmed';
    
    setState('CONFIRMED');
    triggerPulse(); // ONLY pulse on confirmation
    logEvent('CORRELATION', 'Pattern match confirmed');
    
    setTimeout(() => {
      setState('IDLE');
      document.getElementById('scanBtn').disabled = false;
      document.getElementById('correlateBtn').disabled = false;
      scanActive = false;
    }, 2000);
  }, 5000);
}

function detectSignal(description) {
  signals.push({ time: getCurrentTime(), desc: description });
  document.getElementById('signalCount').textContent = signals.length;
  
  const signalList = document.getElementById('signalList');
  if (signalList.children.length === 1 && signalList.children[0].textContent.includes('Awaiting')) {
    signalList.innerHTML = '';
  }
  
  const item = document.createElement('div');
  item.className = 'signal-item new';
  item.innerHTML = `
    <div>${description}</div>
    <div class="signal-time">${getCurrentTime()}</div>
  `;
  signalList.insertBefore(item, signalList.firstChild);
  
  document.getElementById('signalsStatus').textContent = `${signals.length} detected`;
  logEvent('SIGNAL', description);
}

function correlateSignals() {
  if (signals.length === 0) return;
  
  setState('CORRELATING');
  document.getElementById('correlateBtn').disabled = true;
  logEvent('CORRELATE', 'Manual correlation requested');
  
  setTimeout(() => {
    const match = Math.random() > 0.5;
    if (match) {
      echoes.push('Manual correlation: Pattern similarity 87%');
      document.getElementById('echoCount').textContent = echoes.length;
      document.getElementById('echoesStatus').textContent = 'Correlation established';
      setState('CONFIRMED');
      triggerPulse();
      logEvent('CORRELATION', 'Manual correlation established');
    } else {
      setState('IDLE');
      logEvent('CORRELATION', 'Insufficient pattern density');
    }
    
    setTimeout(() => {
      setState('IDLE');
      document.getElementById('correlateBtn').disabled = false;
    }, 2000);
  }, 1500);
}

function exportData() {
  const report = {
    system: 'AEVIR',
    version: 'v1.0',
    exported_at: new Date().toISOString(),
    state: systemState,
    signals: signals,
    echoes: echoes
  };
  
  console.log('Export:', report);
  logEvent('EXPORT', 'Data exported');
  alert('Report exported to console');
}
