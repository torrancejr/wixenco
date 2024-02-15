class HelloController < ApplicationController
  def world
    # Set meta tags
    set_meta_tags(
      title: "wixenco: web design | seo | west chester, pa ",
      site: 'wixenco',
      reverse: true,
      description: "Web design and SEO company in West Chester, Pa",
      keywords: ['web design', 'web developer', 'web developer near me', 'web design services', 'website development' ],
      current_url: root_url,
      canonical: root_url,
      og: {
        url: root_url,
        site_name: 'wixenco',
        title: "wixenco: web design | seo | west chester, pa",
        description: "Web design and SEO company in West Chester, Pa",
        type: 'website'
      }
    )
  end
end
