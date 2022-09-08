export default {
  name: 'eventos',
  title: 'Eventos',
  type: 'document',
  initialValue: {
    disponible: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Nombre del evento',
      type: 'string',
    },
    {
      name: 'ciudad',
      title: 'Ciudad',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    {
      title: 'Esta disponible el evento?',
      name: 'disponible',
      type: 'boolean',
    },
  ],
}
