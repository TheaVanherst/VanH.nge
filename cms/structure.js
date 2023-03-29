
const structure = (S) =>
  S.list()
    .title('Content Types')
    .items([

      S.listItem()
        .title('Filtered Posts')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Posts By Author')
                .child(
                  S.documentTypeList('author')
                    .title('Posts by Author')
                    .child(authorId =>
                      S.documentList()
                        .title('filtered posts')
                        .filter('$authorId == author._ref')
                        .params({ authorId })
                    )
                ),
            ])
        ),

      S.divider(), // TODO: --------- POST TYPES

      ...S.documentTypeListItems()
        .filter(
          (listItem) => [
            'blogPost', 'post', 'artPost', 'designPost'
          ].includes(listItem.getId())
        ),

      S.divider(), // TODO: --------- CATAGORY DATA

      ...S.documentTypeListItems()
        .filter(
          (listItem) => [
            'programingTags','designCategory', 'artCategory', 'genericCategory', 'category'
          ].includes(listItem.getId())
        ),

      S.divider(), // TODO: --------- CATAGORY DATA

      ...S.documentTypeListItems()
        .filter(
          (listItem) => [
            'author', 'internalTags', 'externalTags', 'authorTags'
          ].includes(listItem.getId())
        ),

      S.divider(), // TODO: ---------

      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('settings').documentId('settings')),
              S.listItem()
                .title('Site Colors')
                .child(S.document().schemaType('colours').documentId('colours')),
            ])
        ),
    ])

export { structure };