---
title: Second blog!!! post from CMS with a block code example
date: 2020-07-30T17:22:03.547Z
description: "Joy years doors all would again rooms these. Solicitude announcing
  as to sufficient my. No my reached suppose proceed pressed perhaps he.
  Eagerness it delighted pronounce repulsive furniture no. Excuse few the remain
  highly feebly add people manner say. It high at my mind by roof. No wonder
  worthy in dinner. "
---
🤓 Welcome fellow [Tailwind CSS](https://www.tailwindcss.com/) and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.

> The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). 
>
> \- Someone famous  said

The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.

```javascript
  async asyncData({ $content }) {
    const blogs = await $content("blog").sortBy("createdAt", "asc").fetch();

    return { blogs};
  },
  data: () => ({
    searchQuery: "",
    blogs: []
  })
```

 Sed dignissdddd
im lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.

1. Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.
2. Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.
3. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.