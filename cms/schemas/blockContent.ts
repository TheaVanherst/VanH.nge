
import {defineType, defineArrayMember} from 'sanity'

//TODO: BLOCK

//TODO: LISTS
import { letterIcon, letterRender } from './libs/lists/letter.jsx'   //letter
import { romanIcon, romanRender }   from './libs/lists/roman.jsx'   //codesnippets

//TODO: MARKS
import { codeSnippetIcon, codeSnippetRender }   from './libs/marks/codeSnippet.jsx'     //  code snippet
import { floatCenterIcon, floatCenterRender }   from './libs/marks/floatCenter.jsx'     //  float center
import { floatRightIcon, floatRightRender }     from './libs/marks/floatRight.jsx'      //  float right
import { highlightIcon, highlightRender }       from './libs/marks/highlight.jsx'       //  highlight
import { subscriptIcon, subscriptRender }       from './libs/marks/subScript.jsx'       //  sub script
import { superscriptIcon, superscriptRender }   from './libs/marks/superScript.jsx'     //  super script
import { accentIcon, accentRender }             from './libs/marks/accentColours.jsx'   //  accent Colours

//TODO: MARKS / BLOCK DATA
import { readMoreIcon, readMoreRender }         from './libs/types/readMore.jsx'  //superscript
import { separatorIcon }                        from './libs/types/separatorsElement.jsx'  //superscript
import { blockquoteIcon }                        from './libs/types/blockquote.jsx'

// TODO: components
import { altTextRequest } from './components/altTextReq.jsx'


export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      options: {
        spellCheck: true,
      },
      styles: [
        { title: 'normal',  value: 'normal'},
        { title: 'H1',      value: 'h1'},
        { title: 'H2',      value: 'h2'},
        { title: 'H3',      value: 'h3'},
        { title: 'H4',      value: 'h4'},
      ],
      lists: [
        {title: 'Bullet',   value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {
          title: 'Lettered',  value: 'letter',
          icon: letterIcon,   component: letterRender},
        {
          title: 'Numerals',  value: 'numeral',
          icon: romanIcon,    component: romanRender}
      ],
      marks: {
        decorators: [
          {title: 'Strong',     value: 'strong'},
          {title: 'Emphasis',   value: 'em'},
          {title: 'Underline',  value: 'underline' },
          {title: 'Strike',     value: 'strike-through'},
          {
            title: 'Accent',   value: 'accent',
            icon: accentIcon,  component: accentRender,
          }, {
            title: 'CodeSnippet',   value: 'codesnippet',
            icon: codeSnippetIcon,  component: codeSnippetRender,
          },{
            title: 'Highlight',     value: 'highlight',
            icon: highlightIcon,    component: highlightRender,
          },{
            title: 'Subscript',     value: 'subscript',
            icon: subscriptIcon,    component: subscriptRender,
          },{
            title: 'Superscript',   value: 'superscript',
            icon: superscriptIcon,  component: superscriptRender,
          },{
            title: 'Right',         value: 'floatright',
            icon: floatRightIcon,   component: floatRightRender,
          },{
            title: 'Center',        value: 'floatcenter',
            icon: floatCenterIcon,  component: floatCenterRender,
          },{
            title: 'Read More',     value: 'readmore',
            icon: readMoreIcon,     component: readMoreRender,
          }
        ],
        annotations: [{
          title: 'URL', name: 'link',
          type: 'object',
          fields: [{
            title: 'URL', name: 'href',
            type: 'url',
          }],
        }],
      },
    }),
    defineArrayMember({
      name: 'separator', title: 'separator',
      type: 'object',
      icon: separatorIcon,
      initialValue: {
        title: "Normal Separator", value: "normal"
      },
      fields: [{
        name: 'style',
        type: 'string',
        options: {
          list: [
            { title: "Wave Separator", value: "wave" },
            { title: "Normal Separator", value: "normal" },
          ],
        },
      }],
      preview: {
        select: {
          styleType: 'style'
        },
        prepare(selection) {
          const { styleType } = selection
          return {
            title: "Content Separator",
            subtitle: "Type: " + styleType + " separator"
          }
        },
      },
    }),
    defineArrayMember({
      name: 'blockquote', title: 'block Quote',
      type: 'object',
      icon: blockquoteIcon,
      fields: [{
        title: 'Quote', name: 'quote',
        type: 'string'
      },{
        title: 'Author', name: 'author',
        type: 'string'
      },{
        title: 'Citation', name: 'cite',
        type: 'string'
      }
      ],
      preview: {
        select: {
          quote: 'quote', author: 'author'},
        prepare(selection) {
          const { quote, author } = selection
          return {
            title: "a Quote derived from " + author,
            subtitle: quote
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
      name: 'gallery',    title: 'Gallery',
      type: 'object',
      fields: [{
        name: 'images',   title: 'Images',
        type: 'array',
        of: [{
          name: 'image',  title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',  title: 'Alternative text', type: 'string',
              validation: Rule => [Rule.max(50).warning('50 characters or less')]
            },{
              name: 'citation',  title: 'citation title', type: 'string',
              validation: Rule => [Rule.max(30).warning('30 characters or less')]
            },{
              name: 'citeURL',  title: 'citation url', type: 'string'
            }
          ],
        }],
      },{
        name: 'comments', title: 'Comments enabled',
        type: 'boolean',
        initialValue: false,
        description: 'Enable comments under the gallery?',
      },{
        name: 'display',  title: 'Display as',
        type: 'string',
        initialValue:
          { title: 'Stacked',           value: 'vertical'},
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Stacked',          value: 'vertical'},
            {title: 'Dynamic Inline',   value: 'dynamicinline'},
            {title: 'Dynamic Vertical', value: 'dynamicvertical'},
            {title: 'Dynamic Grid',     value: 'dynamicgrid'},
            {title: 'Grid',             value: 'grid'},
            {title: 'Scroll',           value: 'scroll'},
            {title: 'Carousel',         value: 'carousel'},
          ],
          layout: 'dropdown',
        },
      },{
        name: 'zoom',     title: 'Zoom enabled',
        type: 'boolean',
        initialValue: false,
        description: 'Should we enable zooming of images?',
      }],
      preview: {
        select: {
          images: 'images', image: 'images'},
        prepare(selection) {
          const { images, image } = selection;
          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: altTextRequest(image),
            media: image[0]
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
