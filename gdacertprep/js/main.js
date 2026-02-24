/* =============================================
   GDACertPrep.com — Main JavaScript
   ============================================= */

// ---- NAV HAMBURGER ----
const hamburger = document.querySelector('.nav-hamburger');
const navMobile = document.querySelector('.nav-mobile');
if (hamburger && navMobile) {
  hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navMobile.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// ---- FAQ ACCORDION ----
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.faq-question').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.style.maxHeight = null;
    });
    if (!isOpen) {
      btn.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ---- TOAST NOTIFICATION ----
function showToast(message, icon = '✅') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg"></span><button class="toast-close" onclick="this.parentElement.classList.remove('show')">×</button>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-icon').textContent = icon;
  toast.querySelector('.toast-msg').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// ---- EMAIL CAPTURE FORMS ----
document.querySelectorAll('.email-capture-form, .email-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', '⚠️');
      return;
    }
    // --- REPLACE THIS WITH YOUR EMAIL SERVICE (Mailchimp, ConvertKit, etc.) ---
    // fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    console.log('New subscriber:', email);
    this.innerHTML = '<p style="color:var(--teal);font-family:var(--font-d);font-weight:700;font-size:1.05rem;">🎉 You\'re in! Check your inbox for your free study checklist.</p>';
    showToast('Welcome aboard! Check your email.', '🎉');
  });
});

// ---- MODAL ----
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) closeModal(this.id);
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
});

// ---- CHECKOUT / BUY STUDY GUIDE ----
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
  checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const email = this.querySelector('#checkout-email').value;
    btn.textContent = 'Processing...';
    btn.disabled = true;
    // --- REPLACE WITH STRIPE OR PAYPAL INTEGRATION ---
    // Example: stripe.redirectToCheckout({ lineItems: [{price: 'price_XXX', quantity: 1}], mode: 'payment', successUrl: window.location.origin + '/study-guide/thank-you.html', cancelUrl: window.location.href, customerEmail: email })
    setTimeout(() => {
      btn.textContent = 'Complete Purchase →';
      btn.disabled = false;
      closeModal('checkout-modal');
      showToast('Purchase successful! Check your email for download link.', '🎉');
      // In production, redirect to thank-you page or trigger download
    }, 2000);
  });
}

// ---- SMOOTH SCROLL FOR IN-PAGE ANCHORS ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  });
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .testimonial-card, .sg-chapter').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});
