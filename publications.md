---
layout: default
title: Publications
permalink: /publications/
---
{% assign publications_section = site.content | where: "id", "publications" | first %}
<div class="page-shell">
  <section id="publications" class="container text-container content-section">
    <nav class="publication-profiles no-print" aria-label="Publication profiles">
      <ul>
        {%- if site.orcid_url -%}
          <li>
            <a href="{{ site.orcid_url }}" target="_blank" rel="noopener noreferrer" aria-label="ORCID" title="ORCID">
              <img src="{{ site.orcid_icon_path | relative_url }}" alt="">
              <span class="publication-profiles__label">ORCID</span>
              <span class="publication-profiles__arrow" aria-hidden="true">&#8599;</span>
            </a>
          </li>
        {%- endif -%}
        {%- if site.google_scholar_url -%}
          <li>
            <a href="{{ site.google_scholar_url }}" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
              <img src="{{ site.google_scholar_icon_path | relative_url }}" alt="">
              <span class="publication-profiles__label">Google Scholar</span>
              <span class="publication-profiles__arrow" aria-hidden="true">&#8599;</span>
            </a>
          </li>
        {%- endif -%}
        {%- if site.ads_url -%}
          <li>
            <a href="{{ site.ads_url }}" target="_blank" rel="noopener noreferrer" aria-label="NASA ADS" title="NASA ADS">
              <img src="{{ site.ads_icon_path | relative_url }}" alt="">
              <span class="publication-profiles__label">NASA ADS</span>
              <span class="publication-profiles__arrow" aria-hidden="true">&#8599;</span>
            </a>
          </li>
        {%- endif -%}
      </ul>
    </nav>
    {% include section-text.html content=publications_section.content %}
  </section>
</div>
