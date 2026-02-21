# MVP Plan Alignment Updates
**Based on scoopersnyc.com website analysis**

---

## 🎯 Key Discrepancies Found

### 1. **Geographic Market Mismatch**

**Website says:**
- "Launching Spring 2026 in NYC (all 5 boroughs)"
- Footer: "Made with 💩 in NYC"

**MVP Plan says:**
- Brooklyn-focused (neighborhood examples: Park Slope, Prospect Heights, Windsor Terrace, East New York)
- Footer: "Made with 💩 in Brooklyn"

**RECOMMENDED FIX:**
```diff
MVP Plan updates:

Section 1.5 Tagline Hierarchy - Footer tagline:
- OLD: "Made with 💩 in Brooklyn"
+ NEW: "Made with 💩 in NYC"

Section 2.1 Neighborhood Stats Ticker - Update examples:
- Still use Brooklyn neighborhoods for examples (Park Slope, etc.)
- But add note: "Initial launch focuses on Brooklyn neighborhoods with expansion to all 5 boroughs in Spring 2026"

Section 5.4 Neighborhood Availability:
- Expand neighborhood list beyond Brooklyn to include:
  - Manhattan: Upper West Side, Upper East Side, Hell's Kitchen, East Village, West Village
  - Queens: Astoria, Long Island City, Forest Hills, Jackson Heights
  - Bronx: Riverdale, Fordham, Mott Haven
  - Staten Island: St. George, Stapleton, Tottenville
```

---

### 2. **Tagline Mismatch**

**Website uses:**
- Hero subtitle: "Clean blocks. Happy New Yorkers."

**MVP Plan says:**
- Evergreen tagline: "Clean blocks. Happy neighbors. Easy money."

**RECOMMENDED FIX:**
```diff
Section 1.5 Tagline Hierarchy:

- OLD: Evergreen tagline: "Clean blocks. Happy neighbors. Easy money."
+ NEW: Evergreen tagline: "Clean blocks. Happy New Yorkers." (or "Happy neighbors" for non-NYC markets)

Marketing hierarchy should be:
1. Primary tagline (website hero): "Clean blocks. Happy New Yorkers."
2. Value prop (CTA): "Post cleanup jobs for your block. Or claim jobs and earn money."
3. Brand descriptor (for walkers): "Dog walkers keeping your block clean."
4. Campaign/ad copy: "Hire a dog walker to clean the shit off your block." / "Your block has a shit problem. We have dog walkers."
```

---

### 3. **Block Sponsorship NOT Mentioned on Website** ⚠️

**Website messaging:**
- Only talks about one-off jobs
- "See a mess → Post a price → It's gone"
- No mention of recurring sponsorships, monthly maintenance, or "hiring a dog walker to maintain your block"

**MVP Plan:**
- Block sponsorship is a MAJOR feature (Section 6 - full recurring model)
- Entire public map is designed around showing sponsored blocks with green glows/shields
- Neighbor contributions, monthly ratings, charitable sponsorships

**RECOMMENDED FIX - Option A (Add Sponsorship to Website):**

Add a new section to LandingPage.jsx after "How It Works" section:

```jsx
{/* Block Sponsorship */}
<section className="sponsorship" aria-labelledby="sponsorship-heading">
  <div className="container">
    <h2 id="sponsorship-heading" className="sponsorship-title">
      Hire a dog walker to keep your block clean — every week.
    </h2>
    <p className="sponsorship-text">
      Stop posting one-off jobs. Sponsor your block instead. A dog walker
      sweeps your block on a regular schedule (weekly or biweekly) for
      $40-$60/month. Your block gets a green badge on the map. Neighbors
      can chip in. Your block stays clean.
    </p>
    <div className="sponsorship-benefits">
      <div className="benefit">✓ Regular maintenance by a dog walker</div>
      <div className="benefit">✓ Your block shows green on the public map</div>
      <div className="benefit">✓ Neighbors can support and contribute</div>
      <div className="benefit">✓ $40-$60/month for biweekly sweeps</div>
    </div>
  </div>
</section>
```

**RECOMMENDED FIX - Option B (Clarify in MVP Plan that Sponsorship is Phase 2):**

```diff
Section 1.3 Two Products, One App:
+ NOTE: For initial Spring 2026 launch, marketing and onboarding will focus
+ on one-off jobs only. Block sponsorship will be available in-app but not
+ prominently featured in marketing until Phase 2 (Summer 2026) after
+ one-off job marketplace is proven.

Section 11 Build Order:
Phase 1: Core MVP (One-Off Jobs)
- Ship after this phase. This is the working product.
+ Website messaging focuses entirely on one-off jobs.

Phase 3: Block Sponsorship
+ Launch block sponsorship feature in-app
+ Update website to add sponsorship messaging (new section)
+ Update hero subtitle to "Clean blocks. Happy New Yorkers. Sponsor your block."
```

---

### 4. **Job Type Scope on Website is Broader**

**Website says:**
- "Dog waste, trash piles, litter — you decide what it's worth."
- "What kind of messes? Dog waste, litter, trash piles."

