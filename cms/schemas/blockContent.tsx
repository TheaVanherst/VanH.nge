
//TODO: General Imports
import {defineType, defineArrayMember, defineField} from 'sanity'
//TODO: BLOCK

//TODO: LISTS
import { letterIcon, letterRender } from './libs/lists/letter.jsx'   //letter
import { romanIcon, romanRender }   from './libs/lists/roman.jsx'   //codesnippets

//TODO: MARKS
import { codeSnippetIcon, codeSnippetRender }   from './libs/marks/codeSnippet.jsx'     //codesnippets
import { floatCenterIcon, floatCenterRender }   from './libs/marks/floatCenter.jsx'     //floatcenter
import { floatRightIcon, floatRightRender }     from './libs/marks/floatRight.jsx'      //floatright
import { highlightIcon, highlightRender }       from './libs/marks/highlight.jsx'       //highlight
import { subscriptIcon, subscriptRender }       from './libs/marks/subScript.jsx'       //subscript
import { superscriptIcon, superscriptRender }   from './libs/marks/superScript.jsx'     //superscript

//TODO: MARKS / BLOCK DATA
import { readMoreIcon, readMoreRender }         from './libs/types/readMore.jsx'  //superscript
import { separatorIcon }                        from './libs/types/separatorsElement.jsx'  //superscript

// TODO: components
import { pull } from './components/altTextReq.jsx'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'H1',
          value: 'h1'},
        { title: 'H2',
          value: 'h2'},
        { title: 'H3',
          value: 'h3'},
        { title: 'H4',
          value: 'h4'},
        { title: 'Quote',
          value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {
          title: 'Lettered',
          value: 'letter',
          icon: letterIcon,
          component: letterRender
        },{
          title: 'Numerals',
          value: 'numeral',
          icon: romanIcon,
          component: romanRender
        }
      ],
      marks: {
        decorators: [
          {title: 'Strong',     value: 'strong'},
          {title: 'Emphasis',   value: 'em'},
          {title: 'Underline',  value: 'underline' },
          {title: 'Strike',     value: 'strike-through'},
          {
            title: 'CodeSnippet',
            value: 'codesnippet',
            icon: codeSnippetIcon,
            component: codeSnippetRender,
          },{
            title: 'Highlight',
            value: 'highlight',
            icon: highlightIcon,
            component: highlightRender,
          },{
            title: 'Subscript',
            value: 'subscript',
            icon: subscriptIcon,
            component: subscriptRender,
          },{
            title: 'Superscript',
            value: 'superscript',
            icon: superscriptIcon,
            component: superscriptRender,
          },{
            title: 'Right',
            value: 'floatright',
            icon: floatRightIcon,
            component: floatRightRender,
          },{
            title: 'Center',
            value: 'floatcenter',
            icon: floatCenterIcon,
            component: floatCenterRender,
          },{
            title: 'Read More',
            value: 'readmore',
            icon: readMoreIcon,
            component: readMoreRender,
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

    defineArrayMember({
      name: 'separator',
      title: 'separator',
      type: 'object',
      icon: separatorIcon,
      initialValue: {
        title: "Normal Separator", value: "normal"
      },
      fields: [
        {
          name: 'style',
          type: 'string',
          options: {
            list: [
              { title: "Wave Separator", value: "wave" },
              { title: "Normal Separator", value: "normal" },
            ],
          },
        },
      ],
      preview: {
        select: {
          styleType: 'style'
        },
        prepare(selection) {
          const {styleType} = selection
          return {
            title: "Content Separator",
            subtitle: "Type: " + styleType + " separator"
          }
        },
      },
    }),

    defineArrayMember({
      type: 'image',
      options: {
        hotspot: true
      },
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
                  validation: Rule => [Rule.max(50).warning('30 characters or less')]
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
          initialValue: "dynamicvertical",
          options: {
            list: [
              {
                title: 'Stacked',
                value: 'vertical'
              }, {
                title: 'Dynamic Inline',
                value: 'dynamicinline'
              }, {
                title: 'Dynamic Vertical',
                value: 'dynamicvertical'
              }, {
                title: 'Dynamic Grid',
                value: 'dynamicgrid'
              }, {
                title: 'Grid',
                value: 'grid'
              }, {
                title: 'Scroll',
                value: 'scroll'
              }, {
                title: 'Carousel',
                value: 'carousel'
              },
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'zoom',
          type: 'boolean',
          title: 'Zoom enabled',
          initialValue: false,
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
            subtitle: pull(image),
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
        ],
        withFilename: true,
      },
    }),
  ],
})
