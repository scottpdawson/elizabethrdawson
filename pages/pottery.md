---
title: Pottery
permalink: /pottery/
hero: hero_pottery.jpg
heroDescription: "Pottery candles from my studio."
metaDescription: "I am a ceramic artist based in Trumansburg NY. After taking an intro course in hand building and wheel throwing during my senior year of high school, I knew I had found a hobby I couldn’t live without."
eleventyNavigation:
  key: Pottery
  order: 1
---

{% imageRt "pottery.png", "Pottery by Elizabeth" %}

I am a ceramic artist based in Trumansburg NY. After taking an intro course in hand building and wheel throwing during my senior year of high school, I knew I had found a hobby I couldn’t live without. I have spent time creating at the [Turk Hill Craft School](https://www.turkhillcrafts.com/) in Rochester, and at the [Clay School of Ithaca](https://clayschoolithaca.com/).

Most recently, I have been creating my work in my garage studio that we created during the COVID-19 pandemic. Equipped with a Shimpo wheel and a Skutt automatic electric kiln, this little garage studio is the perfect space for my creativity to thrive. Check out my pottery pages on [Instagram](https://www.instagram.com/pottery_by_elizabeth/) and [Facebook](https://www.facebook.com/potterybyelizabeth).

## Featured Pieces on Etsy

<ul class="pottery">
{%- for item in pottery -%}
  <li style="background-image:url({{item.image_url}})" onClick="location.href='{{ item.url }}'" title="{{ item.title }}">
    <div class="price">${{ item.px }}</div>
  </li>
{%- endfor -%}
</ul>

<a href="https://www.etsy.com/shop/edpottery" class="button">View my Store on Etsy</a>
