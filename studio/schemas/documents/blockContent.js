/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'}, 
          {title: 'Emphasis', value: 'em'},
          {title: "Code", value: "code" },
          {title: "Underline", value: "underline" },
          {title: "Strike", value: "strike-through" },
          {title: "highlight", value: "highlight" }
          
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: {hotspot: true},
    },
    {
      title: 'Code Snippet',
      type: 'code',
      options: {
        languageAlternatives: [
          { title: 'JavaScript', value: 'js' },
          { title: 'JSX', value: 'jsx' },
          { title: 'CSS', value: 'css' },
          { title: 'SCSS', value: 'scss' },
          { title: 'bash', value: 'bash' },
          { title: 'python', value: 'python' },
          { title: 'HTML', value: 'html' },
          { title: 'TypeScript', value: 'ts' },
          { title: 'Go', value: 'go' },
          { title: 'rust', value: 'rust' },
          { title: 'C#', value: 'csharp' },
          { title: 'c', value: 'c' },
          { title: 'C++', value: 'cpp' },
          { title: 'JSON', value: 'json' },
        ]
      }
    }
  ],
}