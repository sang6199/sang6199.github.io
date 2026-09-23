---
layout: default
title: Research Products
permalink: /research-products/
---
<div class="page-shell">
  <section class="container content-section research-products-section" aria-label="Research products">
    <ul class="research-product-list">
      {% for product in site.research_products %}
        <li class="research-product">
          <h2 class="research-product__title">
          {% if product.drive_url and product.drive_url != "" %}
            <a href="{{ product.drive_url }}" target="_blank" rel="noopener noreferrer">{{ product.title }}</a>
          {% else %}
            <span class="research-product__pending">{{ product.title }}</span>
          {% endif %}
          </h2>
          <p class="research-product__reference">
            <span>Reference:</span>
            {% if product.reference_url and product.reference_url != "" %}
              <a href="{{ product.reference_url }}" target="_blank" rel="noopener noreferrer">{{ product.reference }}</a>
            {% else %}
              {{ product.reference }}
            {% endif %}
          </p>
        </li>
      {% endfor %}
    </ul>
  </section>
</div>
