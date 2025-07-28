import React from "react";
import { useParams, Link } from "react-router-dom";


import img1 from "../assets/hero/blog1.jpg";
import img2 from "../assets/hero/blog2.jpg";
import img3 from "../assets/hero/blog3.jpg";


const blogPosts = [
  {
    id: 1,
    title: "The Healing Power of Herbal Medicine",
    date: "08 March",
    author: "Dr. Emily Green",
    content: `Explore how nature’s best herbs can transform your health and well-being naturally.
Herbal medicine has been a cornerstone of natural healing for centuries, used by cultures across the globe to treat ailments, restore balance, and promote long-term wellness. Today, as more people seek alternatives to synthetic drugs, herbal remedies are experiencing a well-deserved revival — and for good reason. From calming your nerves to strengthening your immune system, herbs offer a wide range of therapeutic benefits. 

🌿 1. Nature’s Pharmacy at Your Fingertips
Herbs like turmeric, ginger, garlic, and ginseng are packed with active compounds that have anti-inflammatory, antioxidant, antibacterial, and immune-boosting properties. These herbs have been extensively studied for their ability to reduce pain, improve circulation, aid digestion, and protect against chronic diseases.

💚 2. Personalized and Holistic Healing
One of the unique strengths of herbal medicine is its ability to support the whole person—mind, body, and spirit. Instead of treating one symptom at a time, herbalists often create blends that address multiple systems and promote overall harmony. For example, ashwagandha can help reduce stress while also supporting adrenal function and stamina.

🍵 3. Gentle Yet Powerful
Unlike some over-the-counter drugs that come with side effects, most herbal remedies are gentle on the body when used correctly. Chamomile, for instance, is a mild herb used to aid sleep, reduce anxiety, and support digestion — perfect for those seeking gentle solutions for everyday concerns.

🌼 4. Preventive Power
Herbs don’t just treat illness — many help prevent it. Elderberry, echinacea, and reishi mushrooms are known for strengthening the immune system and preventing infections, especially during cold and flu seasons.

🌱 5. Building a Herbal Lifestyle
Incorporating herbs into your daily life doesn’t need to be complicated. Herbal teas, tinctures, salves, and even cooking with healing herbs can offer lasting benefits. A cup of mint tea for digestion, turmeric in your soup for inflammation, or a few drops of holy basil extract for stress — small steps add up.

🌸 Final Thought
Herbal medicine is more than just a remedy — it's a philosophy of wellness that encourages us to connect with nature, listen to our bodies, and heal gently. Whether you're looking to relieve specific symptoms or simply support your well-being, herbal medicine offers a natural and empowering path to health.`,
    img: img1,
  },
  {
    id: 2,
    title: "Herbal Teas That Boost Immunity",
    date: "20 May",
    author: "Sophia Brown",
    content: `A cup of herbal tea a day keeps the doctor away! Discover the best teas for immunity.
When it comes to natural ways to strengthen your immune system, herbal teas are a comforting and effective choice. Packed with antioxidants, vitamins, and healing compounds, these teas help your body fight infections, reduce inflammation, and stay resilient—especially during flu season.
Here are some of the best herbal teas known to support and boost your immunity:

🍵 1. Elderberry Tea
Elderberries are rich in antioxidants and vitamins that can help tame inflammation, lessen stress, and support heart and immune health. Elderberry tea is often used to prevent and ease cold and flu symptoms. Studies suggest it can reduce the duration of illness if taken early.

🌿 2. Echinacea Tea
Echinacea has long been used to prevent colds and flu. It’s known for its ability to enhance immune activity and stimulate white blood cells, which are key to fighting off infections.

🍋 3. Lemon Ginger Tea
This dynamic duo is a classic for good reason. Lemon is packed with vitamin C, while ginger provides antimicrobial and anti-inflammatory properties. Together, they help detoxify the body and soothe a sore throat.
Benefits:
1- Rich in antioxidants
2- Calms inflammation
3- Supports digestion and detox

🌼 4. Chamomile Tea
While commonly known for its calming effects, chamomile also contains compounds that boost the immune system and reduce inflammation. It’s great to drink before bed to promote restful sleep—which is key for immunity.
Benefits:
1- Supports better sleep
2- Fights bacteria
3- Reduces stress and anxiety

🍃 5. Green Tea (Herbal Blend)
Though technically not herbal, green tea blends often include immunity-boosting herbs like mint, moringa, or lemongrass. Green tea contains powerful antioxidants called catechins that have antimicrobial effects.

🌱 6. Tulsi (Holy Basil) Tea
Known as the “Queen of Herbs” in Ayurveda, Tulsi helps regulate the body’s immune responses and combat stress, which can weaken immunity over time.
Benefits:
1- Adaptogenic (stress-reducing)
2- Supports respiratory health
3- Antibacterial and antifungal

☕ Final Sip
Herbal teas aren’t just a warm, soothing drink—they’re nature’s pharmacy in a cup. Whether you’re looking to prevent illness or support your immune system naturally, adding one or two of these teas to your daily routine can make a meaningful difference.`,
    img: img2,
  },
  {
    id: 3,
    title: "5 Natural Skincare Remedies",
    date: "08 Mar",
    author: "Liam Carter",
    content: `Say goodbye to chemicals! Try these natural skincare solutions for glowing skin.
In a world filled with synthetic ingredients and chemical-laden beauty products, it’s refreshing to return to nature for skincare solutions. Natural remedies not only help you avoid harsh side effects, but they also nourish your skin with real, plant-based goodness. Whether you're dealing with acne, dryness, dullness, or just want to enhance your natural glow, these tried-and-true remedies can work wonders.

🥒 1. Aloe Vera – The Skin Soother
Aloe vera is a powerhouse for calming irritated skin. Its cooling gel is rich in vitamins A, C, and E, all of which support skin healing and hydration. Whether you're dealing with sunburn, acne, or just dryness, applying fresh aloe gel can bring instant relief.
- How to use:
Apply fresh aloe vera gel directly to clean skin. Leave it on for 10–15 minutes, then rinse or let it absorb fully.

🧄 2. Honey – Nature’s Moisturizer & Antibacterial
Raw honey isn’t just sweet — it’s loaded with antioxidants and has natural antibacterial properties. It deeply hydrates, helps fade acne scars, and keeps pores clean. It’s especially great for sensitive or acne-prone skin.
- How to use:
Apply a thin layer of raw honey to your face. Let it sit for 15–20 minutes, then rinse with warm water.

🌾 3. Oatmeal – Gentle Exfoliator for Sensitive Skin
Ground oats act as a gentle exfoliant and anti-inflammatory agent, perfect for calming irritated or itchy skin. Oatmeal is ideal for dry or eczema-prone skin and can even be used in DIY face masks and scrubs.
- How to use:
Mix oatmeal with yogurt or milk to create a paste. Apply to your face in circular motions, then rinse.

🍋 4. Lemon – Brighten & Tone Naturally
Lemon juice is a natural astringent and rich in vitamin C, which helps brighten dark spots and even out skin tone. However, it’s powerful—so always dilute and avoid sun exposure right after use.
- How to use:
Mix fresh lemon juice with water or honey. Apply to dark spots only. Leave on for 5–10 minutes, then rinse.
⚠️ Note: Avoid if you have sensitive skin or open wounds. Always patch test.

🥥 5. Coconut Oil – Deep Nourishment for Dry Skin
Coconut oil is rich in fatty acids and acts as a deep moisturizer. It helps repair the skin barrier, reduces inflammation, and adds a healthy glow. Perfect for dry skin, especially in colder months.
- How to use:
Use a small amount and massage onto clean skin before bed. Avoid if you’re acne-prone.

💧 Final Glow
Nature provides everything we need for healthy, radiant skin. These simple yet effective remedies are affordable, accessible, and gentle enough for daily use. By going natural, you’re not just taking care of your skin—you’re treating it with the respect it deserves.`,
    img: img3,
  },
];

const BlogDetailPage = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const post = blogPosts.find((post) => post.id === parseInt(id)); // Find the post with the matching ID

  if (!post) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Blog Title and Image */}
        <div className="mb-6">
          <img src={post.img} alt={post.title} className="w-full h-[400px] object-cover mb-6" />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-2">{post.date} - {post.author}</p>
        </div>

        {/* Full Content */}
        <div className="prose max-w-none mb-6">
  {post.content.split('\n').map((line, index) =>
    line.trim() === '' ? <br key={index} /> : <p key={index}>{line}</p>
  )}
</div>


        {/* Back Button */}
        <Link to="/BlogPage" className="text-green-600 hover:text-green-800 font-semibold">
          &larr; Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;
