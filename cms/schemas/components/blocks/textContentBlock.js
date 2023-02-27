
import { defineType, defineArrayMember }        from 'sanity'

//TODO: BLOCK
import { internalIcon, internalRender }         from '../blocks/internalReference.jsx'
import galleryContentBlock                      from '../blocks/galleryContentBlock.js'

//TODO: LISTS
import { letterIcon, letterRender }             from '../lists/letter.jsx'   //letter
import { romanIcon, romanRender }               from '../lists/roman.jsx'   //code snippets

//TODO: MARKS
import { codeSnippetIcon, codeSnippetRender }   from '../marks/codeSnippet.jsx'     //  code snippet
import { floatCenterIcon, floatCenterRender }   from '../marks/floatCenter.jsx'     //  float center
import { floatRightIcon, floatRightRender }     from '../marks/floatRight.jsx'      //  float right
import { highlightIcon, highlightRender }       from '../marks/highlight.jsx'       //  highlight
import { subscriptIcon, subscriptRender }       from '../marks/subScript.jsx'       //  sub script
import { superscriptIcon, superscriptRender }   from '../marks/superScript.jsx'     //  super script
import { accentIcon, accentRender }             from '../marks/accentColours.jsx'   //  accent colours

//TODO: MARKS / BLOCK DATA
import { readMoreIcon, readMoreRender }         from '../types/readMore.jsx'            //superscript
import { separatorIcon }                        from '../types/separatorsElement.jsx'   //superscript
import { blockquoteIcon }                       from '../types/blockquote.jsx'
import {altTestBlock, citationBlock, citationURL} from '../libs/citationBlock'
import nsfwBlock from '../libs/nsfwToggle'          //blockquote

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
        annotations: [
          {
            title: 'External Link', name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL', name: 'href',
                type: 'url',
              },{
                title: 'Open in a new Window?', name: 'blank',
                type: 'boolean',
              }
            ],
          },{
            name: 'internalLink', title: 'Internal link',
            type: 'object',
            fields: [{
              name: 'reference', title: 'Reference',
              type: 'reference',
              to: [
                { type: 'post' },
                { type: 'blogPost' },
              ]
            }],
            icon: internalIcon, component: internalRender,
          }
        ],
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
      fields: [
        {
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
      fields: [
        altTestBlock,
        citationBlock,
        citationURL,
        nsfwBlock
      ],
    }),

    galleryContentBlock,

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
