
const structure = (S) =>
  S.list()
    .title('Base')
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
                        .filter('_type == "blogPost" && $authorId == author._ref')
                        .params({ authorId })
                    )
                ),
              S.listItem()
                .title('Posts By category')
                .child(
                  S.documentTypeList('category')
                    .title('Posts by Category')
                    .child(categoryId =>
                      S.documentList()
                        .title('Blog Posts')
                        .filter('_type == "blogPost" && $categoryId == categories[]._ref')
                        .params({ categoryId })
                    )
                ),
            ])
        ),

      S.divider(), // TODO: --------- POST TYPES

      ...S.documentTypeListItems()
        .filter(
          (listItem) => ['blogPost', 'post', 'artPost', 'category'].includes(listItem.getId())
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