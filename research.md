---
layout: default
title: Research
permalink: /research/
---
{% assign research_section = site.content | where: "id", "research" | first %}
<div class="page-shell">
  <section id="research-overview" class="container content-section research-overview" aria-labelledby="research-overview-title">
    <h2 id="research-overview-title">Research Overview</h2>
    <p class="research-overview__lead">{{ site.research_overview }}</p>
    <ul class="research-themes">
      {% for theme in site.research_themes %}
        <li>
          <strong>{{ theme.title }}</strong>
          <span>{{ theme.description }}</span>
        </li>
      {% endfor %}
    </ul>
  </section>

  <section id="research" class="container text-container content-section">
    <h2>{{ research_section.title }}</h2>
    {% include section-text.html content=research_section.content %}
  </section>
</div>