**MVP Plan says:**
- One-off jobs: Poop Only, Litter Only, Poop & Litter
- Sponsorships: Poop-only (recurring)
- Explicitly excludes large items, hazardous materials, liquids

**RECOMMENDED FIX:**
```diff
Section 3.1 One-Off Job Types - Add clarification:

Poop Only — animal waste on the sidewalk
Litter Only — trash, cigarette butts, food wrappers, cups, general debris
Poop & Litter — both (most common for one-off jobs)
+ Trash Piles — small concentrated trash accumulations on sidewalk (bags, boxes, cups)
+   - NOT furniture, appliances, or construction debris
+   - Must be hand-clearable with standard trash bags
+   - Posters upload photos, scoopers can reject if "Worse Than Described"
```

This aligns with website copy "trash piles" while keeping exclusions clear.

---

### 5. **Dog Walker Positioning**

**Website headline:**
- "Dog Walkers NYC: Browse Jobs on the Map, Claim, Clean, Get Paid"
- Clearly targeting professional dog walkers first

**MVP Plan:**
- "Dog walkers are the primary scooper type for sponsorships"
- "Non-walkers can claim one-off jobs"

**STATUS:** ✅ Already aligned. No changes needed.

The MVP plan correctly identifies dog walkers as the hero persona for sponsorships while keeping one-off jobs open to anyone. Website leans into dog walker messaging, which is smart for initial traction.

---

### 6. **Intro Animation Messaging**

**Website intro:**
- "Tired of stepping in dog sh*t?" (user's favorite part)
- Tells Beau's story: "A dog walker always cleaning up after himself, yet still stepping in sh*t."

**MVP Plan:**
- Doesn't reference this origin story or intro animation
- Product philosophy section is dry and functional

**RECOMMENDED FIX:**
```diff
Section 1. Product Philosophy - Add new subsection:

1.1 Origin Story
Scoopers was built by Beau, a Brooklyn dog walker who was tired of stepping
in dog shit on every walk — even though he always cleaned up after his own
dogs. He realized dog walkers are out there 3x a day anyway, walking the
same blocks, carrying bags. Why not pay them to clean the block while they're
already there?

This origin story drives our product philosophy:
- Dog walkers are the heroes, not random gig workers
- They're already on these blocks daily with supplies
- They have professional incentive to keep blocks clean (good for their business)
- Residents just need an easy way to hire them

1.2 What Scoopers Is
[rest of existing content]
```

This gives context for why the product exists and reinforces the dog walker positioning.

---

## 📋 Summary of Required MVP Plan Updates

### ✅ **Immediate Updates** (must fix)
1. Change "Made with 💩 in Brooklyn" → "Made with 💩 in NYC"
2. Change evergreen tagline to "Clean blocks. Happy New Yorkers."
3. Expand neighborhood examples to include all 5 boroughs
4. Add "trash piles" to one-off job types (Section 3.1)

### ⚠️ **Strategic Decision Required**
**Block Sponsorship Visibility:**
- **Option A:** Add block sponsorship section to website NOW (before launch)
- **Option B:** Keep sponsorship quiet until Phase 2, focus all marketing on one-off jobs

**Recommendation:** Go with Option B. Here's why:
- Website is already strong on one-off jobs value prop
- Simpler to market one concept at launch ("See a mess → Post a price → It's gone")
- Sponsorship can be discovered organically in-app by power users
- Once one-off marketplace proves itself, THEN market sponsorships heavily
- "Tired of posting jobs? Sponsor your block instead" becomes the natural Phase 2 upsell

### 🎨 **Nice-to-Have Updates**
1. Add Beau origin story to Section 1.1 (reinforces dog walker positioning)
2. Update neighborhood stats ticker examples to show 5-borough diversity
3. Add note in Phase 1 build order: "Website marketing focuses on one-off jobs only"

---

## 🎬 Keep the Intro Animation!

The intro animation sequence is perfect:
1. "Tired of stepping in dog sh*t?" (Phase 1 - fade in/out)
2. Beau photo + "So was Beau." (Phase 3)
3. "A dog walker always cleaning up after himself, yet still stepping in sh*t." (Phase 4)

This storytelling beats any product feature list. It creates emotional connection and establishes credibility (built by a real dog walker, not tech bros).

**MVP Plan should reference this explicitly:**
```diff
Section 11. Build Order - Phase 1: Core MVP

+ Landing page intro animation (9-second sequence):
+   - Problem statement: "Tired of stepping in dog sh*t?"
+   - Origin story: Beau photo + founding narrative
+   - Skippable after first view (sessionStorage)
+   - Replay button for testing (remove before production)
```

---

**Next Steps:**
1. Review these recommendations
2. Decide on block sponsorship marketing strategy (Option A or B)
3. Update MVP plan with geography/tagline fixes
4. Optionally add origin story section

Let me know if you want me to generate the updated MVP plan with these changes applied, or if you want to discuss the strategic decisions first.
