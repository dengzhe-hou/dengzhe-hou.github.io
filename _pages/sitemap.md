---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---
{% comment %}
  Every page, post and collection document as short index rows
  (archive-single.html compact=true): date and type in the rail, title and
  path in main. One section per group, with its count in the rail.
  Written as HTML (this .md file is still run through Markdown, so keep
  each tag on lines without leading indentation of four spaces or more).
{% endcomment %}
{% include base_path %}
{% assign sitemap_pages = site.html_pages | where_exp: "p", "p.sitemap != false" | where_exp: "p", "p.redirect_to == nil" | sort: "url" %}
{% assign sitemap_total = sitemap_pages.size | plus: site.posts.size %}
{% for collection in site.collections %}{% unless collection.output == false or collection.label == "posts" %}{% assign sitemap_total = sitemap_total | plus: collection.docs.size %}{% endunless %}{% endfor %}
{% capture sitemap_meta %}{{ sitemap_total }} entries{% endcapture %}
{% capture sitemap_updated %}Updated {{ site.time | date: "%Y-%m-%d" }}{% endcapture %}
{% capture sitemap_intro %}A list of all the posts and pages found on the site. For you robots out there, there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.{% endcapture %}
{% include page-head.html eyebrow=sitemap_updated meta=sitemap_meta title=page.title intro=sitemap_intro %}

{% capture pages_index %}{% if sitemap_pages.size < 10 %}0{% endif %}{{ sitemap_pages.size }}{% endcapture %}
<section class="section" id="pages" aria-labelledby="pages-h">
<div class="wrap">
{% include section-head.html index=pages_index note="items" title="Pages" id="pages-h" %}
<ol class="rows">
{% for post in sitemap_pages %}{% include archive-single.html post=post compact=true %}{% endfor %}
</ol>
</div>
</section>

{% if site.posts.size > 0 %}
{% capture posts_index %}{% if site.posts.size < 10 %}0{% endif %}{{ site.posts.size }}{% endcapture %}
<section class="section" id="posts" aria-labelledby="posts-h">
<div class="wrap">
{% include section-head.html index=posts_index note="items" title="Posts" id="posts-h" %}
<ol class="rows">
{% for post in site.posts %}{% include archive-single.html post=post compact=true %}{% endfor %}
</ol>
</div>
</section>
{% endif %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" or collection.docs.size == 0 %}
{% case collection.label %}{% when "talks" %}{% assign collection_title = "Presentations" %}{% when "publications" %}{% assign collection_title = "Publications" %}{% when "teaching" %}{% assign collection_title = "Teaching" %}{% else %}{% assign collection_title = collection.label | capitalize %}{% endcase %}
{% capture collection_index %}{% if collection.docs.size < 10 %}0{% endif %}{{ collection.docs.size }}{% endcapture %}
{% capture collection_heading_id %}{{ collection.label }}-h{% endcapture %}
{% assign collection_docs = collection.docs | sort: "date" | reverse %}
<section class="section" id="{{ collection.label }}" aria-labelledby="{{ collection_heading_id }}">
<div class="wrap">
{% include section-head.html index=collection_index note="items" title=collection_title id=collection_heading_id %}
<ol class="rows">
{% for post in collection_docs %}{% include archive-single.html post=post compact=true %}{% endfor %}
</ol>
</div>
</section>
{% endunless %}
{% endfor %}
