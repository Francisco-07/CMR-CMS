export default {
  name: 'hero',
  title: 'Imagen inicio',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Descripcion',
      type: 'string',
    },
  ],
}
