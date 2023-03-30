
import {defineType, defineArrayMember} from 'sanity'

//TODO: BLOCK
import { internalIcon, internalRender }         from './internalReference'  // internal links
import { externalIcon, externalRender }         from './externalReference'  // external links

//TODO: MARKS
import { codeSnippetIcon, codeSnippetRender }   from '../marks/codeSnippet.jsx'     //  code snippet
import { highlightIcon, highlightRender }       from '../marks/highlight.jsx'       //  highlight
import { subscriptIcon, subscriptRender }       from '../marks/subScript.jsx'       //  sub script
import { superscriptIcon, superscriptRender }   from '../marks/superScript.jsx'     //  super script
import { accentIcon, accentRender }             from '../marks/accentColours.jsx'   //  accent colours

const descContent = defineType({
  title: 'Block Content', name: 'descContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      options: {
        spellCheck: true,
      },
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong',     value: 'strong'},
          {title: 'Emphasis',   value: 'em'},
          {title: 'Underline',  value: 'underline' },
          {title: 'Strike',     value: 'strike-through'},
          {
            title: 'Accent',   value: 'accent',
            icon: accentIcon,  component: accentRender,
          },{
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
          }
        ],
        annotations: [
          {
            title: 'External Link', name: 'externalLink',
            type: 'object',
            fields: [
              {
                title: 'URL', name: 'href',
                type: 'url',
              },{
                title: 'Open in a new Window?', name: 'blank',
                type: 'boolean', initialValue: false,
              }
            ],
            icon: externalIcon, component: externalRender,
          },{
            title: 'Internal link', name: 'internalLink',
            type: 'object',
            fields: [
              {
                name: 'reference', title: 'Reference',
                type: 'reference',
                to: [
                  { type: 'author' },
                  { type: 'blogPost' },
                ],
                options: {
                  disableNew: true,
                }
              },{
                title: 'Open in a new Window?', name: 'blank',
                type: 'boolean', initialValue: false,
              }
            ],
            icon: internalIcon, component: internalRender,
          }
        ],
      },
    }),
  ],
})

export default descContent;