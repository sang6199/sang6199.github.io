---
layout: default
title: Education & Experience
permalink: /education-experience/
---
{% assign experience_section = site.content | where: "id", "experience" | first %}
{% assign education_section = site.content | where: "id", "education" | first %}
<div class="page-shell">
  <section id="experience" class="container content-section background-section" aria-labelledby="experience-title">
    <h2 id="experience-title">{{ experience_section.title }}</h2>
    <div class="background-list">
      {% for item in experience_section.content %}
        <article class="background-entry">
          <h3>{{ item.title }}</h3>
          <div class="background-entry__details">
            <p class="background-entry__affiliation">{{ item.affiliation }}</p>
            {% if item.location %}<p>{{ item.location }}</p>{% endif %}
            <p class="background-entry__period">{{ item.period }}</p>
            {% if item.detail %}<p>{{ item.detail }}</p>{% endif %}
            {% if item.note %}<p class="background-entry__note">{{ item.note }}</p>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>

  <section id="education" class="container content-section background-section" aria-labelledby="education-title">
    <h2 id="education-title">{{ education_section.title }}</h2>
    <div class="background-list">
      {% for item in education_section.content %}
        <article class="background-entry">
          <h3>{{ item.title }}</h3>
          <div class="background-entry__details">
            <p class="background-entry__affiliation">{{ item.affiliation }}</p>
            {% if item.location %}<p>{{ item.location }}</p>{% endif %}
            <p class="background-entry__period">{{ item.period }}</p>
            {% if item.detail %}<p>{{ item.detail }}</p>{% endif %}
            {% if item.note %}<p class="background-entry__note">{{ item.note }}</p>{% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
</div>
