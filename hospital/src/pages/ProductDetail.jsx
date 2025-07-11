import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import img1 from '../assets/category/product1.jpeg';
import img2 from '../assets/category/product2.jpeg';
import img3 from '../assets/category/product3.jpeg';
import img4 from '../assets/category/product4.jpeg';
import img5 from '../assets/category/product5.webp';
import img6 from '../assets/category/product6.jpeg';
import img7 from '../assets/category/product7.jpg';
import img8 from '../assets/category/product8.jpg';
import img9 from '../assets/category/product9.jpg';
import img10 from '../assets/category/product10.avif';
import img11 from '../assets/category/product11.webp';
import img12 from '../assets/category/product12.avif';
import img13 from '../assets/category/product13.webp';
import img14 from '../assets/category/product14.avif';
import img15 from '../assets/category/product15.avif';
import img16 from '../assets/category/product16.jpg';
import img17 from '../assets/category/product17.jpg';
import img18 from '../assets/category/product18.jpg';
import img19 from '../assets/category/product19.jpg';
import img20 from '../assets/category/product20.jpg';
import img21 from '../assets/category/product21.jpg';
import img22 from '../assets/category/product22.jpg';
import img23 from '../assets/category/product23.jpg';
import img24 from '../assets/category/product24.jpg';
import img25 from '../assets/category/product25.jpg';
import img26 from '../assets/category/product26.jpg';
import img27 from '../assets/category/product27.jpg';
// Import new 3 products images
import Img1 from "../assets/shirt/cream1.jpeg";
import Img2 from "../assets/shirt/lotion1.jpeg";
import Img3 from "../assets/shirt/paingo1.jpeg";

