export default {
  name: 'additionalService',
  title: 'Additional Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {
            title: 'Cake', value: 'cake'
          },
          {
            title: 'House', value: 'house'
          },
          {
            title: 'Map', value: 'map'
          },
          {
            title: 'Briefcase', value: 'briefcase'
          }
        ],
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
