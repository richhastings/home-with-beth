export default {
  name: 'gallery',
  type: 'object',
  title: 'Image',
  fields: [
    {name: 'images', title: 'Images', type: 'images'},
    {
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should we display these images?',
      options: {
        list: [
          { title: 'Stacked', value: 'stacked' },
          { title: 'Grid', value: 'grid' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'ratio',
      type: 'string',
      title: 'Aspect Ratio',
      options: {
        list: [
          'landscape', 'portrait', 'square'
        ],
      }
    }
  ],
}