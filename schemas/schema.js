import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import eventos from './eventos'
import temas from './temas'
import artistas from './artistas'
import hero from './hero'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([temas, artistas, eventos, hero]),
})
