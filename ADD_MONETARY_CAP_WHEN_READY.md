# How to Add Monetary Liability Cap (When LLC is Official)
**Add this AFTER you complete LLC setup**

---

## ✅ Do These First:

1. **Complete LLC Formation:**
   - [ ] File Articles of Organization with NY State
   - [ ] Get EIN from IRS
   - [ ] Create Operating Agreement

2. **Capitalize the LLC:**
   - [ ] Open business bank account (in Scoopers LLC name)
   - [ ] Transfer money to LLC account ($1,000-$5,000+ shows good faith)
   - [ ] Document as capital contribution
   - [ ] Get business credit card in LLC name

3. **Separate Finances:**
   - [ ] NEVER mix personal and business money
   - [ ] Always use business account for Scoopers expenses
   - [ ] Sign contracts as "Beau Lazear, Manager of Scoopers LLC"

4. **Optional but Smart:**
   - [ ] Consult with lawyer about cap amount
   - [ ] Get general liability insurance
   - [ ] Consider cyber liability insurance

---

## 📝 Then Add This to Terms of Service

**File:** `src/components/Terms.jsx`

**Location:** Section 14 (LIMITATION OF LIABILITY), after the "COMPLETE LIMITATION OF LIABILITY" subsection, BEFORE "NO LIABILITY FOR THIRD-PARTY CONDUCT"

**Add this HTML:**

```jsx
          <H3>MAXIMUM MONETARY LIABILITY</H3>
          <P><strong>IF, NOTWITHSTANDING THE ABOVE, SCOOPERS LLC IS FOUND LIABLE TO YOU FOR ANY DAMAGES, OUR TOTAL LIABILITY SHALL NOT EXCEED THE LESSER OF:</strong></P>
          <UL>
            <li>The total amount you paid to Scoopers LLC in platform fees in the past 12 months, OR</li>
            <li>$100 (ONE HUNDRED DOLLARS)</li>
          </UL>
          <P><strong>This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability, or otherwise) and even if Scoopers LLC was aware or should have been aware of the possibility of such damages.</strong></P>
```

**Recommended Amount:** **$100** (industry standard)
- Too low ($50): Looks cheap, might not be defensible
- Just right ($100): Standard for platforms like Uber, Airbnb, TaskRabbit
- Too high ($500+): Defeats the purpose of the cap

---

## 🔍 Exact Location in Code

Find this section in `src/components/Terms.jsx`:

```jsx
          </UL>

          <H3>NO LIABILITY FOR THIRD-PARTY CONDUCT</H3>
          <P><strong>SCOOPERS LLC IS A PLATFORM ONLY.</strong> We do not employ...
```

Insert the new `<H3>MAXIMUM MONETARY LIABILITY</H3>` section RIGHT BEFORE the `<H3>NO LIABILITY FOR THIRD-PARTY CONDUCT</H3>` line.

---

## ⚠️ Why Wait?

If you add the cap NOW (before LLC is properly set up and funded):
- Courts could see the LLC as a "shell corporation"
- They might "pierce the corporate veil"
- YOU could become personally liable
- The cap wouldn't protect you

If you add the cap AFTER LLC is official:
- LLC is legitimate, properly capitalized entity
- Liability cap protects the LLC
- LLC's limited assets ($100 max) protect you personally
- Courts respect the corporate form

---

## 📋 Checklist Before Adding Cap

### **MUST DO:**
- [ ] LLC is registered with NY State
- [ ] LLC has EIN
- [ ] LLC has business bank account
- [ ] LLC has AT LEAST $1,000 in the bank account
- [ ] You're using LLC name on all business docs

### **SHOULD DO:**
- [ ] Lawyer reviewed cap amount ($100 recommended)
- [ ] LLC has Operating Agreement
- [ ] You have general liability insurance
- [ ] Stripe account is in LLC name (not personal)

### **NICE TO HAVE:**
- [ ] Lawyer reviewed full Terms of Service
- [ ] You have cyber liability insurance
- [ ] LLC has $5,000+ in capital (shows serious business)

---

## 🚀 When You're Ready

1. Complete checklist above
2. Add the code snippet to Terms.jsx
3. Update the "Last Updated" date to current date
4. Test that it displays correctly
5. Commit and deploy

**That's it! Your liability is now capped at $100 maximum.**

---

**Questions?** Email beau@scoopersnyc.com

**Made with 💩 in Brooklyn**
