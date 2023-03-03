
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
                        .title('Blog Posts')
                        .filter('$authorId == author._ref')
                        .params({ authorId })
                    )
                ),
              S.listItem()
                .title('Posts By design Categories')
                .child(
                  S.documentTypeList('category')
                    .title('Search by Category')
                    .child(category =>
                      S.documentList()
                        .title('filtered posts')
                        .filter('$category == categories[]._ref')
                        .params({ category })
                    )
                ),
            ])
        ),

      S.divider(), // TODO: --------- POST TYPES

      ...S.documentTypeListItems()
        .filter(
          (listItem) => ['blogPost', 'post', 'artPost'].includes(listItem.getId())
        ),

      S.divider(), // TODO: --------- CATAGORY DATA

      ...S.documentTypeListItems()
        .filter(
          (listItem) => ['designCategory', 'artCategory', 'genericCategory', 'category'].includes(listItem.getId())
        ),

      S.divider(), // TODO: --------- CATAGORY DATA

      ...S.documentTypeListItems()
        .filter(
          (listItem) => ['author', 'role'].includes(listItem.getId())
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