const ProductsData = [
  // ... your previous 27 products
  {
    id: 1,
    title: "Organic Green Tea",
    oldPrice: "250.00",
    price: "180.00",
    rating: 4.8,
    reviews: 12,
    quantity: 1,
    img: img1,
    description: `
🌿 Discover the refreshing purity of Organic Green Tea — a perfect blend of wellness and flavor. Grown in high-altitude organic gardens without the use of chemicals or pesticides, this tea delivers a clean, earthy aroma and a taste that soothes both body and soul. Rich in antioxidants and natural goodness, it's a gentle yet powerful companion for your daily health ritual.
Key Benefits of Our Organic Green Tea:
  
    🍃 100% Organically Grown Leaves — free from chemicals or artificial additives.
    🌾 Smooth, Earthy Flavor — offers a calming aroma and rich, natural taste.
    💪 Boosts Metabolism — supports fat burning and energy levels.
    🌿 Rich in Antioxidants — helps fight free radicals and promotes cellular health.
    🧠 Enhances Mental Clarity — improves focus without caffeine crashes.
    🍽️ Aids Digestion — soothes the gut and promotes a healthy digestive system.
    🧘 Ideal for Detox — supports natural cleansing and toxin removal.
    🌸 Promotes Daily Wellness — great for weight management and immunity.
    ❄️ Versatile — enjoy it hot for comfort or iced for a refreshing twist.
    🌾 Perfect for All Seasons — light, nourishing, and always uplifting.
  
How To Use:
Steep one teaspoon of Organic Green Tea leaves in hot water (around 80°C) for 2–3 minutes. Enjoy it hot for a soothing experience or chilled with ice for a refreshing drink. Consume 1–2 cups daily to boost metabolism and support overall wellness. Avoid boiling water to preserve delicate flavors and antioxidants. Perfect for any time of day.  `
  },
  {
    id: 2,
    title: "Herbal Hair Oil",
    oldPrice: "350.00",
    price: "300.00",
    rating: 4.6,
    reviews: 8,
    quantity: 1,
    img: img2,
    description: `
🌿 Experience the nourishing power of Herbal Hair Oil — a natural blend of time-tested herbs and essential oils formulated to revitalize your scalp and strengthen your hair from root to tip. Free from harmful chemicals, this oil penetrates deeply to restore shine, reduce hair fall, and promote healthy, vibrant growth.
Key Benefits of Our Herbal Hair Oil:

    🌱 100% Natural Ingredients — made with traditional herbs and no synthetic chemicals.
    🧴 Deep Nourishment — penetrates the scalp to revitalize hair roots and follicles.
    🍃 Strengthens Hair — reduces breakage and promotes thicker, healthier strands.
    🧘‍♀️ Soothes Scalp — helps reduce itchiness, dryness, and dandruff.
    🌿 Promotes Hair Growth — encourages new hair growth and reduces hair fall.
    ✨ Adds Shine & Softness — makes hair smoother, shinier, and more manageable.
    🌼 Aromatherapy Benefits — calming herbal scent helps ease stress and tension.
    🛡️ Protects from Damage — shields hair from heat, pollution, and sun exposure.

How To Use:
Take a small amount of Herbal Hair Oil and gently massage it into your scalp using circular motions. Leave it on for at least 30 minutes, or overnight for deeper nourishment. Wash off with a mild shampoo. Use 2–3 times a week to strengthen roots and promote healthy hair growth. Warm the oil slightly for enhanced absorption.
`
  },
  {
    id: 3,
    title: "Natural Skin Cream",
    oldPrice: "300.00",
    price: "250.00",
    rating: 4.7,
    reviews: 10,
    quantity: 1,
    img: img3,
    description: `
🌸 Rejuvenate your skin with the gentle touch of our Natural Skin Cream — crafted with botanical extracts, essential oils, and rich moisturizers to nourish, hydrate, and protect. Designed to suit all skin types, this cream absorbs quickly and leaves your skin feeling soft, radiant, and refreshed without any greasy residue.
Key Benefits of Our Natural Skin Cream:

    🌿 100% Natural Ingredients — free from parabens, sulfates, and synthetic fragrances.
    💧 Deep Hydration — locks in moisture and keeps skin supple all day long.
    🌼 Brightens Skin Tone — helps even out complexion and reduce dullness.
    🧖‍♀️ Soothes Irritation — calms redness, dryness, and sensitive skin.
    🍃 Lightweight Texture — absorbs quickly with no sticky or oily feel.
    ✨ Boosts Natural Glow — enhances skin's radiance and elasticity.
    🌱 Rich in Antioxidants — helps protect against environmental stressors.
    🛡️ Strengthens Skin Barrier — supports long-term skin resilience and health.
    🌺 Suitable for All Skin Types — gentle enough for daily use on face and body.
    🌞 Day & Night Use — perfect as a base under makeup or a soothing night cream.
  
How To Use:
Apply a small amount of Natural Skin Cream to clean, dry skin. Gently massage in upward circular motions until fully absorbed. Use twice daily, in the morning as a base for makeup and at night for deep hydration. Suitable for face and body. For best results, include in your daily skincare routine. `
  },
  {
    id: 4,
    title: "Aromatherapy Essential Oil",
    oldPrice: "400.00",
    price: "280.00",
    rating: 4.9,
    reviews: 15,
    quantity: 1,
    img: img4,
    description: `
🌿 Immerse yourself in the calming essence of our Aromatherapy Essential Oil — a pure, therapeutic-grade blend crafted to soothe the senses, uplift the mind, and restore emotional balance. Whether diffused, applied topically (with carrier oil), or added to a bath, this oil promotes deep relaxation and holistic wellness for both body and spirit.
Key Benefits of Our Aromatherapy Essential Oil:

    🌱 100% Pure & Natural — no additives, fillers, or synthetic fragrances.
    🧘 Calms the Mind — reduces stress, anxiety, and emotional fatigue.
    🌸 Elevates Mood — promotes positivity, focus, and emotional clarity.
    🛁 Enhances Relaxation — ideal for use in baths, massage, or bedtime rituals.
    🌀 Supports Better Sleep — encourages deeper, more restful sleep.
    🌿 Multi-Purpose — suitable for diffusers, steam inhalation, or topical use.
    💧 Potent & Long-Lasting — concentrated formula with lasting aroma.
    🧴 Skin-Friendly — gentle when diluted with carrier oils for safe application.
    🍃 Natural Air Purifier — helps freshen indoor air and eliminate odors.
    🌼 Ideal for Daily Rituals — a perfect companion for yoga, meditation, and self-care.
    
How To Use:
Add a few drops of Aromatherapy Essential Oil to a diffuser to fill your space with calming fragrance. For topical use, dilute with a carrier oil and gently massage onto temples, wrists, or neck. Add to a warm bath for a soothing soak. Use during meditation, yoga, or bedtime to relax the mind and body. Avoid direct application without dilution.`
  },
  {
    id: 5,
    title: "Detox Herbal Tea",
    oldPrice: "400.00",
    price: "300.00",
    rating: 4.5,
    reviews: 9,
    quantity: 1,
    img: img5,
    description: `
🌿Cleanse and revitalize your body with our Detox Herbal Tea — a soothing blend of detoxifying herbs, flowers, and roots designed to gently flush out toxins, support digestion, and restore inner balance. Crafted without caffeine, this tea is perfect for daily wellness, offering a natural boost to your metabolism and overall vitality.
Key Benefits of Our Detox Herbal Tea:

    🌿 Natural Detox Formula — supports liver and kidney function for effective cleansing.
    🌼 Boosts Metabolism — aids in natural fat burning and energy renewal.
    🍋 Improves Digestion — soothes bloating, gas, and sluggish digestion.
    🧘 Promotes Inner Balance — helps reduce inflammation and water retention.
    ❄️ Caffeine-Free — enjoy any time of day without affecting sleep.
    💧 Flushes Out Toxins — supports elimination of waste and toxins from the body.
    🍵 Gentle on the Stomach — calming herbs make it easy to digest.
    🌸 Enhances Skin Clarity — promotes a clearer, healthier complexion from within.
    🛡️ Strengthens Immunity — packed with antioxidants and antimicrobial herbs.
    ☀️ Ideal for Daily Use — a gentle, holistic addition to your wellness routine.
    
How To Use: 
Boil fresh water and steep one Detox Herbal Tea bag for 5–7 minutes. For best results, drink on an empty stomach in the morning or before bedtime. Enjoy 1–2 cups daily to support natural detoxification and digestion. Use consistently as part of your wellness routine. Avoid adding sugar to maintain its cleansing benefits.`
  },
  {
    id: 6,
    title: "Organic Superfood Pack",
    oldPrice: "1200.00",
    price: "1000.00",
    rating: 4.8,
    reviews: 11,
    quantity: 1,
    img: img6,
    description: `
🥄 Fuel your day with our Organic Superfood Pack — a powerhouse blend of nature’s most nutrient-dense ingredients designed to nourish, energize, and support overall wellness. Packed with essential vitamins, minerals, and antioxidants, this vibrant superfood mix is ideal for smoothies, oatmeal, juices, or simply mixed with water. It’s your daily boost for vitality, immune strength, and radiant health — all in one spoonful!
Key Benefits of Our Organic Superfood Pack:

   🌱 Complete Nutrient Support — loaded with vitamins to nourish your body.
   ⚡ Natural Energy Boost — promotes sustained energy levels without caffeine crashes.
   🛡️ Strengthens Immunity — rich in antioxidants that help support immune defense.
   💚 Supports Digestion — includes fiber-rich greens that aid in healthy gut function.
   ✨ Enhances Skin & Hair Health — promotes a stronger hair from within.
   🔥 Boosts Metabolism — supports natural fat burning and helps maintain healthy weight.
   🌿 Alkalizing Formula — helps balance pH levels and reduce acidity in the body.
   🥄 Versatile & Easy to Use — perfect for smoothies, or simply stirred into water.
   🚫 No Additives or Fillers — 100% organic, plant-based, gluten-free, and vegan.

How To Use:
Add 1 teaspoon (5g) of the Organic Superfood Pack to your favorite smoothie, juice, or glass of water. Stir or blend until smooth. Best consumed in the morning or before workouts for an energizing start. Use daily to support your wellness goals. Avoid mixing with sugary drinks to preserve the natural benefits.

`
  },
  {
    id: 7,
    title: "Herbal Face Mask",
    oldPrice: "700.00",
    price: "450.00",
    rating: 4.7,
    reviews: 13,
    quantity: 1,
    img: img7,
    description: `
🌸 Refresh and renew your skin with our Herbal Face Mask — a soothing, mineral-rich blend of botanical powders and clays crafted to detoxify pores, calm inflammation, and restore your skin’s natural glow. Made with time-tested Ayurvedic and herbal ingredients, this mask is perfect for all skin types seeking a gentle yet effective skincare ritual.
Key Benefits of Our Herbal Face Mask:

   🌿 Deep Detox & Purification — draws out impurities, toxins, and excess oil from pores.
   🌼 Soothes Inflammation — calming herbs reduce redness, irritation, and acne flare-ups.
   ✨ Promotes Natural Glow — gently exfoliates dead skin, revealing brighter, smoother skin.
   🧖‍♀️ Tightens & Tones — natural clays help firm the skin and refine texture.
   💧 Hydrates & Nourishes — botanical extracts provide moisture and essential nutrients.
   🍃 Gentle & Non-Toxic — free from artificial fragrances, parabens, and harsh chemicals.
   🌸 Balances Oily & Dry Skin — adapts to your skin’s needs for a more even complexion.
   🛡️ Antioxidant-Rich — helps fight environmental stress and signs of premature aging.
   🌱 All-Natural Formula — made with pure herbal ingredients like neem and sandalwood.
   🌿 Ideal for Weekly Use — great for self-care rituals and keeping your skin healthy long-term.

How To Use:
Mix 1–2 teaspoons of the Herbal Face Mask powder with water, rose water, or yogurt to form a smooth paste. Apply evenly to clean, dry skin, avoiding the eye area. Leave on for 10–15 minutes, then rinse with lukewarm water. Use 1–2 times per week for best results. Follow with a light moisturizer or herbal serum.

`
  },
  {
    id: 8,
    title: "Natural Lip Balm",
    oldPrice: "190.00",
    price: "120.00",
    rating: 4.6,
    reviews: 7,
    quantity: 1,
    img: img8,
    description: `
Soothe and protect your lips with our Natural Lip Balm — a deeply nourishing blend of botanical oils, butters, and waxes crafted to hydrate, heal, and shield delicate lips from dryness and environmental damage. Free from synthetic ingredients, this lip balm delivers pure, long-lasting moisture with a soft, natural sheen.
Key Benefits of Our Natural Lip Balm:

   🌿 Deep Hydration — restores moisture with a rich blend of shea butter and coconut oil.
   🍯 Heals Cracked & Dry Lips — soothes irritation and supports skin repair with vitamin E.
   💧 Locks in Moisture — creates a natural barrier to prevent chapping and dehydration.
   ❄️ All-Weather Protection — shields lips from harsh sun, wind, and cold.
   🌸 Gentle & Non-Toxic — safe for sensitive skin and made without synthetic fragrances.
   🌱 100% Natural Formula — crafted with organic, plant-based ingredients.
   🧴 Smooth, Non-Greasy Texture — glides on effortlessly with a light, silky finish.
   🍃 Naturally Flavored or Unscented — available in subtle herbal, mint, or unscented varieties.
   🛡️ Antioxidant-Rich — helps fight free radical damage for youthful-looking lips.
   👄 Everyday Essential — perfect for daily use, pocket-sized for hydration on the go.

How To Use:
Apply a thin layer of Natural Lip Balm to clean, dry lips as often as needed. Use daily for best results, especially before bed and before exposure to sun or wind. Reapply after meals or outdoor activities to keep lips soft and protected all day long.`
  },
  {
    id: 9,
    title: "Herbal Shampoo",
    oldPrice: "500.00",
    price: "350.00",
    rating: 4.5,
    reviews: 10,
    quantity: 1,
    img: img9,
    description: `
🌿 Cleanse, strengthen, and restore your hair with our Herbal Shampoo — a revitalizing infusion of nature’s finest herbs, oils, and botanical extracts designed to gently cleanse the scalp, reduce hair fall, and promote healthier, shinier strands. Free from sulfates and synthetic additives, this gentle shampoo supports your hair's natural balance for long-term vitality.
Key Benefits of Our Herbal Shampoo:

   🍀 Gently Cleanses — removes dirt, oil, and buildup without stripping natural moisture.
   🌱 Reduces Hair Fall — strengthens roots with traditional herbs like bhringraj and amla.
   💧 Hydrates & Softens — enriched with aloe vera and coconut oil for smooth, touchable hair.
   🌿 Soothes Scalp Irritation — calms itchiness, dryness, and flaking with neem and tea tree.
   ✨ Boosts Natural Shine — adds luster and bounce with regular use.
   🛡️ Protects from Damage — shields against environmental stress and heat styling.
   🌿 Promotes Healthy Growth — nourishes follicles and supports stronger, thicker hair.
   🚿 Sulfate-Free & Silicone-Free — cleans without harsh chemicals or residue.
   🌸 Herbal Aroma — subtly scented with natural essential oils for a refreshing experience.
   🌾 Suitable for All Hair Types — gentle enough for daily use on dry, oily, or sensitive scalps.

How To Use:
Apply a small amount of Herbal Shampoo to wet hair and scalp. Massage gently into a lather, focusing on the roots. Rinse thoroughly. Repeat if needed. For best results, follow with a natural herbal conditioner. Use 2–3 times per week to maintain healthy, balanced hair.`
  },
  {
    id: 10,
    title: "Organic Conditioner",
    oldPrice: "500.00",
    price: "420.00",
    rating: 4.7,
    reviews: 12,
    img: img10,
    description: `
💧 Restore softness, shine, and strength with our Organic Conditioner — a rich, nourishing blend of botanical extracts, cold-pressed oils, and plant-based proteins that deeply hydrate and detangle hair without weighing it down. Designed to complement herbal shampoos, this conditioner leaves your hair silky-smooth, manageable, and naturally radiant — the way nature intended.
Key Benefits of Our Organic Conditioner:

   🌿 Deep Moisture Therapy — hydrates dry, brittle strands with shea butter and aloe vera.
   🧵 Smooths & Detangles — reduces breakage and frizz for easy combing and styling.
   ✨ Restores Shine & Bounce — revitalizes dull hair, leaving it soft and glossy.
   🌱 Strengthens Hair Fiber — infused with natural proteins like quinoa for resilience.
   💆‍♀️ Soothes Dry Scalp — calms irritation and supports a balanced scalp environment.
   🚫 Free From Harsh Chemicals — no silicones, sulfates, or synthetic fragrances.
   🍃 Lightweight & Non-Greasy — perfect for daily use without build-up.
   🌸 Natural Herbal Scent — subtly scented with pure essential oils like rosemary.
   🛡️ Color-Safe & Curl-Friendly — gentle on colored, curly, or chemically treated hair.

How To Use:
After shampooing, apply a generous amount of Organic Conditioner to damp hair, focusing on mid-lengths and ends. Leave on for 2–3 minutes, then rinse thoroughly. For deep conditioning, leave on for 10–15 minutes before rinsing. Use regularly for soft, healthy, and naturally beautiful hair.`
  },
  {
    id: 11,
    title: "Herbal Body Lotion",
    oldPrice: "450.00",
    price: "300.00",
    rating: 4.8,
    reviews: 14,
    quantity: 1,
    img: img11,
    description: `
🌼 Nourish and rejuvenate your skin with our Herbal Body Lotion — a lightweight, fast-absorbing blend of botanical oils, herbal extracts, and natural humectants designed to hydrate deeply, soothe irritation, and enhance your skin’s natural glow. Crafted without parabens or silicones, this lotion is the pure, gentle care your body deserves.
Key Benefits of Our Herbal Body Lotion:

   🌿 Deep Hydration – infuses skin with moisture using aloe vera and glycerin.
   🧴 Soothes & Calms – soothing herbs like calendula and lavender reduce irritation.
   ✨ Boosts Radiance – botanical antioxidants brighten and even skin tone.
   🔥 Protects & Repairs – rich in vitamins E and C to shield against environmental damage.
   🥥 Silky-Smooth Texture – leaves skin feeling soft and supple without greasiness.
   🌱 Light Herbal Scent – a gentle, fresh aroma from natural essential oils.
   🚫 Clean & Pure Formula – free of phthalates, synthetic dyes, and fragrances.
   🌸 Suitable for All Skin Types – gentle enough for sensitive skin, yet nourishing for dry areas.
   💧 Everyday Essential – perfect for daily moisturizing from head to toe.

How To Use:
Massage a generous amount of Herbal Body Lotion onto clean, dry skin using gentle, circular motions. Focus on dry areas like elbows, knees, and heels. Use daily after bathing or showering to lock in hydration and maintain naturally radiant skin. Reapply anytime for an extra boost of comfort.`
  },
  {
    id: 12,
    title: "Natural Face Serum",
    oldPrice: "1500.00",
    price: "1200.00",
    rating: 4.9,
    reviews: 16,
    quantity: 1,
    img: img12,
    description: `
🌿 Revitalize your skin with our Natural Face Serum — a concentrated blend of botanical oils, plant-based actives, and herbal extracts designed to deeply nourish, brighten, and protect your skin. Lightweight yet powerful, this serum absorbs quickly to deliver lasting hydration and glow, leaving your skin feeling smooth, firm, and radiant — naturally.
Key Benefits of Our Natural Face Serum:

   💧 Intense Hydration — locks in moisture with hyaluronic acid, rosehip oil, and aloe vera.
   ✨ Brightens & Evens Tone — reduces dullness and discoloration with turmeric root.
   🧴 Smooths Fine Lines — enriched with vitamin C and bakuchiol (natural retinol alternative) to improve elasticity.
   🛡️ Antioxidant-Rich Protection — defends against pollution and environmental stressors.
   🌿 Lightweight & Non-Greasy — absorbs quickly without clogging pores or leaving residue.
   🍃 100% Plant-Based — no parabens, silicones, synthetic fragrances, or animal testing.
   🌱 Balanced for All Skin Types — gentle yet effective, even on acne-prone or dry skin.
   🌼 Naturally Glowing Finish — enhances your skin’s natural luminosity.
   🌾 Daily Skincare Essential — perfect for morning and night routines.

How To Use:
After cleansing and toning, apply 3–5 drops of the Natural Face Serum to your face and neck. Gently massage in upward strokes until fully absorbed. Follow with a moisturizer or sunscreen (if used in the morning). Use daily for visible results and long-lasting hydration.`
  },
  {
    id: 13,
    title: "Herbal Toothpaste",
    oldPrice: "450.00",
    price: "250.00",
    rating: 4.6,
    reviews: 9,
    quantity: 1,
    img: img13,
    description: `
🦷 Cleanse and protect your smile with our Herbal Toothpaste — a refreshing blend of time-tested herbs and minerals that naturally support oral health, freshen breath, and strengthen gums without harsh chemicals or synthetic additives. Gentle and effective, it’s your daily go-to for a healthier mouth and a brighter smile.
Key Benefits of Our Herbal Toothpaste:

    🌿 Naturally Cleans Teeth — gently removes plaque and surface stains with herbal powders.
    🌱 Strengthens Gums — enriched with neem, and babool to tone and protect gum tissue.
    🍃 Fights Bad Breath — mint, and tulsi work together to keep your breath fresh all day.
    ✨ Whitens Naturally — polishes teeth without peroxide or harsh whitening agents.
    🚫 Fluoride-Free & Sulfate-Free — safe for daily use, even for those who has sensitivity. 
    🌸 Soothes Sensitivity — herbal extracts help calm irritated gums over time.
    🌾 No Artificial Flavors or Colors — pure plant-based flavor with no synthetic ingredients.
    💚 Eco-Conscious & Cruelty-Free — sustainably sourced, and never tested on animals.
    👪 Safe for the Whole Family — gentle, natural formula suitable for both adults and kids.

How To Use:
Apply a small amount of Herbal Toothpaste to your toothbrush. Brush gently for 2–3 minutes, twice daily. Rinse thoroughly. For best results, avoid eating or drinking immediately after brushing. Use regularly to support strong teeth, healthy gums, and long-lasting freshness.`
  },
  {
    id: 14,
    title: "Organic Mouthwash",
    oldPrice: "300.00",
    price: "280.50",
    rating: 4.5,
    reviews: 8,
    quantity: 1,
    img: img14,
    description: `
🌀 Refresh your breath and support oral health with our Organic Mouthwash — a gentle yet effective botanical rinse made with herbal extracts, essential oils, and natural cleansing agents. Free from alcohol and synthetic additives, this mouthwash helps eliminate bad breath, balance oral bacteria, and promote overall gum and tooth wellness — all without the burn.
Key Benefits of Our Organic Mouthwash:

   🌿 Freshens Breath Naturally — fennel oils leave your mouth clean and refreshed.
   🛡️ Fights Harmful Bacteria — herbal ingredients like neem and tea tree help maintain a balanced oral microbiome.
   ✨ Alcohol-Free Formula — no stinging, no dryness — just clean, gentle care.
   💧 Balances pH Levels — supports a healthy oral environment to prevent plaque buildup.
   🚫 Free from Synthetic Additives — no artificial colors, flavors or preservatives.
   🌾 Safe & Non-Toxic — fluoride-free, SLS-free, and made from 100% plant-based ingredients.
   🍃 Ideal for Daily Use — gentle enough for twice-daily rinsing, even with sensitive mouths.
   🌸 Eco-Friendly & Vegan — cruelty-free, biodegradable, and sustainably packaged.
   👪 Great for the Whole Family — safe and effective for adults and children alike.

How To Use:
Pour 10–15 ml (about 1 tablespoon) of Organic Mouthwash into a cup. Swish around the mouth and between teeth for 30–60 seconds, then spit out. Do not swallow. Use morning and evening after brushing or anytime you need a natural refresh. Avoid eating or drinking for 10 minutes after use.

`
  },
  {
    id: 15,
    title: "Herbal Hand Sanitizer",
    oldPrice: "380.00",
    price: "220.00",
    rating: 4.7,
    reviews: 10,
    quantity: 1,
    img: img15,
    description: `
👐 Cleanse and protect your hands with our Herbal Hand Sanitizer — a fast-absorbing, non-sticky formula infused with natural antibacterial herbs and soothing botanicals. This gentle yet powerful sanitizer eliminates 99.9% of germs while keeping your skin soft, hydrated, and refreshed — without the harsh chemicals or artificial fragrances.
Key Benefits of Our Herbal Hand Sanitizer:

   🛡️ Kills 99.9% of Germs — alcohol-based formula combined with antimicrobial herbs like neem.
   🌿 Herbal-Powered Protection — enriched with clove, and tea tree essential oils for extra defense.
   💧 Hydrates & Softens Skin — aloe vera and glycerin prevent dryness and irritation.
   ⚡ Fast-Drying & Non-Sticky — absorbs quickly without leaving residue or tackiness.
   🌸 Natural Aroma — lightly scented with herbal essential oils, no artificial perfumes.
   🌱 Gentle on Sensitive Skin — free from parabens, sulfates, and synthetic dyes.
   🚫 No Triclosan or Harsh Chemicals — clean, safe formulation for regular use.
   👜 Perfect for On-the-Go — compact, travel-friendly size ideal for your bag, car, or workspace.
   🌿 Plant-Based & Eco-Conscious — made with sustainably sourced ingredients and cruelty-free practices.
   👪 Safe for the all Age Groups — effective yet mild enough for kids and adults alike.

How To Use:
Dispense a small amount of Herbal Hand Sanitizer into your palm. Rub hands together, covering all surfaces including between fingers and under nails, until dry. Use regularly when soap and water are not available — especially before eating, after touching public surfaces, or during travel.

`
  },
  {
    id: 16,
    title: "Natural Deodorant",
    oldPrice: "250.00",
    price: "150.00",
    rating: 4.6,
    reviews: 9,
    quantity: 1,
    img: img16,
    description: `
🌿 Stay fresh and odor-free with our Natural Hand Deodorant — a unique herbal blend designed to neutralize unwanted hand odors naturally while keeping your skin soft, clean, and lightly scented. Perfect for after meals, strong-smelling tasks, or on-the-go freshness, this gentle formula is free from harsh chemicals and artificial fragrances.
Key Benefits of Our Natural Hand Deodorant:

   🍃 Neutralizes Odors Instantly — tackles strong smells like garlic, onions, and spices.
   🌱 Powered by Herbs & Essential Oils — includes neem and rosemary for natural freshness.
   💧 Hydrates & Softens — aloe vera and glycerin leave hands smooth, never dry.
   🌼 Non-Sticky, Quick-Dry Formula — dries fast without residue or buildup.
   🌸 Light, Natural Scent — delicately fragranced with pure essential oils.
   🛡️ Free from Alcohol & Toxins — no parabens, phthalates, or synthetic perfumes.
   🌾 Safe for All Ages — gentle enough for kids and adults alike.
   ♻️ Eco-Friendly & Cruelty-Free — sustainably made with plant-based ingredients.
   👜 Perfect for Daily Use — carry it in your bag, car, or kitchen for anytime freshness.

How To Use:
Apply a small amount to clean, dry hands and rub gently until absorbed. Use after cooking, eating, or exposure to strong smells. Reapply as needed throughout the day for a fresh, clean feel — no rinsing required.`
  },
  {
    id: 17,
    title: "Herbal Foot Cream",
    oldPrice: "300.00",
    price: "250.00",
    rating: 4.8,
    reviews: 11,
    quantity: 1,
    img: img17,
    description: `
🦶 Soothe, soften, and restore tired feet with our Herbal Foot Cream — a deeply nourishing blend of healing herbs, rich oils, and cooling botanicals that deliver intense hydration and relief. Perfect for cracked heels, dry skin, or daily foot care, this non-greasy formula absorbs quickly while leaving your feet smooth, refreshed, and revived.
Key Benefits of Our Herbal Foot Cream:

   🌿 Repairs Cracked Heels — rich in shea butter and coconut oil to deeply moisturize skin.
   🌱 Heals & Soothes — infused with neem, and turmeric to calm irritation and support skin renewal.
   ❄️ Cooling Relief — peppermint oils provide a soothing sensation to relax tired feet.
   💧 Non-Greasy Hydration — absorbs quickly without leaving oily residue.
   🦵 Improves Skin Texture — regular use helps reduce roughness, flakiness, and calluses.
   🌸 Natural Herbal Aroma — subtle scent from essential oils with no synthetic fragrance.
   🚫 Free from Harsh Chemicals — no parabens, mineral oil, silicones, or artificial dyes.
   👣 Gentle for All Ages — safe and soothing for the entire family.
   🌞 Ideal for Daily Use — perfect for nighttime repair or post-shower moisture lock-in.

How To Use:
Apply a generous amount of Herbal Foot Cream to clean, dry feet. Massage gently, focusing on heels, soles, and dry areas. For best results, use daily — especially before bedtime. For deep hydration, wear cotton socks overnight after application.`
  },
  {
    id: 18,
    title: "Organic Hand Cream",
    oldPrice: "400.00",
    price: "380.00",
    rating: 4.7,
    reviews: 12,
    quantity: 1,
    img: img18,
    description: `
🤲 Nourish and protect your hands with our Organic Hand Cream — a rich, fast-absorbing blend of organic plant butters, botanical oils, and soothing herbal extracts designed to deeply hydrate, repair, and shield your hands from dryness and daily stress. Light on the skin but heavy on nourishment, it’s your go-to for soft, healthy hands—naturally.
Key Benefits of Our Organic Hand Cream:

   🌿 Deep Moisture & Repair — almond oil, and coconut oil restore softness and elasticity.
   🌸 Heals Dry, Cracked Skin — calendula and chamomile calm irritation and support healing.
   💧 Non-Greasy Formula — absorbs quickly and leaves hands feeling smooth, never sticky.
   🍃 Gentle Herbal Scent — naturally fragranced with pure essential oils like rose.
   🚫 No Harsh Chemicals — free from parabens, sulfates, synthetic fragrances, and silicones.
   🌾 Safe for All Ages — soothing and suitable for both sensitive and mature skin.
   🌱 100% Organic & Cruelty-Free — made with certified organic ingredients.
   👝 Perfect for On-the-Go — compact size fits easily in your bag, or bedside table.
   🌼 Daily Essential — ideal for use after handwashing, exposure to cold weather.

How To Use:
Apply a small amount of Organic Hand Cream to clean hands. Gently massage until fully absorbed. Reapply as needed throughout the day, especially after washing or when hands feel dry. For overnight repair, apply a thicker layer and wear cotton gloves while sleeping.`
  },
  {
    id: 19,
    title: "Herbal Eye Gel",
    oldPrice: "900.00",
    price: "750.00",
    rating: 4.9,
    reviews: 14,
    quantity: 1,
    img: img19,
    description: `
👁️ Refresh and restore tired eyes with our Herbal Eye Gel — a lightweight, cooling blend of herbal extracts and botanical actives formulated to reduce puffiness, dark circles, and fine lines. Gentle and non-irritating, this fast-absorbing gel hydrates the delicate under-eye area while leaving you with a brighter, more youthful look — naturally.
Key Benefits of Our Herbal Eye Gel:

   🌿 Reduces Puffiness & Inflammation — cooling cucumber extracts calm swollen, tired eyes.
   🌙 Diminishes Dark Circles — caffeine boost circulation and brighten under-eye shadows.
   ✨ Smooths Fine Lines — aloe vera and hyaluronic acid deeply hydrate and plump the skin.
   🌼 Soothes Sensitive Skin — chamomile and calendula help relieve irritation and redness.
   💧 Lightweight & Non-Greasy — absorbs quickly without clogging pores or leaving residue.
   🛡️ Rich in Antioxidants — protects against environmental stressors and signs of aging.
   🌱 100% Herbal & Toxin-Free — no parabens, sulfates, artificial fragrances, or silicones.
   🌾 Safe for All Skin Types & Ages — gentle enough for sensitive or mature skin.
   🧊 Cooling Sensation — delivers instant refreshment for eyes strained by screens lack of sleep.
   🐰 Cruelty-Free & Eco-Conscious — ethically made with natural, plant-based ingredients.

How To Use:
Apply a small amount of Herbal Eye Gel to the under-eye area using your ring finger. Gently tap (do not rub) until fully absorbed. Use morning and night on clean skin. Store in the refrigerator for an extra cooling effect and enhanced de-puffing action.
`
  },
  {
    id: 20,
    title: "Makeup Cotton Pad",
    oldPrice: "500.00",
    price: "450.00",
    rating: 4.6,
    reviews: 10,
    quantity: 70,
    img: img20,
    description: `
🧼 Soft, absorbent, and gentle — our Makeup Cotton Pads are perfect for removing makeup, applying toner, or cleansing your skin. Made with pure, skin-friendly fibers, they’re lint-free, durable, and suitable for all skin types.
Key Features:

✔️ Ultra-soft and non-irritating
✔️ Dual-textured for effective use
✔️ 100% natural, chemical-free cotton
✔️ Gentle on sensitive skin
✔️ Biodegradable & eco-friendly

How To Use:
Pour makeup remover, toner, or cleanser onto a cotton pad. Gently wipe across face and eyes. Use a fresh pad as needed. Dispose after use.`
  },
  {
    id: 21,
    title: "Herbal Body Scrub",
    oldPrice: "250.00",
    price: "230.99",
    rating: 4.8,
    reviews: 13,
    quantity: 1,
    img: img21,
    description: `
🛁 Revive and renew your skin with our Herbal Body Scrub — a rejuvenating blend of finely ground herbs, mineral-rich salts, and nourishing oils that exfoliate gently yet effectively. This energizing scrub sloughs away dead skin cells, boosts circulation, and leaves your body smooth, glowing, and deeply refreshed — all with the power of nature.
Key Benefits of Our Herbal Body Scrub:

   💧 Deeply Moisturizes — enriched with coconut oil and aloe vera to hydrate and soften skin.
   🌸 Brightens Skin Tone — turmeric, licorice, and sandalwood help reduce tan and even out complexion.
   🧖 Boosts Circulation — invigorates skin and supports healthy blood flow for a radiant glow.
   🍃 Soothes & Calms — chamomile and calendula extracts reduce irritation and leave skin refreshed.
   🛡️ Free from Harsh Chemicals — no parabens, sulfates, artificial colors, or microbeads.
   🌱 100% Herbal & Cruelty-Free — made with plant-based ingredients and never tested on animals.
   🌼 Suitable for All Skin Types —  effective for dry and rough areas.
   🌾 Ideal for Weekly Use — a perfect self-care ritual for maintaining soft, glowing skin.

How To Use:
Take a small amount of Herbal Body Scrub and apply to damp skin. Gently massage in circular motions for 2–3 minutes, focusing on rough areas like elbows, knees, and feet. Rinse thoroughly with warm water. Use 2–3 times a week for best results.`
  },
  {
    id: 22,
    title: "Fat Reduce Kit",
    oldPrice: "1700.00",
    price: "1200.00",
    rating: 4.7,
    reviews: 11,
    quantity: 1,
    img: img22,
    description: `
🔥 Support your weight management journey naturally with our Herbal Reduce Fat formula — a carefully crafted blend of metabolism-boosting herbs, detoxifying roots, and digestion-enhancing botanicals. This gentle yet effective herbal supplement helps mobilize stubborn fat, reduce bloating, and improve energy — without harsh stimulants or synthetic ingredients.
Key Benefits of Our Herbal Reduce Fat Formula:

   🌿 Boosts Metabolism — ingredients like black pepper support natural fat burning.
   🍋 Reduces Bloating — fennel, cumin, and ginger help relieve water retention 
   💧 Detoxifies Gently — supports liver and colon cleansing for better nutrient absorption 
   🧘 Promotes Healthy Digestion — it improves gut health.
   🛡️ 100% Herbal & Stimulant-Free — no caffeine crash, jitters, or artificial fat burners.
   🌱 Safe for Long-Term Use — ideal for consistent use with diet and exercise.
   ❌ No Harsh Chemicals — free from GMOs, preservatives, and synthetic additives.
   🌾 Supports Overall Wellness — help reduce cravings and support balanced energy levels.
   🌸 Gentle on the Stomach — formulated to avoid irritation or discomfort.

How To Use:
Take 1–2 capsules/tablets (or as directed) daily after meals with warm water. For best results, combine with a balanced diet, hydration, and regular physical activity. Use consistently for 2–3 months to support visible results. Consult a healthcare professional if pregnant, nursing, or under medical supervision.
`
  },
  {
    id: 23,
    title: "Herbal Massage Oil",
    oldPrice: "220.00",
    price: "200.50",
    rating: 4.9,
    reviews: 15,
    quantity: 1,
    img: img23,
    description: `
💆 Relax, restore, and rejuvenate with our Herbal Massage Oil — a soothing blend of time-tested Ayurvedic herbs and nourishing base oils designed to ease tension, improve circulation, and deeply hydrate the skin. Perfect for full-body massages, stress relief, or daily self-care, this aromatic oil leaves your body and mind feeling balanced and renewed.
Key Benefits of Our Herbal Massage Oil:

    🌿 Relieves Muscle Tension — infused with herbs like turmeric to relax sore muscles and joints.
    🧘 Promotes Relaxation — calming essential oils like lavender help reduce stress and anxiety.
    🩺 Supports Joint Flexibility — improves mobility and soothes stiffness in the body.
    🌸 Enhances Skin Texture — regular use leaves the skin soft, supple, and radiant.
    🌱 100% Herbal & Non-Toxic — free from parabens, mineral oil, and artificial fragrances.
    🛡️ Safe for All Ages & Skin Types — gentle, natural formula suitable for everyone.
    🌿 Aromatherapy Benefits — natural scent elevates your massage ritual.
    ♻️ Eco-Friendly & Cruelty-Free — crafted with plant-based ingredients and ethical practices.

How To Use:
Warm a small amount of Herbal Massage Oil between your palms and apply to the body using gentle, circular motions. Massage into the skin until fully absorbed. Use before a bath or bedtime for deep relaxation. Suitable for daily or weekly use.`
  },
  {
    id: 24,
    title: "Herbal Remedy Kit",
    oldPrice: "1,100.00",
    price: "700.00",
    rating: 4.8,
    reviews: 14,
    quantity: 1,
    img: img24,
    description: `
🌿 Empower your natural healing journey with our Herbal Remedy Kit — a curated collection of time-tested herbal formulas designed to support everyday wellness, immunity, digestion, stress relief, and more. Whether you're at home or on the go, this kit offers plant-based solutions for common health concerns—gentle, effective, and rooted in tradition.
Key Benefits of Our Herbal Remedy Kit:

   🌱 Complete Wellness Support — includes targeted remedies for stress, and minor discomforts.
   🧘 Promotes Balance & Vitality — supports the body’s natural ability to heal and restore.
   🍃 Made with Traditional Herbs — features ingredients like tulsi,  ginger, turmeric, and more.
   🛡️ 100% Natural & Toxin-Free — no synthetic chemicals, preservatives, or artificial additives.
   👪 Safe for All Ages — gentle formulations suitable for both adults and children 
   🧳 Perfect for Travel & Home Use — organized, and ready whenever you need herbal support.
   ♻️ Eco-Conscious & Cruelty-Free — sustainably sourced and ethically crafted.

How To Use:
Each remedy in the kit comes with easy-to-follow instructions. Use individually based on need (e.g., herbal tea for digestion, balm for headaches, oil for relaxation). For best results, follow the recommended dosage and usage guide included in the kit. Always patch-test topical items before full use.`
  },
  {
    id: 25,
    title: "Face Acne Removal (Oily Skin)",
    oldPrice: "500.00",
    price: "300.00",
    rating: 4.6,
    reviews: 9,
    quantity: 1,
    img: img25,
    description: `
🌿 Say goodbye to stubborn breakouts with our Herbal Acne Removal Formula — specially made for oily skin. This targeted treatment blends powerful natural ingredients that purify pores, control excess oil, and calm inflammation without over-drying your skin. Perfect for those who struggle with shine, clogged pores, and recurring acne.
Key Benefits of Our Acne Removal (For Oily Skin):

   🧼 Controls Excess Oil — neem, tea tree, and tulsi help balance sebum and prevent clogged pores.
   🌱 Fights Acne-Causing Bacteria — herbal actives work to  prevent future ones.
   🌸 Soothes Inflammation — aloe vera calm redness, swelling, and irritation.
   💧 Minimizes Pores — tightens skin and refines texture without stripping moisture.
   🛡️ Chemical-Free & Non-Comedogenic — no parabens, sulfates, or artificial fragrances.
   ✨ Improves Skin Clarity — regular use supports a clearer and more even-toned complexion.
   🌾 Formulated for Oily & Acne-Prone Skin Only — not recommended for dry skin types.
   🐰 Cruelty-Free & Herbal-Based — made with plant-powered ingredients.

How To Use:
Cleanse your face and pat dry. Apply a thin layer of the acne formula to affected areas once or twice daily. Use consistently for visible improvement. Avoid use on dry areas or open wounds. Patch test before first use.`
  },
  {
    id: 26,
    title: "Organic Face Toner",
    oldPrice: "700.00",
    price: "450.00",
    rating: 4.7,
    reviews: 11,
    quantity: 1,
    img: img26,
    description: `
💧 Refresh, balance, and tone your skin with our Organic Face Toner. A gentle blend of floral waters, herbal extracts, and natural astringents that tighten pores, remove impurities, and restore your skin’s natural pH. Ideal for daily use, this alcohol-free toner leaves your face feeling clean, calm, and perfectly prepped for moisturizing.
Key Benefits of Our Organic Face Toner:

   🌿 Balances pH Naturally — rose water help rebalance the skin after cleansing.
   🍃 Minimizes Pores & Shine — tones the skin without drying or irritation.
   🌸 Hydrates & Calms — aloe vera and chamomile soothe redness and sensitivity.
   🛡️ 100% Organic & Alcohol-Free — safe for all skin types, including  acne-prone skin.
   🌱 No Harsh Chemicals — free from parabens and synthetic preservatives.
   🐰 Cruelty-Free & Eco-Friendly — ethically crafted with respect for nature.

How To Use:
After cleansing, spray directly onto your face or apply with a cotton pad. Gently sweep over skin, avoiding the eye area. Follow with serum or moisturizer. Use morning and night for best results.`
  },
  {
    id: 27,
    title: "Herbal Night Cream",
    oldPrice: "550.00",
    price: "300.00",
    rating: 4.9,
    reviews: 16,
    quantity: 1,
    img: img27,
    description: `
🌙 Wake up to radiant, rested skin with our Herbal Night Cream — a deeply nourishing blend of botanical extracts, soothing oils, and natural actives that work overnight to restore, repair, and rejuvenate your skin. This rich, non-greasy cream melts into the skin, leaving it soft, smooth, and visibly healthier by morning.
Key Benefits of Our Herbal Night Cream:

   🌿 Repairs & Renews — infused with herbs like gotu kola to promote skin regeneration.
   💧 Deep Hydration — shea butter, almond oil, and aloe vera  lock in moisture all night.
   🌸 Reduces Fine Lines & Wrinkles — natural antioxidants support firmer, smoother skin.
   🛌 Soothes Tired Skin — calming botanicals help reduce redness, irritation.
   ✨ Evens Skin Tone — turmeric and sandalwood help improve overall brightness.
   🛡️ Free from Harsh Chemicals — no parabens,  artificial colors, or synthetic fragrances.
   🐰 Cruelty-Free & Herbal-Based — made with plant-powered ingredients.
   🌱 Suitable for All Skin Types — gentle enough for daily use, including sensitive skin.

How To Use:
Apply a small amount to freshly cleansed face and neck before bedtime. Gently massage in upward circular motions until fully absorbed. Use nightly as part of your skincare routine for best results.
`
  },
  {
    id: 28,
    title: "Nimrat Cream",
    oldPrice: "350.00",
    price: "320.00",
    rating: 4.7,
    reviews: 14,
    quantity: 1,
    img: Img1,
    description: `
🌿 Soothe, protect, and purify your skin with our Herbal Nimrat Cream — a powerful herbal formulation enriched with the natural goodness of neem and other traditional botanicals known for their anti-inflammatory and antibacterial properties. Ideal for irritated, acne-prone, or rash-prone skin, this multi-purpose cream calms redness, clears breakouts, and restores skin balance.
Key Benefits of Our Herbal Nimrat Cream:

   🍃 Neem-Powered Protection — fights acne-causing bacteria, and prevents skin infections.
   🌱 Heals & Repairs — turmeric, tulsi, and aloe vera work together to reduce inflammation.
   💧 Hydrates Without Greasiness — light, non-sticky formula that moisturizes skin.
   🌸 Reduces Skin Redness & Rash — gentle herbal actives calm sensitivity and discomfort.
   🛡️ Free from Harsh Chemicals — no parabens, steroids, or artificial fragrances.
   ✨ Multipurpose Use — ideal for acne,  rashes, insect bites, or daily skin protection.
   🌿 Safe for All Skin Types & Ages — suitable for children and adults with sensitive skin.

How To Use:
Clean the affected area and apply a thin layer of Nimrat Cream. Use 2–3 times daily or as needed. For acne or sensitive skin, apply a small amount at night after cleansing. Suitable for daily use.`
  },
  {
    id: 29,
    title: "Snevia Lotion",
    oldPrice: "300.00",
    price: "270.00",
    rating: 4.6,
    reviews: 11,
    quantity: 1,
    img: Img2,
    description: `
🌿 Hydrate, heal, and protect your skin with Sanevia Lotion — a deeply moisturizing herbal body lotion infused with soothing plant extracts, nourishing oils, and skin-repairing botanicals. Ideal for daily use, this lightweight formula absorbs quickly, leaving your skin soft, smooth, and healthy without any greasy residue.
Key Benefits of Sanevia Lotion:

   💧 Deep Moisturization — enriched with aloe vera, coconut oil, and shea butter.
   🌸 Soothes Dry & Itchy Skin — herbal actives like chamomile calm irritation and redness.
   🌱 Repairs & Restores — supports skin barrier repair with natural antioxidants.
   🛡️ Protects Against Environmental Damage — shields skin from dryness, and pollution.
   ✨ Softens & Smooths — improves skin texture and glow with regular use.
   🌿 Gentle & Herbal — free from  artificial colors, and synthetic fragrances.
   👨‍👩‍👧 Safe for All Skin Types & Ages — suitable for both adults and children.

How To Use:
Apply generously to clean skin and massage gently until fully absorbed. Use twice daily or as needed for soft, healthy skin. Suitable for use on hands, legs, and the entire body.`
  },
  {
    id: 30,
    title: "Pain Go",
    oldPrice: "280.00",
    price: "250.00",
    rating: 4.8,
    reviews: 15,
    quantity: 1,
    img: Img3,
    description: `
🌿 Ease discomfort naturally with Pain Go — a fast-absorbing herbal formula specially crafted to relieve muscle aches, joint pain, stiffness, and inflammation. Blended with powerful pain-relieving herbs and essential oils, Pain Go provides targeted relief without the side effects of harsh chemicals or synthetic ingredients.
Key Benefits of Pain Go:

   🔥 Relieves Aches & Pains — herbal actives like eucalyptusand clove oil provide quick and effective relief.
   💪 Soothes Muscles & Joints — helps reduce inflammation and relax stiff, overworked areas.
   🌱 100% Herbal Formula — free from parabens, mineral oils, and synthetic painkillers.
   💧 Fast-Absorbing, Non-Greasy — penetrates deeply without leaving an oily residue.
   🌸 Comforting Aroma — calming herbal scent promotes relaxation during massage.
   🛡️ Safe for All Ages — gentle enough for daily use by adults, athletes, and seniors.

How To Use:
Apply a small amount to the affected area and massage gently until absorbed. Use 2–3 times daily or as needed for relief. For external use only. Avoid contact with eyes or broken skin.
`
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = ProductsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Product not found</h2>
        <Link to="/" className="text-green-700 underline">Go Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-3xl font-bold mb-4 text-green-900">{product.title}</h1>
       <div className="flex justify-center">
  <img
    src={product.img}
    alt={product.title}
    className="w-72 h-72 object-cover rounded mb-4 shadow"
  />
      </div>
      <p className="text-gray-700 mb-2">Old Price: <span className="line-through">{product.oldPrice}</span></p>
      <p className="text-green-700 font-bold text-xl mb-2">Price: {product.price}</p>
      <p className="mb-2">Rating: {product.rating.toFixed(1)} ⭐ ({product.reviews} reviews)</p>
      <p className="mb-4 text-gray-800 text-sm sm:text-base whitespace-pre-wrap">Description: {product.description}</p>
      <p className="mb-4 text-gray-800">Quantity: {product.quantity}</p>
      <button
        onClick={handleAddToCart}
        className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};
export { ProductsData }; 
export default ProductDetail;
