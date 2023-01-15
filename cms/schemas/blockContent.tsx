
//TODO: General Imports
import {defineType, defineArrayMember, defineField} from 'sanity'
//TODO: BLOCK

//TODO: LISTS
import { letterIcon, letterRender } from './libs/lists/letter.jsx'   //letter
import { romanIcon, romanRender }   from './libs/lists/roman.jsx'   //codesnippets

//TODO: MARKS
import { codeSnippetIcon, codeSnippetRender }   from './libs/marks/codeSnippet.jsx'   //codesnippets
import { floatCenterIcon, floatCenterRender }   from './libs/marks/floatCenter.jsx'   //floatcenter
import { floatRightIcon, floatRightRender }     from './libs/marks/floatRight.jsx'    //floatright
import { highlightIcon, highlightRender }       from './libs/marks/highlight.jsx'     //highlight
import { subscriptIcon, subscriptRender }       from './libs/marks/subScript.jsx'     //subscript
import { superscriptIcon, superscriptRender }   from './libs/marks/superScript.jsx'     //superscript

//TODO: TYPES
import {codeRender} from './libs/types/codeBlock.js'     //superscript

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'H1',         value: 'h1'},
        {title: 'H2',         value: 'h2'},
        {title: 'H3',         value: 'h3'},
        {title: 'H4',         value: 'h4'},
        {title: 'Quote',      value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {
          title: 'Lettered', value: 'letter',
          blockEditor: {
            icon: letterIcon,
            render: letterRender}
        },{
          title: 'Numerals', value: 'numeral',
          blockEditor: {
            icon: romanIcon,
            render: romanRender}
        }
      ],
      marks: {
        decorators: [
          {title: 'Strong',     value: 'strong'},
          {title: 'Emphasis',   value: 'em'},
          {title: 'Underline',  value: 'underline' },
          {title: 'Strike',     value: 'strike-through'},
          {
            title: 'CodeSnippet', value: 'codesnippet',
            blockEditor: {
              icon: codeSnippetIcon,
              render: codeSnippetRender}
          },{
            title: 'Highlight', value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender}
          },{
            title: 'Subscript', value: 'subscript',
            blockEditor: {
              icon: subscriptIcon,
              render: subscriptRender}
          },{
            title: 'Superscript', value: 'superscript',
            blockEditor: {
              icon: superscriptIcon,
              render: superscriptRender}
          },{
            title: 'Right', value: 'floatright',
            blockEditor: {
              icon: floatRightIcon,
              render: floatRightRender}
          },{
            title: 'Center', value: 'floatcenter',
            blockEditor: {
              icon: floatCenterIcon,
              render: floatCenterRender}
          }
        ],
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
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),

    defineArrayMember({
      name: 'gallery',
      type: 'object',
      title: 'Gallery',
      fields: [
        defineField({
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        }),
        defineField({
          name: 'display',
          type: 'string',
          title: 'Display as',
          options: {
            list: [
              { title: 'Stacked',           value: 'vertical' },
              { title: 'Dynamic Inline',    value: 'dynamicinline' },
              { title: 'Dynamic Vertical',  value: 'dynamicvertical' },
              { title: 'Dynamic Grid',      value: 'dynamicgrid' },
              { title: 'Grid',              value: 'grid' },
              { title: 'Scroll',            value: 'scroll' },
              { title: 'Carousel',          value: 'carousel' },
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'zoom',
          type: 'boolean',
          title: 'Zoom enabled',
          description: 'Should we enable zooming of images?',
        }),
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images',
        },
        prepare(selection) {
          const { images, image } = selection;

          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Preview image alt text: ${image[0]?.alt}`,
            media: image[0],
          };
        },
      },
    }),

    defineArrayMember({
      title: 'Code',
      type: 'code',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'Javascript',   value: 'javascript'},
          {title: 'TypeScript',   value: 'typescript'},
          {title: 'HTML',         value: 'html'},
          {title: 'CSS',          value: 'css'},
        ]
      },
    }),
  ],
})
