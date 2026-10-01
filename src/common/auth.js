import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWcoPSdMxBzoDOaU00pPUC5FKQjMhFxDo",
  authDomain: "alister-1e745.firebaseapp.com",
  projectId: "alister-1e745",
  storageBucket: "alister-1e745.firebasestorage.app",
  messagingSenderId: "26980221051",
  appId: "1:26980221051:web:e7fbbd693c64d6da9c22de",
  measurementId: "G-EVVDX756HC"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ---- NEW: login info passed down from the website that embeds the game ----

// Pages allowed to tell the game who the player is.
// Include whichever domains actually serve the page with the iframe.
const ALLOWED_PARENTS = [
  'https://alistermonstertamer.com',
  'https://alister.manakeep.com',
];

// Resolves with { uid, username, idToken } from the parent page, or null if
// the game isn't embedded or the visitor isn't logged in on the website
export function waitForParentAuth(timeoutMs = 1500) {
  return new Promise((resolve) => {
    if (window.parent === window) {      // not inside an iframe
      resolve(null);
      return;
    }

    const finish = (value) => {
      clearTimeout(timer);
      window.removeEventListener('message', onMessage);
      resolve(value);
    };

    const onMessage = (e) => {
      if (!ALLOWED_PARENTS.includes(e.origin)) return;
      if (!e.data || e.data.type !== 'auth') return;
      finish({ uid: e.data.uid, username: e.data.username, idToken: e.data.idToken });
    };

    const timer = setTimeout(() => finish(null), timeoutMs);
    window.addEventListener('message', onMessage);
    window.parent.postMessage({ type: 'game-ready' }, '*'); // carries no data
  });
}

// ---- Existing code below ----

// Waits for Firebase to restore any saved session, then returns the user or null
function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}

function friendlyError(code) {
  if (['auth/invalid-credential', 'auth/wrong-password', 'auth/user-not-found', 'auth/invalid-email'].includes(code)) {
    return 'Incorrect email or password.';
  }
  if (code === 'auth/too-many-requests') return 'Too many attempts. Try again later.';
  if (code === 'auth/unauthorized-domain') return 'This domain is not authorized in Firebase.';
  return 'Sign-in failed. Please try again.';
}

function showLogin() {
  const overlay = document.getElementById('login-overlay');
  const emailEl = document.getElementById('login-email');
  const passEl = document.getElementById('login-password');
  const btn = document.getElementById('login-btn');
  const errorEl = document.getElementById('login-error');

  overlay.hidden = false;

  return new Promise((resolve) => {
    const submit = async () => {
      errorEl.textContent = '';
      btn.disabled = true;
      try {
        const cred = await signInWithEmailAndPassword(auth, emailEl.value.trim(), passEl.value);
        overlay.hidden = true;
        passEl.value = '';
        resolve(cred.user);
      } catch (err) {
        errorEl.textContent = friendlyError(err.code);
      } finally {
        btn.disabled = false;
      }
    };
    btn.onclick = submit;
    passEl.onkeydown = (e) => { if (e.key === 'Enter') submit(); };
  });
}

// Returns the signed-in user, showing the login form first if needed
export async function requireUser() {
  const existing = await getCurrentUser();
  return existing || showLogin();
}

export function doSignOut() {
  return signOut(auth);
}