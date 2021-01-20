---
title: Pottery
permalink: /pottery/
hero: pottery.jpg
heroDescription: "Sitting at my family's 1941 Steinway Baby Grand"
metaDescription: "Page description here."
eleventyNavigation:
  key: Pottery
  order: 1
---

{% imageRt "pottery.png", "Pottery by Elizabeth" %}

Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Check out my pottery pages on [Instagram](https://www.instagram.com/pottery_by_elizabeth/) and [Facebook](https://www.facebook.com/potterybyelizabeth).

## Recent Pieces on Etsy
<ul class="pottery">
{%- for item in pottery -%}
  <li style="background-image:url({{item.image_url}})" onClick="location.href='{{ item.url }}'" title="{{ item.title }}">
    <div class="price">${{ item.price }}</div>
  </li>
{%- endfor -%}
</ul>

<a href="https://www.etsy.com/shop/edpottery" class="button">View my Store on Etsy</a>


